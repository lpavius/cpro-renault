# Exercice 7. AJAX avec XHR : Cascades de suppression

Reprenez l'exercice sur les formulaires dépendants avec XHR ([c.f. Exercice 5](./exercice-5.md)). Il s'agit ici d'ajouter une formulaire pour pouvoir supprimer, soit :
* un Pays;
* une Région;
* une Ville.

Il s'agit ici d'utiliser l'API JavaScript native XMLHttpRequest pour effectuer des requêtes HTTP vers les URLs permettant de supprimer chacune de ces 3 entités.

A partir d'un seul et unique document HTML.

Votre objectif est :
* D'afficher le __Pays__ sélectionné au dessus de la liste de __Pays__ mais uniquement si un __Pays__ est sélectionné;
    * Le __Pays__ sélectionné sera suivi d'un lien `<a>` contenant le texte `X`. Si le lien est cliqué, le __Pays__, toutes les __Régions__ associées et toutes les __Villes__ associées doivent être supprimées et l'affichage actualisé en conséquence(mise à jour de la liste de sélection des __Pays__ et suppression du nom du __Pays__ et du lien  `X`).
* D'afficher la __Région__ sélectionnée au dessus de la liste de __Régions__ mais uniquement si une __Région__ est sélectionnée ET un __Pays__ est sélectionné;
    * La __Région__ sélectionnée sera suivi d'un lien `<a>` contenant le texte `X`. Si le lien est cliqué, la __Région__ et toutes les __Villes__ doivent être supprimées et l'affichage actualisé en conséquence (mise à jour de la liste de sélection des __Régions__ et suppression du nom de la __Région__ et du lien  `X`).
* D'afficher la __Ville__ sélectionnée au dessus de la liste de __Villes__ mais uniquement si la __Ville__ est sélectionnée ET qu'un __Pays__ ET une __Région__ sont sélectionnées;
    * La __Ville__ sélectionnée sera suivi d'un lien `<a>` contenant le texte `X`. Si le lien est cliqué, la __Ville__ doit être supprimée et l'affichage actualisé en conséquence (mise à jour de la liste de sélection des __Villes__ et suppression du nom de la __Ville__ et du lien  `X`).

Attention :
* Pensez à utiliser la méthode `.preventDefault()` sur les `<a>` pour éviter que le navigateur produise des requêtes HTTP.
* Pensez à utiliser la méthode `.confirm()` pour afficher un message de confirmation de suppression au utilisateurs assorti d'une condition (si OK, Suppression, sinon Rien).

*Vous pouvez vous aider de l'[exemple de client réalisé avec l'API XMLHttpRequest](../exemples/clients/xhr.html) (abrégé en xhr) fourni. Pensez à adapter l'exemple à votre environnement, en particulier l'adresse IP de l'hôte.*

*Vous pouvez également consulter un exemple de [serveur REST basé sur Node JS (en pur natif) ici](../exemples/serveur-natif/vanilla-rest-server.js) (attention, pour les requêtes HTTP POST, il attend des données sous forme de query string) ou un exemple de [serveur REST basé sur Express JS ici](../exemples/serveur-express/express-rest-server.js) (pour les requêtes HTTP POST, il attend des données sous forme de json, attention, vous avez besoin d'une base de données)*

---

VirtuoWorks® - tous droits réservés©