# CobblemonShowdown

Un site inspiré de [Pokémon Showdown](https://pokemonshowdown.com), centré sur le mod Minecraft
[Cobblemon](https://cobblemon.com) (version officielle 1.8.2, sans add-on).

Le code d'origine de Showdown est décrit dans [UPSTREAM.md](UPSTREAM.md).

## Licence

AGPL-3.0 (voir [LICENSE](LICENSE)). Le dossier `server/` reste sous licence MIT, comme le projet d'origine.

## Ce que contient le dépôt

| Dossier | Rôle |
| --- | --- |
| `client/` | l'interface du site (teambuilder, menus), reprise de Showdown et traduite en français |
| `server/` | le serveur de combat de Showdown, avec le mod `cobblemon` et les formats Cobblemon |
| `loginserver/` | le serveur de comptes (pseudo + mot de passe) et la sauvegarde des équipes |
| `app.js`, `app/` | le lanceur : démarre les trois parties derrière une seule adresse |
| `tools/cobblemon-data/` | l'extraction des données officielles de Cobblemon 1.8.2 |
| `docs/` | les guides |

## Formats

Cobblemon OU, Monotype, LC et National Dex, avec les règles décrites dans
`server/config/formats.ts`. Les egg moves sont interdits par défaut ; chaque
format existe aussi en version « + Egg Moves » qui les autorise. Le bouton
« Vérifier » du teambuilder contrôle l'équipe selon le format choisi.

## Installer le site

Voir [docs/installation-plesk.md](docs/installation-plesk.md).

## Développer en local

Avec Node.js 24.12 ou plus récent et une base MySQL/MariaDB :

```
cp .env.example .env    # puis remplir la base de données
npm run build
npm start               # le site écoute sur le port 8080
```

Le client exige le HTTPS sur le même domaine que le site : en local, mettez
`DEV_HTTPS=1`, `PORT=443` et un nom de domaine qui pointe vers votre machine.

Pour régénérer les données Cobblemon (nouvelle version du mod) : `npm run data`,
puis `npm run build`.
