# WIK-DPS-TP01
WIK-DPS-TP01 est le premier TP devops à rendre. J'ai choisi d'utiliser le typescript car je pensais que je serai plus à l'aise avec plutôt qu'avec Rust. Voici comment lancer le projet.

## Lancement du projet

Allez dans votre terminal, déplacez-vous dans le répertoire de votre choix et saisissez:

```bash
git clone https://github.com/Promethiyas/WIK-DPS-TP01.git
```

Une fois fait vous pouvez vous déplacer dans le dossier ***\\WIK-DPS-TP01\src\\***:

```bash
cd .\WIK-DPS-TP01\src\
```

Puis compilez le code avec:

```bah
npx tsc index.ts
```

Et lancez le localhost:

```bash
node index.js
```

## Accéder au localhost

Dans votre navigateur rendez-vous ici : http://localhost:3000/ping
Vous verrez le résultat de la requête ***GET*** sur la page ping. En remplaçant le ping par n'importe quoi d'autre vous verrez apparaître ***Error 404***.


## Problèmes

Le fonctionnement des requêtes, notamment leurs constructions restent quelque chose où j'ai du mal à comprendre, c'est pour ça que j'ai laissez en commentaire mes tentatives qui avaient l'air de pouvoir fonctionner.
J'aurais peut-être dû le faire en Rust.
