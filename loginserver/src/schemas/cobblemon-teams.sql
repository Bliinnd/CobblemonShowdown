-- CobblemonShowdown : équipes sauvegardées sur le compte (voir src/cobblemon-teams.ts).
CREATE TABLE IF NOT EXISTS `ntbb_cobblemon_teams` (
  `userid` varbinary(255) NOT NULL,
  `teams` mediumtext NOT NULL,
  `updated` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
