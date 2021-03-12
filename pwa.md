# Les Progessive Web App

---

### Kezako?

----

C'est un site Internet ayant intégré des fonctionnalités jusqu’alors réservées aux applications mobiles

----

Le terme a été créé par Frances Berriman et Alex Russell (ingénieur chez Google) pour désigner des pages web pouvant être utilisées comme des applications natives, ou presque

----

C'est des applications légères et rapides mais n'ayant pas les mêmes accès au device qu'une application native

C'est un bon compromis pour se concentrer sur l'essentiel

----

Tous l'aspect synchronisation et connectivité est géré par des services workers qui travaillent en arrière-plan et qui chargent les données quand le reseau le permet et la stocke en mémoire pour la restituer

----

L'avantage principal des PWA, c'est aussi l'accès à des fonctionnalités jusqu'à lors réservées aux apps natives

----

Ces fonctionnalités dépendent bien-sur des différents OS de smartphone

----

Pour IOS:

- Geolocation
- Sensors (Magnetometer, Accelerometer, Gyroscope)
- Camera
- Audio Output
- Speech Synthesis (with headsets only)
- Apple Pay
- WebAssembly, WebRTC, WebGL, etc

----

Pour Android:

- Speech Recognition
- Audio Output
- Geolocation
- Sensor Support
- Geolocation
- Payment System
- Bluetooth/BLE
- Camera
- Google Play Store

----

Pour les utiliser, rien de bien compliquer, il s'agit de fonctionnalités du navigateur, donc en jouant avec les différents évenements on peut connaitre ces différentes infos.

----

Pas besoin non plus de toutes les décrires ici, une petite recherche et vous trouverez comment faire appel à chacune.

----

Sur notre précédente appli pokemon, juste une manipulation pour la transformer en PWA de base 😃

----

Dans le dossier `public`, éditer le fichier `manifest.json` en changeant le `name` et `short_name` (possibilité de modifier les icones aussi)

Puis dans l'`index.js`,

```js
serviceWorker.unregister(); //old

serviceWorker.register(); //new
```

----

Builder votre app et livré là sur `surge`

Via votre smartphone aller sur votre app et attendez de voir apparaître un bandeau proposant de l'ajouter à l'accueil 😉 🎉

----

> Simple, non?

---

React nous a tout préparés à l'avance mais le grand principe c'est la présence du `manifest.json`

Les navigateurs le reconnaissent et savent qu'il s'agit alors d'une PWA

----

Attention par contre au découpage du code et au lazy loading pour que l'app reste performante

---

You turn !

----

Créer une application react PWA qui affiche une carte et sur laquelle on peut ajouter des points géographiques

🏁 💥

----

> Utiliser `react-leaflet` pour gérer la carte et les markers

----

La carte doit être centrée sur la position de votre smartphone via la geolocalisation de celui-ci

----

Lors de chaque dépot de markers, faites vibrer le mobile si cela est possible.

----

Sur un autre page, afficher la liste des markers avec la possibilité de les supprimer un à un.

----

Sur une dernière page, gérer les informations de l'utilisateur avec la saisie de certaines données.

Ces données doivent s'afficher si elles ont été saisies, sur le haut de toutes les autres pages.

----

Enfin, pour les plus avancés d'entre vous, changer le design du marker pour mettre les sprites d'un pokemon aléatoire. Ce sprite doit pouvoir être éditer sur la page affichant la liste des markers.

---

Le but de ce travail est de vous laisser en autonomie sur la decouverte d'un nouveau module (react-leaflet), pour le reste vous avez toutes les cartes en mains 😉
