"use strict";
console.log(k);
// undefined
// => Avec var le nom de variable est reservé au "parse time".

// console.log(i)
// Pante : reference error

// console.log(j)
// Plante : reference error

// => Avec let ou const le nom de variable est reservé à lors de la déclaration.
// On utilise le l'expression "temporal dead zone" pour qualifier ce
// Comportement.

// => const et let sont block scoped. Le variables sont crées dans un contexte
// délimité par des { } (accolades). On appelle ces accolade un bloc.

// On préféra donc utiliser let et const en lieu et place de var.

var k;
let i;
const j = 10;

console.log(`J'ai ${j + 1} ans.`);
console.log("J'ai " + (j + 1) + " ans.");

// L'objet dans lequel les variables du code principal sont créés s'appelle
// global.
//console.log(global);

// La méthode require de l'objet module permet de charger un module secondaire.
let retour = module.require("./20191203_jour1_module_secondaire.js");

console.log(retour);
// Charge et exécute le fichier du module secondaire à la racine de node_modules.
module.require("module_secondaire_dans_le_dossier_node_modules");
// Charge et exécute le fichier du module secondaire (index.js) dans un sous dossier du dossier node_modules.
module.require("module_secondaire_dans_un_sous_dossier");

const moduleFileSystem = module.require("fs");

moduleFileSystem.writeFile("test.txt", "Ceci est un nouveau fichier", {
  encoding: "utf8"
}, function(erreur){
  if (erreur) {
    console.log("impossible de créér le fichier");
  } else {
    console.log("fichier créé.");
  }
});