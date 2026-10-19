-- CobblemonShowdown : fond d'écran personnel de chaque compte (voir src/cobblemon-backgrounds.ts).
CREATE TABLE IF NOT EXISTS `ntbb_cobblemon_backgrounds` (
  `userid` varbinary(255) NOT NULL,
  `image` mediumtext NOT NULL,
  `updated` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
