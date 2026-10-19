-- CobblemonShowdown : équipes partagées par lien, façon pokepast.es (voir src/cobblemon-pastes.ts).
CREATE TABLE IF NOT EXISTS `ntbb_cobblemon_pastes` (
  `id` varbinary(16) NOT NULL,
  `ownerid` varbinary(255) NOT NULL DEFAULT '',
  `title` varchar(100) NOT NULL DEFAULT '',
  `format` varchar(100) NOT NULL DEFAULT '',
  `team` mediumtext NOT NULL,
  `data` mediumtext NOT NULL,
  `created` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
