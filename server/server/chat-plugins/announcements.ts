/*
 * Announcements chat plugin
 * By Spandamn
 */
import { TLkey } from '../../sim/dex-text';

export interface AnnouncementOptions {
	activityNumber?: number;
	source: string;
	timeoutMins?: number;
	timerEnd?: number;
}

export interface AnnouncementData extends AnnouncementOptions {
	readonly activityid: 'announcement';
}

export class Announcement extends Rooms.MinorActivity {
	readonly activityid = 'announcement' as ID;
	name = 'Announcement';
	activityNumber: number;
	source: string;
	constructor(room: Room, options: AnnouncementOptions) {
		super(room);
		this.activityNumber = options.activityNumber || room.nextGameNumber();
		this.source = options.source;
		this.setTimer(options);
	}

	generateAnnouncement() {
		return `<div class="broadcast-blue"><p style="margin: 2px 0 5px 0"><strong style="font-size:11pt">${this.source}</strong></p></div>`;
	}

	displayTo(user: User, connection: Connection | null = null) {
		const recipient = connection || user;
		recipient.sendTo(this.room, `|uhtml|announcement${this.activityNumber}|${this.generateAnnouncement()}`);
	}

	display() {
		const announcement = this.generateAnnouncement();
		for (const id in this.room.users) {
			const thisUser = this.room.users[id];
			thisUser.sendTo(this.room, `|uhtml|announcement${this.activityNumber}|${announcement}`);
		}
	}

	override onConnect(user: User, connection: Connection | null = null) {
		this.displayTo(user, connection);
	}

	destroy() {
		this.room.send(`|uhtmlchange|announcement${this.activityNumber}|<div class="infobox">(${this.room.TL`The announcement has ended.`})</div>`);
		this.room.setMinorActivity(null);
	}

	toJSON(): AnnouncementData {
		return {
			source: this.source,
			activityNumber: this.activityNumber,
			timeoutMins: this.timeoutMins,
			timerEnd: this.timerEnd,
			activityid: 'announcement',
		};
	}

	save() {
		this.room.settings.minorActivity = this.toJSON();
		this.room.saveSettings();
	}
}

