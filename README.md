# Site de rendez-vous — Sophie Boiral

Ce dossier contient le site complet, prêt à être publié gratuitement avec GitHub Pages.

## Contenu

- `index.html` : la structure et les textes du site
- `style.css` : toute la mise en page et l’identité visuelle
- `script.js` : le choix du rendez-vous et la préparation de l’email
- les fichiers `.JPG`, `.jpg`, `.png` et `.svg` : la signature, les photographies et le favicon

Toutes les œuvres et photographies sont utilisées sans modification de leur contenu. Tous les fichiers sont volontairement placés au même niveau pour faciliter leur import dans GitHub.

## Publication avec GitHub Pages — méthode simple

1. Connectez-vous à votre compte GitHub Maxime Boiral sur [GitHub](https://github.com/).
2. Cliquez sur le bouton **+** en haut à droite, puis sur **New repository**.
3. Nommez le dépôt exactement `sophie-boiral-rendez-vous`.
4. Choisissez **Public**, ne cochez aucune option supplémentaire, puis cliquez sur **Create repository**.
5. Sur la page du dépôt, cliquez sur **uploading an existing file**.
6. Décompressez d’abord le fichier ZIP sur votre ordinateur.
7. Ouvrez le dossier décompressé, sélectionnez **tous les fichiers** avec `Ctrl + A`, puis glissez-les dans la zone GitHub. Cette version ne contient aucun sous-dossier.
8. En bas de la page, cliquez sur **Commit changes**.
9. Dans le dépôt, ouvrez **Settings**, puis **Pages** dans le menu de gauche.
10. Dans **Build and deployment**, choisissez **Deploy from a branch**.
11. Sélectionnez la branche **main**, le dossier **/(root)**, puis cliquez sur **Save**.
12. Après une à trois minutes, actualisez la page. GitHub affiche l’adresse publique du site.

L’adresse aura cette forme :

`https://VOTRE-NOM-GITHUB.github.io/sophie-boiral-rendez-vous/`

Elle ne contiendra pas `.ximmae-boiral.chatgpt.site`.

## Modifier le site plus tard

Pour remplacer un texte : ouvrez `index.html` dans GitHub, cliquez sur l’icône crayon, modifiez le texte, puis cliquez sur **Commit changes**.

Pour changer l’adresse email qui reçoit les demandes : ouvrez `script.js` et modifiez la première ligne :

```js
const RECIPIENT_EMAIL = "sophie.boiral.art@gmail.com";
```

Pour remplacer une image sans toucher au code : gardez exactement le même nom de fichier, puis téléversez la nouvelle image à la place de l’ancienne.

## Tester le site avant publication

Double-cliquez sur `index.html`. Le site s’ouvre dans votre navigateur. Le formulaire n’enregistre aucune donnée : il ouvre la messagerie du visiteur avec une demande préremplie.

## Adresse personnalisée plus tard

Si vous achetez ensuite `sophieboiral.fr`, GitHub Pages permet de relier gratuitement le site à une adresse comme `rdv.sophieboiral.fr`. L’achat et le renouvellement du nom de domaine restent payants chez le fournisseur du domaine.
