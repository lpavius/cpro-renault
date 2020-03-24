"use strict";

// Déclaration de la 1ère Promesse
const executeur = new Promise(function(quandCaVa, quandCaVaPas){
  window.setTimeout(function(){
    // code...
    //console.log("Decollage");
    quandCaVa("Une information cruciale");
  }, 3000);
});

// Déclaration du code à exécuter à la résolution de la 1ère Promesses
var laPromesseRetournee = executeur.then(function(valeur){
  console.log("1ère fonction quand ça va", valeur);
  // On retourne une 2ème Promesse
  return new Promise(function(toutVaBien){
    setTimeout(function(){
      //console.log("Vol plané");
      toutVaBien("Autre information transmise par la 2ème promesse");
    }, 5000);
  });
});

// Déclaration du code à exécuter à la résolution de la 2ème Promesse
laPromesseRetournee.then(function(autreValeur){
  //console.log("2ème fonction quand ça va", autreValeur);
});

// Code aynchrone avec async et await
let chrono1 = function(){
  return new Promise(function(premiereResolue, promesseRejetee){
    window.setTimeout(function(){
      console.log("1er setTimeout");
      promesseRejetee();
    }, 5000);
  });
};

let chrono2 = function(){
  return new Promise(function(deuxiemeResolue){
    window.setTimeout(function(){
      console.log("2ème setTimeout");
      deuxiemeResolue();
    }, 5000);
  });
}

async function maFonctionDuTurfu() {
  try {
    await chrono1();
  } catch {
    console.log("Ici je gère le cas ou la promesse est rejetée !");
  }
  await chrono2();
};

console.log("Avant");

maFonctionDuTurfu();

console.log("Après");