export const commands: Chat.ChatCommands = {
	announcement: {
		htmlcreate: 'new',
		create: 'new',
		new(target, room, user, connection, cmd, message) {
			room = this.requireRoom();
			if (!target) return this.parse('/help announcement new');
			target = target.trim();
			if (room.battle) throw new Chat.ErrorMessage(this.TL`Battles do not support announcements.`);

			const text = this.filter(target);
			if (target !== text) throw new Chat.ErrorMessage(this.TL`You are not allowed to use filtered words in announcements.`);

			const supportHTML = cmd === 'htmlcreate';

			this.checkCan('minigame', null, room);
			if (supportHTML) this.checkCan('declare', null, room);
			this.checkChat();
			if (room.minorActivity) {
				throw new Chat.ErrorMessage(this.TL`There is already a poll or announcement in progress in this room.`);
			}

			const source = supportHTML ? this.checkHTML(Chat.collapseLineBreaksHTML(target)) : Chat.formatText(target, true);

			room.setMinorActivity(new Announcement(room, { source }));

			this.roomlog(`${user.name} used ${message}`);
			this.modlog('ANNOUNCEMENT');
			return this.privateModAction(room.TL`An announcement was started by ${user.name}.`);
		},
		newhelp: [TLkey`/announcement create [announcement] - Creates an announcement. Requires: % @ # ~`],

		htmledit: 'edit',
		edit(target, room, user, connection, cmd, message) {
			room = this.requireRoom();
			const announcement = this.requireMinorActivity(Announcement);

			if (!target) return this.parse('/help announcement edit');
			target = target.trim();
			const text = this.filter(target);
			if (target !== text) throw new Chat.ErrorMessage(this.TL`You are not allowed to use filtered words in announcements.`);

			const supportHTML = cmd === 'htmledit';

			this.checkCan('minigame', null, room);
			if (supportHTML) this.checkCan('declare', null, room);
			this.checkChat();

			const source = supportHTML ? this.checkHTML(Chat.collapseLineBreaksHTML(target)) : Chat.formatText(target, true);
			announcement.source = source;
			announcement.save();

			this.roomlog(`${user.name} used ${message}`);
			this.modlog('ANNOUNCEMENT EDIT');
			this.privateModAction(room.TL`The announcement was edited by ${user.name}.`);
			this.parse('/announcement display');
		},
		edithelp: [TLkey`/announcement edit [announcement] - Edits the announcement. Requires: % @ # ~`],

		timer(target, room, user) {
			room = this.requireRoom();
			const announcement = this.requireMinorActivity(Announcement);

			if (target) {
				this.checkCan('minigame', null, room);
				if (target === 'clear') {
					if (!announcement.endTimer()) throw new Chat.ErrorMessage(this.TL`There is no timer to clear.`);
					return this.add(this.TL`The announcement timer was turned off.`);
				}
				const timeoutMins = parseFloat(target);
				if (isNaN(timeoutMins) || timeoutMins <= 0 || timeoutMins > 7 * 24 * 60) {
					throw new Chat.ErrorMessage(this.TL`Time should be a number of minutes less than one week.`);
				}
				announcement.setTimer({ timeoutMins });
				room.add(timeoutMins === 1 ?
					room.TL`The announcement timer was turned on: the announcement will end in ${timeoutMins} minute.` :
					room.TL`The announcement timer was turned on: the announcement will end in ${timeoutMins} minutes.`);
				this.modlog('ANNOUNCEMENT TIMER', null, `${timeoutMins} minutes`);
				const name = user.name;
				return this.privateModAction(timeoutMins === 1 ?
					room.TL`The announcement timer was set to ${timeoutMins} minute by ${name}.` :
					room.TL`The announcement timer was set to ${timeoutMins} minutes by ${name}.`);
			} else {
				if (!this.runBroadcast()) return;
				if (announcement.timeout) {
					const timeoutMins = announcement.timeoutMins;
					return this.sendReply(timeoutMins === 1 ?
						this.TL`The announcement timer is on and will end in ${timeoutMins} minute.` :
						this.TL`The announcement timer is on and will end in ${timeoutMins} minutes.`);
				} else {
					return this.sendReply(this.TL`The announcement timer is off.`);
				}
			}
		},
		timerhelp: [
			TLkey`/announcement timer [minutes] - Sets the announcement to automatically end after [minutes] minutes. Requires: % @ # ~`,
			TLkey`/announcement timer clear - Clears the announcement's timer. Requires: % @ # ~`,
		],

		close: 'end',
		stop: 'end',
		end(target, room, user) {
			room = this.requireRoom();
			this.checkCan('minigame', null, room);
			this.checkChat();
			const announcement = this.requireMinorActivity(Announcement);
			announcement.end(room);
			this.modlog('ANNOUNCEMENT END');
			this.privateModAction(room.TL`The announcement was ended by ${user.name}.`);
		},
		endhelp: [TLkey`/announcement end - Ends a announcement and displays the results. Requires: % @ # ~`],

		show: '',
		display: '',
		''(target, room, user, connection) {
			room = this.requireRoom();
			const announcement = this.requireMinorActivity(Announcement);
			if (!this.runBroadcast()) return;
			room.update();

			if (this.broadcasting) {
				announcement.display();
			} else {
				announcement.displayTo(user, connection);
			}
		},
		displayhelp: [TLkey`/announcement display - Displays the announcement`],
	},
	announcementhelp: [
		TLkey`/announcement allows rooms to run their own announcements. These announcements are limited to one announcement at a time per room.`,
		TLkey`Accepts the following commands:`,
		TLkey`/announcement create [announcement] - Creates a announcement. Requires: % @ # ~`,
		TLkey`/announcement htmlcreate [announcement] - Creates a announcement, with HTML allowed. Requires: # ~`,
		TLkey`/announcement edit [announcement] - Edits the announcement. Requires: % @ # ~`,
		TLkey`/announcement htmledit [announcement] - Edits the announcement, with HTML allowed. Requires: # ~`,
		TLkey`/announcement timer [minutes] - Sets the announcement to automatically end after [minutes]. Requires: % @ # ~`,
		TLkey`/announcement display - Displays the announcement`,
		TLkey`/announcement end - Ends a announcement. Requires: % @ # ~`,
	],
};

// should handle restarts and also hotpatches
export function start() {
	Chat.multiLinePattern.register('/announcement (new|create|htmlcreate|edit|htmledit) ');

	for (const room of Rooms.rooms.values()) {
		if (room.settings.minorActivity?.activityid === 'announcement') {
			room.setMinorActivity(new Announcement(room, room.settings.minorActivity), true);
		}
	}
}
