/**
  NodeJS propose un module de base appelé net. Ce module contient un ensemble
  de méthodes pour travailler sur le réseau.

  Ce module est documenté ici :
    https://nodejs.org/api/net.html

  Le module net permet de travailler avec les Sockets.

  Qu'est-ce qu'un Socket ?

  Les mécanismes d'encapsulation relatifs aux couches réseau, internet et
  transport sont pris en charge par le Kernel du système d'exploitation.

  Ce dernier met à la disposition des programmeurs d'applications de l'espace
  utilisateur une API qu'on appelle Socket. C'est la couche d'abstraction
  logicielle qui représente une connexion TCP pour des échanges à travers le
  réseau.

  Un programme qui demande la création d'un socket s'appelle un client.
  Un programme qui attend l'"établissement" d'un socket avec un client s'appelle
  un serveur.

  Pour établir un socket, on doit fournir au système d'exploitation l'adresse IP
  locale ou distante ainsi que le port utilisé par le logiciel serveur avec
  lequel on souhaite établir un socket.

  Schématiquement :

  Logiciel <=> SOCKET <=> OS <--> réseau <--> OS <=> Socket <=> Logiciel
  Client                          TCP/IP                         Serveur
**/

/**
  Exercices :

    1. Scanner de ports distants : Écrivez un programme à l'aide de Node JS qui
    sera un scanner de ports distants. Le scanner de ports essaie d'établir un
    socket avec des logiciels serveur à une adresse IP distante. Si il n'y
    arrive pas à l'issue d'un délai (timeout), il affiche dans la console que le
    port est fermé. Sinon il affiche dans la console que le port est ouvert.

    Votre scanner de ports doit pouvoir prendre en argument à l'exécution :
      - L'adresse IP que vous souhaiter scanner;
      - L'intervalle de ports que vous souhaitez tester.

    Vous utiliserez l'API net.Socket
**/

/**
    2. Scanner de ports locaux : Écrivez un programme à l'aide de Node JS qui
    sera un scanner de ports locaux. Le scanner de ports essaie de créer un
    serveur associé à un port local. Si il n'y arrive pas, c'est qu'un serveur
    est déjà à l'écoute sur le port choisi et il affiche dans la console que le
    port est ouvert. Sinon il affiche dans la console que le port est ouvert.

    Votre scanner de ports doit pouvoir prendre en argument à l'exécution :
      - L'intervalle de ports que vous souhaitez tester.

    Vous utiliserez l'API net.Server
**/

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
