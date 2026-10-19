# Fonds d'écran Cobblemon

Chaque image de ce dossier (`.jpg`, `.png` ou `.webp`) devient un fond d'écran du site.
À chaque visite, un fond est tiré au hasard parmi elles. Chaque joueur peut aussi en
choisir un précis dans le menu Fond d'écran (bouton ⚙ en haut à droite).

- Pas besoin de redémarrer le site : une image ajoutée ici apparaît à la visite suivante.
- Conseillé : images en paysage, au moins 1920 × 1080, moins de 1 Mo (JPEG qualité 85).
- Tant que le dossier ne contient aucune image, le site garde les fonds de Pokémon Showdown.

## Crédits (facultatif)

Pour afficher « "Titre" fond d'écran par Auteur » en bas de l'accueil, ajoutez un fichier
`credits.json` :

```json
{
	"village.jpg": { "title": "Village au coucher du soleil", "artist": "Anthony", "link": "https://exemple.fr" }
}
```

`link` est facultatif.
