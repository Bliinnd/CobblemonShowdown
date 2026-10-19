-- CobblemonShowdown : replays dans la base MySQL du site (tables sans préfixe, voir src/replays.ts).
-- Équivalent MySQL de replays.sql (Postgres/CockroachDB), utilisé par Pokémon Showdown.
CREATE TABLE IF NOT EXISTS `replays` (
  `id` varchar(255) NOT NULL,
  `format` varchar(45) NOT NULL,
  `players` varchar(255) NOT NULL,
  `log` mediumtext NOT NULL,
  `inputlog` mediumtext NULL,
  `uploadtime` bigint(20) NOT NULL,
  `views` bigint(20) NOT NULL DEFAULT 0,
  `formatid` varchar(45) NOT NULL,
  `rating` bigint(20) NULL,
  `private` tinyint(4) NOT NULL DEFAULT 0,
  `password` varchar(31) NULL,
  PRIMARY KEY (`id`),
  KEY `private_uploadtime` (`private`, `uploadtime`),
  KEY `private_formatid_uploadtime` (`private`, `formatid`, `uploadtime`),
  KEY `private_formatid_rating` (`private`, `formatid`, `rating`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `replayplayers` (
  `playerid` varchar(45) NOT NULL,
  `formatid` varchar(45) NOT NULL,
  `id` varchar(255) NOT NULL,
  `rating` bigint(20) NULL,
  `uploadtime` bigint(20) NOT NULL,
  `private` tinyint(4) NOT NULL,
  `password` varchar(31) NULL,
  `format` varchar(255) NOT NULL,
  `players` varchar(255) NOT NULL,
  PRIMARY KEY (`id`, `playerid`),
  KEY `playerid_uploadtime` (`playerid`, `uploadtime`),
  KEY `playerid_rating` (`playerid`, `rating`),
  KEY `formatid_playerid_uploadtime` (`formatid`, `playerid`, `uploadtime`),
  KEY `formatid_playerid_rating` (`formatid`, `playerid`, `rating`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
