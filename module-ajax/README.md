# Formation : Module AJAX

__Février 2020, Mars 2020__

---

## [Cours](./cours)

* [Exemples de Promesses](./cours/20200227_cours_promesses.js)
* [Exemples de Promesses et Async/Await](./cours/20200228_cours_promesses.js)

---

## [Exercices avec XmlHttpRequest et Fetch](./exercices/natif/exercices)

Exemples :

* [Clients XHR et Fetch](./exercices/natif/exemples/clients)
* [Serveur basé sur Node](./exercices/natif/exemples/serveur-natif)
  * *Sans base de données*.
* [Serveur basé sur Express/PgSQL](./exercices/natif/exemples/serveur-express)
  * *Vous avez besoin d'une base de données pour le faire fonctionner*.

Objectif : Comprendre la méthode AJAX

- [Exercice 1 (XHR): GET et POST](./exercices/natif/exercices/exercice-1.md)
  * Nécessite l'API JavaScript [XmlHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
  * Nécessite une API REST avec opérations CRUD sur une entité Adresses. On s'intéresse ici particulièrement aux opérations Create et Read.
- [Exercice 2 (Fetch): GET et POST](./exercices/natif/exercices/exercice-2.md)
    * Reprend l'énoncé de l'Exercice 1.
    * Nécessite l'API JavaScript [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur une entité Adresses. On s'intéresse ici particulièrement aux opérations Create et Read
- (__NEW__ !) [Exercice 3 (XHR): Listes dépendantes](./exercices/natif/exercices/exercice-3.md)
    * Nécessite l'API JavaScript [XmlHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, Régions et Villes. On s'intéresse ici particulièrement aux opérations Read.
- (__NEW__ !) [Exercice 4 (Fetch): Listes dépendantes](./exercices/natif/exercices/exercice-4.md)
    * Reprend l'énoncé de l'Exercice 3.
    * Nécessite l'API JavaScript [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, Régions et Villes. On s'intéresse ici particulièrement aux opérations Read. On s'intéresse ici particulièrement aux opérations Create.
- (__NEW__ !) [Exercice 5 (XHR): Formulaires dépendants](./exercices/natif/exercices/exercice-5.md)
    * Nécessite l'API JavaScript [XmlHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, Régions et Villes. On s'intéresse ici particulièrement aux opérations Create.
- (__NEW__ !) [Exercice 6 (Fetch): Formulaires dépendants](./exercices/natif/exercices/exercice-6.md)
    * Reprend l'énoncé de l'Exercice 5.
    * Nécessite l'API JavaScript [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, Régions et Villes.. On s'intéresse ici particulièrement aux opérations Create.
- (__NEW__ !) [Exercice 7 (XHR): Cascades de suppression](./exercices/natif/exercices/exercice-7.md)
    * Nécessite l'API JavaScript [XmlHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, Régions et Villes. . On s'intéresse ici particulièrement aux opérations Delete.
- (__NEW__ !) [Exercice 8 (Fetch): Cascades de suppression](./exercices/natif/exercices/exercice-8.md)
    * Reprend l'énoncé de l'Exercice 7.
    * Nécessite l'API JavaScript [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    * Nécessite une API REST avec opérations CRUD sur des entités Pays, Régions et Villes. . On s'intéresse ici particulièrement aux opérations Delete.

*A utiliser avec une API REST développée par ailleurs.*

---

## Exercices avec RxJS

Objectif : Combiner les Observables avec la méthode AJAX

---

VirtuoWorks® - tous droits réservés©