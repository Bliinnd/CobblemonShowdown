# Showdex

Le calculateur de dégâts du site est [Showdex](https://github.com/doshidak/showdex)
(version 1.4.2), de Keith Choison et analogcam, construit en mode « standalone »,
c'est-à-dire intégré au site au lieu d'être une extension du navigateur.

- En combat, l'onglet **Calcdex** s'ouvre tout seul et calcule les dégâts des deux côtés.
- Hors combat, l'onglet **Hellodex** (bouton « Calculateur de dégâts » du menu et du
  teambuilder) permet d'ouvrir un **Honkdex**, un calculateur libre.

## Ce qui est modifié

`cobblemonshowdown.patch`, appliqué au code de Showdex avant de le construire :

- l'interface est en français par défaut ;
- les liens vers les profils et le classement pointent vers ce site et non vers
  pokemonshowdown.com ;
- l'identifiant des calculs sauvegardés est fixe, pour qu'ils restent d'une version à l'autre.

## Reconstruire

```
tools/showdex/construire.sh
```

Le résultat va dans `client/play.pokemonshowdown.com/showdex/` (servi à l'adresse `/showdex/`,
chargé par `index-new.html`).

## Licence

Showdex est sous licence GNU AGPL 3.0 (`client/play.pokemonshowdown.com/showdex/LICENSE`).
Comme le site le sert à ses joueurs, son code source (le dépôt de Showdex plus le patch
ci-dessus) doit rester disponible : c'est le cas grâce au lien « Code source » en bas de
l'accueil, qui mène à ce dépôt public.
