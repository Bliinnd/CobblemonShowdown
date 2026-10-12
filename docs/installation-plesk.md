# Installer CobblemonShowdown sur un serveur OVH avec Plesk

Ce guide part d'un serveur où Plesk est déjà installé, avec un domaine (ou un
sous-domaine) prêt à accueillir le site. Comptez une demi-heure, dont une bonne
partie d'attente pendant la construction.

## Ce qu'il faut avant de commencer

- L'extension **Node.js** de Plesk, avec **Node.js 24** (version 24.12 ou plus
  récente). Le serveur de comptes ne démarre pas avec une version plus ancienne.
- L'extension **Git** de Plesk (installée par défaut sur la plupart des serveurs).
- Un certificat **HTTPS** sur le domaine (Let's Encrypt, gratuit, depuis
  « SSL/TLS Certificates »). Le site ne fonctionne qu'en HTTPS.

## 1. Créer la base de données

Dans Plesk : **Websites & Domains → votre domaine → Databases → Add Database**.

- Type : MySQL ou MariaDB
- Nom de la base, nom d'utilisateur et mot de passe : choisissez-les et notez-les.

Le site crée lui-même ses tables au premier démarrage.

## 2. Récupérer le code

**Websites & Domains → votre domaine → Git → Add Repository** :

- Remote Git repository : `https://github.com/Bliinnd/CobblemonShowdown.git`
- Branche : `main`
- Deployment path : un dossier vide, par exemple `/cobblemonshowdown`
- Deployment mode : manuel (les mises à jour se font quand vous le décidez)

## 3. Configurer l'application Node.js

**Websites & Domains → votre domaine → Node.js** :

| Réglage | Valeur |
| --- | --- |
| Node.js Version | la plus récente des 24.x |
| Document Root | `/cobblemonshowdown/public` (dossier vide fourni avec le code) |
| Application Mode | `production` |
| Application Root | `/cobblemonshowdown` |
| Application Startup File | `app.js` |

Puis, dans **Custom environment variables**, ajoutez :

| Variable | Valeur |
| --- | --- |
| `SITE_HOST` | votre domaine, sans `https://` (ex. `cobblemonshowdown.fr`) |
| `DB_HOST` | `localhost` |
| `DB_NAME` | le nom de la base créée à l'étape 1 |
| `DB_USER` | l'utilisateur de la base |
| `DB_PASSWORD` | son mot de passe |
| `ADMINS` | votre pseudo sur le site (facultatif) |

Si les ports 8000 ou 9000 sont déjà utilisés sur le serveur, ajoutez aussi
`SIM_PORT` et `LOGIN_PORT` avec deux ports libres.

## 4. Construire le site

Toujours sur la page Node.js, cliquez sur **Run script**, écrivez `build` et
validez. La construction télécharge les dépendances puis prépare les données
Cobblemon : comptez plusieurs minutes.

Si Plesk coupe le script avant la fin, lancez-le en SSH à la place :

```
cd ~/cobblemonshowdown   # le dossier de l'étape 2
npm run build
```

## 5. Démarrer

Cliquez sur **Enable Node.js** (ou **Restart App** s'il est déjà activé), puis
ouvrez votre domaine. Le premier chargement prend une dizaine de secondes, le
temps que le serveur de combat et le serveur de comptes démarrent.

Pour que le site reste démarré même sans visiteur, ajoutez dans
**Apache & nginx Settings → Additional nginx directives** :

```
passenger_min_instances 1;
```

## Mettre à jour le site

1. **Git → Pull Updates** (puis **Deploy** si le déploiement est manuel).
2. **Node.js → Run script → `build`**.
3. **Node.js → Restart App**.

## En cas de problème

- Les journaux du site sont dans le dossier `data/logs/` de l'application
  (`server.log` pour le serveur de combat, `loginserver.log` pour les comptes),
  consultables dans le **File Manager** de Plesk.
- Page d'erreur au démarrage qui parle de `npm run build` : l'étape 4 n'est pas
  allée jusqu'au bout. Relancez-la.
- Impossible de se connecter à un compte : vérifiez que `SITE_HOST` correspond
  exactement au domaine affiché dans le navigateur, et que le HTTPS est actif.
- Le dossier `data/` contient les clés de connexion du site : ne le supprimez pas
  et ne le partagez pas. Les comptes et les équipes sont dans la base de données.
