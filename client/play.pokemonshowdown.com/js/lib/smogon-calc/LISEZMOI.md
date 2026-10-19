# Calculateur de dégâts de Smogon

`calc-data.min.js` et `calc.min.js` sont les fichiers `dist/data/production.min.js` et
`dist/production.min.js` du paquet npm [`@smogon/calc`](https://github.com/smogon/damage-calc)
version 0.12.0, sous licence MIT (texte complet : https://github.com/smogon/damage-calc/blob/master/LICENSE).
Le calculateur du site (`src/panel-calc.tsx`) les charge à la première ouverture.

Pour mettre à jour :

```sh
npm pack @smogon/calc@<version> && tar xzf smogon-calc-<version>.tgz
cp package/dist/data/production.min.js calc-data.min.js
cp package/dist/production.min.js calc.min.js
```
