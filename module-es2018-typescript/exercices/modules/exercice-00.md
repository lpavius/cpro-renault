# Exercice 00 : Un programme non modulaire

---

Le fichier [exercice-00.html](./exercice-00.html) entraîne le chargement de 4 fichiers du dossier [exercice-00](./exercice-00) dans cet ordre :
  - [gui.js](exercice-00/gui.js) qui créé la "classe" `GuiBuilder`.
  - [cart.js](exercice-00/cart.js)  qui créé la "classe" `CartManager`.
  - [products.js](exercice-00/products.js) qui créé la "classe" `ProductRepository`
  - [app.js](exercice-00/app.js) qui initialise l'application (point d'entrée/entry point).

L'application est un mini-programme qui affiche une liste de produits avec 2 actions (+/-) pour ajouter ou retirer des produits à un "panier" de produits.

- Testez ce programme;
- Prenez connaissance de son code.

Cette application créé __plusieurs objets__ dans l'__espace global__. Or, il est __nécessaire__ de __minimiser au maximum__ l'impact de nos programmes sur l'espace global pour éviter les collisions/écrasements entre les variables de divers programmes.

La solution à ce problème réside dans la création de modules (dans l'esprit des modules de Node JS). L'espace mémoire des modules est isolé les uns des autres et nous permet ainsi minimiser notre impact sur l'espace global.

Tous les exercices qui suivent vont s'appuyer sur cet exemple de code et vous proposent de travailler sur l'utilisation des modules.

---

VirtuoWorks® - tous droits réservés©