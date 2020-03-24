/**
  Vous utiliserez un navigateur Internet en temps que logiciel client.
  Et vous allez créer un logiciel serveur qui accepte l'établissement d'un
  socket avec votre navigateur Internet.

  Les données à travers le réseau sont échangées sous la forme d'octets. Dans un
  programme, il est parfois nécessaire de convertir ces octets en données plus
  facile à exploiter (du texte par exemple).

  Les octets sont du type Buffer sur Node JS et l'API native Buffer permet
  d'effectuer des opérations sur les octets :
    https://nodejs.org/api/buffer.html

  Par exemple, pour convertir un type Buffer en chaine de caractère on utilise :
    <Mes Octets>.toString();
  Pour convertir une chaine de caractères en Buffer on utilise :
    Buffer.from(<Ma Chaine>);
  Pour concaténer différents Buffer on utilise :
    Buffer.concat(<Tableau contenant différents Buffer>)
**/

/**
  Exercices :

    1. Crééz un logiciel serveur qui accepte l'établissemet d'un socket avec un
    logiciel client distant. Si un socket est établi avec le logiciel client
    distant, votre serveur doit afficher tout ce qu'il reçoit en provenance du
    logiciel client dans le terminal.

    Ici votre logiciel client sera votre navigateur Internet.

    Vous utiliserez :
    - l'API net.Server
    - l'évènement 'connection'
    Puis vous utiliserez :
    - l'API net.Socket;
    - l'évènement 'data'
    - l'évènement 'end'.

    Attention les données reçues sont des octets (Buffer)
**/

/**
    2. Améliorez votre logiciel serveur pour qu'il réponde au navigateur
    Internet APRES avoir téléchargé la totalité des données transmises par ce
    dernier. Vous répondrez au navigateur Internet le texte suivant :

    HTTP/1.1 200 OK
    Server: homemade

    Hello World !

    Attention à respecter les sauts de ligne...

    Vous utiliserez :
    - l'API net.Server
    - l'évènement 'connection'
    Puis vous utiliserez :
    - l'API net.Socket;
    - l'évènement 'data'
    - l'évènement 'end'.
    - La méthode .write() et .end()

    Attention les données emises doivent être des octets (Buffer)
**/

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
