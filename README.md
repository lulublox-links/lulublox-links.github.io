# Site de liens — Lulublox

Mini-site personnel inspiré de l’overlay Twitch bleu pastel de Lulublox.

## Contenu

- Twitch
- YouTube
- TikTok
- Discord avec bouton de copie
- Instagram principal
- Instagram photographie
- NoctilAI
- Communauté Roblox Histeria Studio

Le site est responsive, sans framework et sans dépendance externe.

## Mise en ligne avec GitHub Pages

1. Crée un nouveau dépôt GitHub.
2. Envoie tout le contenu de ce dossier à la racine du dépôt.
3. Ouvre **Settings → Pages**.
4. Dans **Build and deployment**, choisis **Deploy from a branch**.
5. Sélectionne la branche `main` et le dossier `/root`.
6. Enregistre et attends quelques minutes.

Pour obtenir une adresse comme `lulublox.github.io`, le dépôt doit s’appeler exactement `lulublox.github.io` et le compte GitHub doit aussi s’appeler `lulublox`.

## Modifier les couleurs

Les couleurs principales sont au début du fichier `style.css`, dans la section `:root`.

## Modifier les liens ou les textes

Ouvre `index.html` et remplace simplement les URL ou les pseudos présents dans les cartes.

## Ajouter une vraie photo de profil

Dans `index.html`, remplace le contenu de :

```html
<div class="avatar">...</div>
```

par :

```html
<div class="avatar">
  <img src="assets/avatar.jpg" alt="Photo de profil de Lulublox">
</div>
```

Puis ajoute ceci dans `style.css` :

```css
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 17px;
}
```
