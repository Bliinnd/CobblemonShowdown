# Enchères (salon Enchère)

Le salon **Enchère** sert à composer les équipes des teamtours aux enchères. Tout le monde peut
le suivre, mais seuls les **Capitaines** (rang ♛) et le staff peuvent y parler. Tout est
enregistré : un redémarrage du site ne perd ni les équipes, ni les joueurs, ni l'argent
(seule une vente en cours est annulée). `/enchere` affiche toutes les commandes.

## Préparer (admin)

1. Nommer les capitaines : `/enchere capitaine Pseudo, Nom de l'équipe` (donne le rang ♛).
   `/enchere equipe Pseudo, Nouveau nom` renomme une équipe ; `/enchere retirercapitaine Pseudo` retire un capitaine.
2. Remplir la liste : `/enchere ajouter Joueur1, Joueur2, Joueur3…`.
   `/enchere retirer Joueur`, `/enchere note Joueur, OU et Ubers`, `/enchere vider`.
3. Régler l'argent :
   - `/enchere budget 100k` : argent de départ de chaque capitaine ;
   - `/enchere misedepart 3000` : mise de départ d'un joueur proposé ;
   - `/enchere palier 500` : écart minimum entre deux mises ;
   - `/enchere chrono 15` : secondes sans nouvelle mise avant la vente ;
   - `/enchere tailleequipe 8` : joueurs maximum par équipe (0 : illimité). Avec une limite,
     un capitaine doit garder de quoi compléter son équipe à la mise de départ.
4. Ordre de passage : `/enchere ordre Capitaine1, Capitaine2…` ou `/enchere melanger`.
5. `/enchere demarrer`.

## Pendant les enchères

- Le capitaine dont c'est le tour tape `/proposer Joueur` : il en est le premier enchérisseur, à la mise de départ.
- Les autres surenchérissent avec `/mise` (+palier), `/mise 12000`, ou en tapant juste le montant (`12k`).
- Chaque mise relance le chrono. À la fin, le joueur rejoint l'équipe et le tableau
  (équipe, capitaine, joueurs, argent restant) s'affiche.
- `/enchere tableau`, `/enchere joueurs`, `/enchere reglages` : état des enchères.

## Corriger (admin)

- `/enchere argent Capitaine, +5000` ou `-5000` : ajoute ou retire de l'argent.
- `/enchere attribuer Joueur, Capitaine, prix` / `/enchere liberer Joueur` : place ou retire un joueur (remboursé).
- `/enchere annuler` : annule la vente en cours ; `/enchere passer` : passe le tour du capitaine.
- `/enchere arreter` puis `/enchere demarrer` : pause et reprise.
- `/enchere reinitialiser` : recommence (joueurs remis en vente, budgets rétablis) ou efface tout.
