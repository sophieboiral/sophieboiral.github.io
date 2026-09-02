# Site de rendez-vous — Sophie Boiral

Ce dossier contient le site complet, prêt à être publié gratuitement avec GitHub Pages.

## Contenu

- `index.html` : la structure et les textes du site
- `style.css` : toute la mise en page et l’identité visuelle
- `script.js` : le choix du rendez-vous et la préparation de l’email
- `assets/` : la signature, les photographies et le favicon
- `.nojekyll` : permet à GitHub Pages de publier les fichiers tels quels

Les œuvres et photographies présentes dans `assets/` sont utilisées sans modification de leur contenu.

## Publication avec GitHub Pages — méthode simple

1. Connectez-vous à [GitHub](https://github.com/). Si Sophie n’a pas encore de compte, créez de préférence un compte avec un nom comme `sophieboiral` ou `sophie-boiral-art` : ce nom apparaîtra dans l’adresse du site.
2. Cliquez sur le bouton **+** en haut à droite, puis sur **New repository**.
3. Pour obtenir l’adresse la plus courte, nommez le dépôt exactement `VOTRE-NOM-GITHUB.github.io`. Exemple : si le compte s’appelle `sophieboiral`, le dépôt doit s’appeler `sophieboiral.github.io`.
4. Choisissez **Public**, ne cochez aucune option supplémentaire, puis cliquez sur **Create repository**.
5. Sur la page du dépôt, cliquez sur **uploading an existing file**.
6. Décompressez d’abord le fichier ZIP sur votre ordinateur.
7. Ouvrez le dossier décompressé et glissez **tout son contenu** dans la zone GitHub : `index.html`, `style.css`, `script.js`, `.nojekyll`, `README.md` et le dossier `assets`.
8. En bas de la page, cliquez sur **Commit changes**.
9. Dans le dépôt, ouvrez **Settings**, puis **Pages** dans le menu de gauche.
10. Dans **Build and deployment**, choisissez **Deploy from a branch**.
11. Sélectionnez la branche **main**, le dossier **/(root)**, puis cliquez sur **Save**.
12. Après une à trois minutes, actualisez la page. GitHub affiche l’adresse publique du site.

Avec le dépôt spécial conseillé ci-dessus, l’adresse aura cette forme :

`https://VOTRE-NOM-GITHUB.github.io/`

Par exemple : `https://sophieboiral.github.io/`

Si vous préférez appeler le dépôt `sophie-boiral-rendez-vous`, l’adresse fonctionnera aussi, mais sera un peu plus longue :

`https://VOTRE-NOM-GITHUB.github.io/sophie-boiral-rendez-vous/`

Elle ne contiendra pas `.ximmae-boiral.chatgpt.site`.

## Modifier le site plus tard

Pour remplacer un texte : ouvrez `index.html` dans GitHub, cliquez sur l’icône crayon, modifiez le texte, puis cliquez sur **Commit changes**.

Pour changer l’adresse email qui reçoit les demandes : ouvrez `script.js` et modifiez la première ligne :

```js
const RECIPIENT_EMAIL = "sophie.boiral.art@gmail.com";
```

Pour remplacer une image sans toucher au code : gardez exactement le même nom de fichier dans le dossier `assets`, puis téléversez la nouvelle image à la place de l’ancienne.

## Tester le site avant publication

Double-cliquez sur `index.html`. Le site s’ouvre dans votre navigateur. Le formulaire n’enregistre aucune donnée : il ouvre la messagerie du visiteur avec une demande préremplie.

## Adresse personnalisée plus tard

Si vous achetez ensuite `sophieboiral.fr`, GitHub Pages permet de relier gratuitement le site à une adresse comme `rdv.sophieboiral.fr`. L’achat et le renouvellement du nom de domaine restent payants chez le fournisseur du domaine.
