"use strict";

// leScriptACharger : URL du script à charger
// laFonctionAExecuter : fonction à exécuter quand le script est chargé (callback)
var requiert = function(leScriptACharger, laFonctionAExecuter) {
  var HTMLScriptElement = window.document.createElement("script");
  HTMLScriptElement.async = true;
  HTMLScriptElement.defer = true;
  HTMLScriptElement.src = leScriptACharger;
  console.log("Balise script créée et configurée...");
  window.document.body.appendChild(HTMLScriptElement);
  HTMLScriptElement.addEventListener("load", function(){
    console.log("Balise script chargé !");
    laFonctionAExecuter();
  });
}

window.addEventListener("DOMContentLoaded", function(){
  console.log("Document chargé...");
  var HTMLPElement = window.document.getElementById("clic-ici-pour-fonctionnalite-non-defini-initialement");
  HTMLPElement.addEventListener("click", function(){
    console.log("Clic sur le paragraphe detecté...");
    requiert("module-qui-gere-le-paragraphe.js", function(){
      colorChange(HTMLPElement);
    });
  });
});