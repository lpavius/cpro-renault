"use strict";

const monModuleURL = module.require("url");
const monModuleHTTP = module.require("http");
const monModuleQueryString = module.require("querystring");
const monModuleFileSystem = module.require("fs");

let monServeurHTTP = monModuleHTTP.createServer(); // récupére un new http.Server

monServeurHTTP.on("request", function(leMessageEntrant, leMessageSortant){
  // leMessageEntrant est un objet de type http.IncomingMessage fourni
  // leMessageSortant est un objet de type http.ServerResponse fourni
  // Middleware (code entre :
  //       - l'arrivée d'une requête HTTP
  // et
  //       - avant d'envoyer un réponse HTTP
  // )

  let corpsDeLaRequete = '';
  // On reconstitue progressivement le corps de la requête.
  leMessageEntrant.on('data', function(morceauDeDonnees){
    // Cet évenement est déclenché plusieurs fois au fur et à mesure
    // que le serveur télécharge le corps de la requête.
    //corpsDeLaRequete = corpsDeLaRequete + morceauDeDonnees;
    corpsDeLaRequete += morceauDeDonnees;
  });

  leMessageEntrant.on('end', function(){
      // Ici je sais que j'ai téléchargé TOUT le corps de la requête (si pas vide).
      let queryStringDuCorps = {};
      if (corpsDeLaRequete) {
        queryStringDuCorps = monModuleQueryString.parse(corpsDeLaRequete);
      }
      console.log(queryStringDuCorps);
      //console.log(leMessageEntrant);
      let mesDonnees;
      // J'analyse un donnée d'en-tête de la REQUETE HTTP
      let urlParsee = monModuleURL.parse(leMessageEntrant.url, true);

      console.log(urlParsee);

      if ( "/toto" === urlParsee.pathname ) {
        let cheminVersFichier = "a.html";
        monModuleFileSystem.readFile(cheminVersFichier, function(uneErreur, leContenu){
          // Ici le contenu du callback qui SERA exécuté à la fin de la
          // lecture du fichier a.html
          let code = 200;
          if (uneErreur) {
            code = 404;
            leContenu = Buffer.from("<h1>C'est la bérézina mais comme en 404</h1>");
          } else {
            let leContenuEnString = leContenu.toString("utf8");
            leContenuEnString = leContenuEnString.replace("{DATE}", (new Date()).toString());
            if (urlParsee.query.prenom) {
              leContenuEnString = leContenuEnString.replace("#prenom#", urlParsee.query.prenom);
            }
            if (queryStringDuCorps.prenom) {
              leContenuEnString = leContenuEnString.replace("#prenom#", queryStringDuCorps.prenom);
            }
            if (urlParsee.query.nom) {
              leContenuEnString = leContenuEnString.replace("#nom#", urlParsee.query.nom);
            }
            if (queryStringDuCorps.nom) {
              leContenuEnString = leContenuEnString.replace("#nom#", queryStringDuCorps.nom);
            }
            leContenu = Buffer.from(leContenuEnString);
          }

          leMessageSortant.writeHead(code, {
            "Content-Type": "text/html;charset=utf8",
            "Content-Length": leContenu.length,
          });

          // J'écris le CORPS de REPONSE HTTP
          leMessageSortant.write(leContenu, function(){
            // callback exécuté lorsque toutes les données ont été envoyées
            leMessageSortant.end(); // on coupe la connexion
          });
        });
      } else {
        if ("/titi" === urlParsee.pathname) {
          let cheminVersFichier = "b.html";
          monModuleFileSystem.readFile(cheminVersFichier, function(uneErreur, leContenu){
            // Ici le contenu du callback qui SERA exécuté à la fin de la
            // lecture du fichier a.html
            let code = 200;
            if (uneErreur) {
              code = 404;
              leContenu = Buffer.from("<h1>C'est la bérézina mais comme en 404</h1>");
            }

            leMessageSortant.writeHead(code, {
              "Content-Type": "text/html;charset=utf8",
              "Content-Length": leContenu.length,
            });

            // J'écris le CORPS de REPONSE HTTP
            leMessageSortant.write(leContenu, function(){
              // callback exécuté lorsque toutes les données ont été envoyées
              leMessageSortant.end(); // on coupe la connexion
            });
          });
        } else {
          let mesDonnees = "<h1>Salut !</h1>";
          // Je crée un tableau d'octets à partir de ma chaîne de caractère
          let leBufferCorrespondantAuxDonnees = Buffer.from(mesDonnees);

          // J'écris les en-têtes de REPONSE HTTP
          leMessageSortant.writeHead(200, {
            "Content-Type": "text/html;charset=utf8",
            "Content-Length": leBufferCorrespondantAuxDonnees.length,
          });

          // J'écris le CORPS de REPONSE HTTP
          leMessageSortant.write(leBufferCorrespondantAuxDonnees, function(){
            // callback exécuté lorsque toutes les données ont été envoyées
            leMessageSortant.end(); // on coupe la connexion
          });
        }
      }
  });

});

monServeurHTTP.listen(1234, function(){
  console.log("Serveur démarré.");
});