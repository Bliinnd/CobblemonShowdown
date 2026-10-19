/**
 * CobblemonShowdown : calculateur de dégâts intégré.
 *
 * Les calculs viennent du calculateur de Smogon (@smogon/calc, js/lib/smogon-calc/),
 * chargé à la première ouverture. Les champs acceptent les noms en français (ou en
 * anglais) ; les Pokémon peuvent être repris des équipes du teambuilder.
 */

import { PS, type PSRoom } from "./client-main";
import { PSPanelWrapper, PSRoomPanel } from "./panels";
import { Dex, TL } from "./battle-dex";
import { BattleNatures } from "./battle-dex-data";
import { Teams } from "./battle-teams";

declare const calc: any;

type StatID = Dex.StatName;
type BoostID = Exclude<StatID, 'hp'>;
const STATS: StatID[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
const TYPES = [
	'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground',
	'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy', 'Stellar',
];

interface CalcSide {
	species: string;
	level: string;
	item: string;
	ability: string;
	nature: string;
	evs: { [k in StatID]: string };
	ivs: { [k in StatID]: string };
	boosts: { [k in BoostID]: number };
	teraType: string;
	status: string;
	hp: string;
	moves: string[];
	screens: boolean;
	stealthRock: boolean;
	helpingHand: boolean;
}

function emptySide(species: string, moves: string[]): CalcSide {
	return {
		species, level: '100', item: '', ability: '', nature: 'Serious',
		evs: { hp: '0', atk: '0', def: '0', spa: '0', spd: '0', spe: '0' },
		ivs: { hp: '31', atk: '31', def: '31', spa: '31', spd: '31', spe: '31' },
		boosts: { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
		teraType: '', status: '', hp: '100', moves,
		screens: false, stealthRock: false, helpingHand: false,
	};
}

/** Nom affiché (français si la langue du site l'est) d'une espèce, d'une capacité, d'un objet ou d'un talent. */
function shown(kind: 'species' | 'moves' | 'items' | 'abilities', name: string) {
	if (!name) return '';
	const effect = Dex[kind].get(name);
	return effect.exists ? Dex.text.get(effect).name : name;
}
const TABLES = { species: 'Pokedex', moves: 'Moves', items: 'Items', abilities: 'Abilities' } as const;
/** Nom anglais (celui du calculateur) à partir de ce qui a été tapé, ou '' s'il est inconnu. */
function english(kind: 'species' | 'moves' | 'items' | 'abilities', typed: string) {
	if (!typed.trim()) return '';
	const id = Dex.text.lookup(TABLES[kind], typed) || typed;
	const effect = Dex[kind].get(id);
	return effect.exists ? effect.name : '';
}
function natureName(nature: string) {
	return Dex.text.get({ effectType: 'Nature', name: nature } as any).name;
}
function typeName(type: string) {
	return Dex.text.get(Dex.types.get(type)).name;
}
function formatNumber(value: number) {
	return value.toLocaleString('fr-FR', { maximumFractionDigits: 1 });
}

const KO_AFTER: { [k: string]: string } = {
	'Stealth Rock': 'Piège de Roc', 'Spikes': 'Picots', '1 layer of Spikes': '1 couche de Picots',
	'2 layers of Spikes': '2 couches de Picots', '3 layers of Spikes': '3 couches de Picots',
	'Leftovers recovery': 'récupération des Restes', 'Black Sludge recovery': 'récupération de la Boue Noire',
	'Black Sludge damage': 'dégâts de la Boue Noire', 'Sticky Barb damage': 'dégâts du Piquant',
	'sandstorm damage': 'dégâts de la tempête de sable', 'hail damage': 'dégâts de la grêle',
	'poison damage': 'dégâts du poison', 'toxic damage': 'dégâts du poison grave',
	'burn damage': 'dégâts de la brûlure', 'reduced burn damage': 'dégâts réduits de la brûlure',
	'Grassy Terrain recovery': 'soin du Champ Herbu', 'Leech Seed damage': 'dégâts de Vampigraine',
	'Leech Seed recovery': 'soin de Vampigraine', 'Salt Cure': 'Salaison', 'trapping damage': 'dégâts d\'étreinte',
};
/** Traduit le texte de K.O. du calculateur (« 37.5% chance to 2HKO after Stealth Rock »). */
function koText(text: string) {
	if (Dex.text.getLanguage() !== 'fr' || !text) return text;
	const ko = (term: string) => {
		if (term === 'OHKO') return 'K.O. en 1 coup';
		const turns = /^KO in (\d+) turns$/.exec(term);
		if (turns) return `K.O. en ${turns[1]} tours`;
		return `K.O. en ${parseInt(term)} coups`;
	};
	const KO = '(OHKO|\\d+HKO|KO in \\d+ turns)';
	return text
		.replace(/approx\. /g, 'env. ')
		.replace(new RegExp(`(\\d+(?:\\.\\d+)?)% chance to ${KO}`, 'g'),
			(_, pct: string, term: string) => `${pct.replace('.', ',')} % de chances de ${ko(term)}`)
		.replace(new RegExp(`guaranteed ${KO}`, 'g'), (_, term: string) => `${ko(term)} assuré`)
		.replace(new RegExp(`possible ${KO}`, 'g'), (_, term: string) => `${ko(term)} possible`)
		.replace('not a KO', 'pas de K.O.')
		.replace(/ after (.+?)(?=\)|$| \()/g, (_, list: string) => ' après ' + list.split(/, (?:and )?| and /)
			.map(part => KO_AFTER[part] || part).join(', '));
}

let loading: Promise<void> | null = null;
function loadCalc() {
	if (typeof calc !== 'undefined' && calc.calculate) return Promise.resolve();
	const load = (file: string) => new Promise<void>((resolve, reject) => {
		const script = document.createElement('script');
		script.src = `${Dex.resourcePrefix}js/lib/smogon-calc/${file}`;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(file));
		document.body.appendChild(script);
	});
	loading ||= load('calc-data.min.js').then(() => load('calc.min.js')).catch(err => {
		loading = null;
		throw err;
	});
	return loading;
}

let datalists: preact.VNode | null = null;
/** Listes de suggestions des champs (noms dans la langue du site). */
function renderDatalists() {
	if (datalists) return datalists;
	const names = (kind: 'species' | 'moves' | 'items', table: { [id: string]: any } | undefined) => {
		const list: { [name: string]: true } = {};
		for (const id in table || {}) {
			const effect = Dex[kind].get(id);
			if (!effect.exists || (effect as any).num < 0 || (effect as any).isNonstandard === 'CAP') continue;
			if (kind === 'moves' && ((effect as Dex.Move).isMax || (effect as Dex.Move).isZ)) continue;
			list[Dex.text.get(effect).name] = true;
		}
		return Object.keys(list).sort((a, b) => a.localeCompare(b, 'fr')).map(name => <option value={name} />);
	};
	datalists = <div style="display:none">
		<datalist id="calc-species">{names('species', window.BattlePokedex)}</datalist>
		<datalist id="calc-moves">{names('moves', window.BattleMovedex)}</datalist>
		<datalist id="calc-items">{names('items', window.BattleItems)}</datalist>
	</div>;
	return datalists;
}

class CalcPanel extends PSRoomPanel {
	static readonly id = 'calculateur';
	static readonly routes = ['calculateur'];
	static readonly location = 'right';
	static readonly icon = <i class="fa fa-calculator" aria-hidden></i>;
	static readonly title = 'Calculateur';
	static getTitle() {
		return TL`Damage calculator`;
	}
	declare state: {
		sides: [CalcSide, CalcSide], gameType: string, weather: string, terrain: string,
		crit: boolean, ready?: boolean, error?: string,
	};
	constructor(props?: { room: PSRoom }) {
		super(props);
		this.state = {
			sides: [
				emptySide('Garchomp', ['Earthquake', 'Dragon Claw', 'Stone Edge', 'Swords Dance']),
				emptySide('Corviknight', ['Brave Bird', 'Body Press', 'U-turn', 'Roost']),
			],
			gameType: 'Singles', weather: '', terrain: '', crit: false,
		};
		for (const side of this.state.sides) {
			side.species = shown('species', side.species);
			side.moves = side.moves.map(move => shown('moves', move));
			side.ability = Dex.species.get(english('species', side.species)).abilities[0] || '';
		}
	}
	override componentDidMount() {
		super.componentDidMount();
		loadCalc().then(() => this.setState({ ready: true }), () => this.setState({
			error: TL`The damage calculator could not be loaded. Try again in a moment.`,
		}));
	}

	updateSide(index: number, change: (side: CalcSide) => void) {
		const sides = [...this.state.sides] as [CalcSide, CalcSide];
		const side = { ...sides[index], evs: { ...sides[index].evs }, ivs: { ...sides[index].ivs },
			boosts: { ...sides[index].boosts }, moves: [...sides[index].moves] };
		change(side);
		sides[index] = side;
		this.setState({ sides });
	}
	setField = (ev: Event) => {
		const input = ev.currentTarget as HTMLInputElement;
		const [index, field, key] = input.name.split('-');
		const value = input.type === 'checkbox' ? input.checked : input.value;
		this.updateSide(Number(index), side => {
			if (field === 'species') {
				side.species = value as string;
				const species = Dex.species.get(english('species', side.species));
				const abilities = Object.values(species.abilities || {});
				if (species.exists && !abilities.includes(side.ability)) side.ability = abilities[0] || '';
			} else if (field === 'evs' || field === 'ivs') {
				side[field][key as StatID] = value as string;
			} else if (field === 'boosts') {
				side.boosts[key as BoostID] = Number(value);
			} else if (field === 'moves') {
				side.moves[Number(key)] = value as string;
			} else {
				(side as any)[field] = value;
			}
		});
	};
	setGlobal = (ev: Event) => {
		const input = ev.currentTarget as HTMLInputElement;
		this.setState({ [input.name]: input.type === 'checkbox' ? input.checked : input.value } as any);
	};
	swap = () => {
		this.setState({ sides: [this.state.sides[1], this.state.sides[0]] });
	};
	loadSet = (ev: Event) => {
		const select = ev.currentTarget as HTMLSelectElement;
		const [index, teamKey, slot] = select.value.split('|');
		select.value = '';
		const team = PS.teams.byKey[teamKey];
		const set = team && Teams.unpack(team.packedTeam)[Number(slot)];
		if (!set) return;
		this.updateSide(Number(index), side => {
			Object.assign(side, emptySide(shown('species', set.species), set.moves.map(move => shown('moves', move))));
			while (side.moves.length < 4) side.moves.push('');
			side.level = String(set.level || 100);
			side.item = shown('items', set.item || '');
			side.ability = Dex.abilities.get(set.ability || '').name;
			side.nature = set.nature || 'Serious';
			side.teraType = set.teraType || '';
			for (const stat of STATS) {
				side.evs[stat] = String(set.evs?.[stat] ?? 0);
				side.ivs[stat] = String(set.ivs?.[stat] ?? 31);
			}
		});
	};

	makePokemon(gen: any, side: CalcSide) {
		const species = english('species', side.species);
		if (!species) return null;
		const stats = (table: { [k in StatID]: string }, fallback: number) => {
			const result: { [k in StatID]?: number } = {};
			for (const stat of STATS) {
				const value = parseInt(table[stat]);
				result[stat] = isNaN(value) ? fallback : value;
			}
			return result;
		};
		const pokemon = new calc.Pokemon(gen, species, {
			level: Math.max(1, Math.min(100, parseInt(side.level) || 100)),
			item: english('items', side.item) || undefined,
			ability: side.ability || undefined,
			nature: side.nature,
			evs: stats(side.evs, 0),
			ivs: stats(side.ivs, 31),
			boosts: side.boosts,
			teraType: side.teraType || undefined,
			status: side.status,
		});
		const hp = Math.max(0, Math.min(100, parseFloat(side.hp.replace(',', '.'))));
		if (!isNaN(hp) && hp < 100) pokemon.originalCurHP = Math.max(1, Math.floor(pokemon.maxHP() * hp / 100));
		return pokemon;
	}
	makeField(attacker: CalcSide, defender: CalcSide) {
		const side = (s: CalcSide, attacking: boolean) => ({
			isReflect: s.screens, isLightScreen: s.screens,
			isSR: !attacking && s.stealthRock, isHelpingHand: attacking && s.helpingHand,
		});
		return new calc.Field({
			gameType: this.state.gameType, weather: this.state.weather || undefined,
			terrain: this.state.terrain || undefined,
			attackerSide: side(attacker, true), defenderSide: side(defender, false),
		});
	}
	/** Dégâts de chaque capacité de `attacker` sur `defender`. */
	results(gen: any, attackerIndex: number) {
		const [attacker, defender] = attackerIndex === 0 ? this.state.sides : [this.state.sides[1], this.state.sides[0]];
		let a, d;
		try {
			a = this.makePokemon(gen, attacker);
			d = this.makePokemon(gen, defender);
		} catch {
			return null;
		}
		if (!a || !d) return null;
		const field = this.makeField(attacker, defender);
		return attacker.moves.map(typed => {
			const name = english('moves', typed);
			// les capacités de statut (Danse Lames…) ne font pas de dégâts
			if (!name || Dex.moves.get(name).category === 'Status') return null;
			try {
				const result = calc.calculate(gen, a, d, new calc.Move(gen, name, { isCrit: this.state.crit }), field);
				const [min, max] = result.range();
				const hp = d.maxHP();
				return {
					move: shown('moves', name), min, max, hp,
					percent: [min * 100 / hp, max * 100 / hp],
					ko: min || max ? koText(result.kochance().text) : '',
				};
			} catch {
				return null;
			}
		});
	}

	renderTeamOptions(index: number) {
		const groups = PS.teams.list.filter(team => team.packedTeam).map(team => {
			const sets = Teams.unpack(team.packedTeam);
			if (!sets.length) return null;
			return <optgroup label={team.name || TL`Untitled team`}>
				{sets.map((set, slot) => <option value={`${index}|${team.key}|${slot}`}>
					{shown('species', set.species)}{set.name && set.name !== set.species ? ` (${set.name})` : ''}
				</option>)}
			</optgroup>;
		}).filter(Boolean);
		if (!groups.length) return null;
		return <select class="button calc-load" onChange={this.loadSet} value="">
			<option value="">{TL`Load from a team...`}</option>
			{groups}
		</select>;
	}
	renderSide(index: number, gen: any) {
		const side = this.state.sides[index];
		const species = Dex.species.get(english('species', side.species));
		let pokemon = null;
		try {
			pokemon = gen && this.makePokemon(gen, side);
		} catch {}
		const abilities = species.exists ? Object.values(species.abilities) : [];
		if (side.ability && !abilities.includes(side.ability)) abilities.push(side.ability);
		const name = (field: string, key?: string | number) => `${index}-${field}${key !== undefined ? `-${key}` : ''}`;
		const sideClass = species.exists ? '' : ' calc-invalid';
		return <div class="calc-side">
			<h3>{index === 0 ? TL`Pokémon 1` : TL`Pokémon 2`} {this.renderTeamOptions(index)}</h3>
			<label class="calc-row">{TL`Pokémon`}<input
				class={`textbox${sideClass}`} list="calc-species" name={name('species')}
				value={side.species} onChange={this.setField}
			/></label>
			<div class="calc-row calc-inline">
				<label>{TL`Level`}<input
					class="textbox calc-num" type="number" min="1" max="100" name={name('level')}
					value={side.level} onChange={this.setField}
				/></label>
				<label>{TL`HP`} %<input
					class="textbox calc-num" type="number" min="1" max="100" name={name('hp')}
					value={side.hp} onChange={this.setField}
				/></label>
				{species.exists && <span class="calc-types">{species.types.map(type => typeName(type)).join(' / ')}</span>}
			</div>
			<label class="calc-row">{TL`Item`}<input
				class={`textbox${side.item && !english('items', side.item) ? ' calc-invalid' : ''}`} list="calc-items"
				name={name('item')} value={side.item} onChange={this.setField}
			/></label>
			<label class="calc-row">{TL`Ability`}<select
				class="button" name={name('ability')} value={side.ability} onChange={this.setField}
			>
				{abilities.map(ability => <option value={ability}>{shown('abilities', ability)}</option>)}
			</select></label>
			<label class="calc-row">{TL`Nature`}<select
				class="button" name={name('nature')} value={side.nature} onChange={this.setField}
			>
				{Object.keys(BattleNatures).map(nature => <option value={nature}>{natureName(nature)}</option>)}
			</select></label>
			<div class="calc-row calc-inline">
				<label>{TL`Tera Type`}<select
					class="button" name={name('teraType')} value={side.teraType} onChange={this.setField}
				>
					<option value="">{TL`(none)`}</option>
					{TYPES.map(type => <option value={type}>{typeName(type)}</option>)}
				</select></label>
				<label>{TL`Status`}<select
					class="button" name={name('status')} value={side.status} onChange={this.setField}
				>
					<option value="">{TL`Healthy`}</option>
					<option value="brn">{TL`Burned`}</option>
					<option value="par">{TL`Paralyzed`}</option>
					<option value="psn">{TL`Poisoned`}</option>
					<option value="tox">{TL`Badly poisoned`}</option>
					<option value="slp">{TL`Asleep`}</option>
					<option value="frz">{TL`Frozen`}</option>
				</select></label>
			</div>
			<table class="calc-stats">
				<tr>
					<th></th><th>{TL`Base`}</th><th>{TL`EVs`}</th><th>{TL`IVs`}</th><th>{TL`Boost`}</th><th>{TL`Stat`}</th>
				</tr>
				{STATS.map(stat => <tr>
					<th>{TL.statShort[stat] || stat}</th>
					<td>{species.exists ? species.baseStats[stat] : ''}</td>
					<td><input
						class="textbox calc-num" type="number" min="0" max="252" step="4" name={name('evs', stat)}
						value={side.evs[stat]} onChange={this.setField}
					/></td>
					<td><input
						class="textbox calc-num" type="number" min="0" max="31" name={name('ivs', stat)}
						value={side.ivs[stat]} onChange={this.setField}
					/></td>
					<td>{stat !== 'hp' && <select
						class="button" name={name('boosts', stat)} value={String(side.boosts[stat])} onChange={this.setField}
					>
						{[6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6].map(boost => <option value={String(boost)}>
							{boost > 0 ? `+${boost}` : boost}
						</option>)}
					</select>}</td>
					<td><strong>{pokemon ? pokemon.rawStats[stat] : ''}</strong></td>
				</tr>)}
			</table>
			{side.moves.map((move, i) => <label class="calc-row">{TL`Move`} {i + 1}<input
				class={`textbox${move && !english('moves', move) ? ' calc-invalid' : ''}`} list="calc-moves"
				name={name('moves', i)} value={move} onChange={this.setField}
			/></label>)}
			<div class="calc-row">
				<label class="checkbox inline"><input
					type="checkbox" name={name('screens')} checked={side.screens} onChange={this.setField}
				/> {TL`Reflect / Light Screen`}</label> {}
				<label class="checkbox inline"><input
					type="checkbox" name={name('stealthRock')} checked={side.stealthRock} onChange={this.setField}
				/> {TL`Stealth Rock`}</label> {}
				<label class="checkbox inline"><input
					type="checkbox" name={name('helpingHand')} checked={side.helpingHand} onChange={this.setField}
				/> {TL`Helping Hand`}</label>
			</div>
		</div>;
	}
	renderResults(index: number, gen: any) {
		const [attacker, defender] = index === 0 ? this.state.sides : [this.state.sides[1], this.state.sides[0]];
		const results = this.results(gen, index);
		const attackerName = shown('species', english('species', attacker.species)) || '?';
		const defenderName = shown('species', english('species', defender.species)) || '?';
		return <div class="calc-results">
			<h3>{TL`${attackerName} attacks ${defenderName}`}</h3>
			{!results ? <p class="calc-hint">{TL`Choose two Pokémon to see the damage.`}</p> : <ul>
				{results.map(result => result && <li title={`${result.min} - ${result.max} / ${result.hp} PV`}>
					<strong>{result.move}</strong> : {
						result.max ? `${formatNumber(result.percent[0])} – ${formatNumber(result.percent[1])} %` : TL`no damage`
					}
					{result.ko && <small> ({result.ko})</small>}
				</li>)}
			</ul>}
		</div>;
	}
	override render() {
		const { room } = this.props;
		const { ready, error } = this.state;
		const gen = ready ? calc.Generations.get(9) : null;
		return <PSPanelWrapper room={room}><div class="pad calc-panel">
			<h2>{TL`Damage calculator`}</h2>
			{error && <p class="error">{error}</p>}
			{!ready && !error && <p>{TL`Loading...`}</p>}
			{ready && <>
				{this.renderResults(0, gen)}
				{this.renderResults(1, gen)}
			</>}
			<div class="calc-row calc-inline calc-field">
				<label>{TL`Battle`}<select class="button" name="gameType" value={this.state.gameType} onChange={this.setGlobal}>
					<option value="Singles">{TL`Singles`}</option>
					<option value="Doubles">{TL`Doubles`}</option>
				</select></label>
				<label>{TL`Weather`}<select class="button" name="weather" value={this.state.weather} onChange={this.setGlobal}>
					<option value="">{TL`(none)`}</option>
					<option value="Sun">{TL`Sun`}</option>
					<option value="Rain">{TL`Rain`}</option>
					<option value="Sand">{TL`Sandstorm`}</option>
					<option value="Snow">{TL`Snow`}</option>
				</select></label>
				<label>{TL`Terrain`}<select class="button" name="terrain" value={this.state.terrain} onChange={this.setGlobal}>
					<option value="">{TL`(none)`}</option>
					<option value="Electric">{TL`Electric Terrain`}</option>
					<option value="Grassy">{TL`Grassy Terrain`}</option>
					<option value="Psychic">{TL`Psychic Terrain`}</option>
					<option value="Misty">{TL`Misty Terrain`}</option>
				</select></label>
				<label class="checkbox inline"><input
					type="checkbox" name="crit" checked={this.state.crit} onChange={this.setGlobal}
				/> {TL`Critical hit`}</label>
				<button class="button" onClick={this.swap}><i class="fa fa-exchange" aria-hidden></i> {TL`Swap`}</button>
			</div>
			<div class="calc-sides">
				{this.renderSide(0, gen)}
				{this.renderSide(1, gen)}
			</div>
			{renderDatalists()}
			<p class="calc-hint"><small>{TL`Calculations by the Smogon damage calculator.`}</small></p>
		</div></PSPanelWrapper>;
	}
}

PS.addRoomType(CalcPanel);
