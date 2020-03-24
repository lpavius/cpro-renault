"use strict";
// ES3/5
"Ceci est un message. L'esprit et le \"corps\"";
'Ceci est un message. L\'esprit et le "corps"';
// ES6
`Ceci est un message. L'esprit et le "corps"`;

/**
 * Les interpolations :
 */
// ES3/5
var prenom = "Sami"
var quelEstMonNom = function () {
  return "Radi";
}
var dateDeNaissance = {
  jour: 9,
  mois: 4,
  annee: 1982
};

"Je m'appelle " + prenom + " " + quelEstMonNom() + " et j'ai " + dateDeNaissance.jour + "/" + dateDeNaissance.mois + "/" + dateDeNaissance.annee + ".";
// Même chose avec des quotes '

// ES6+
`Je m'appelle ${prenom} ${quelEstMonNom()} et j'ai ${dateDeNaissance.jour}/${dateDeNaissance.mois}/${dateDeNaissance.annee}.`;

// Les variables :
console.log(maVariable);
var maVariable = "Ceci est un texte";
console.log(maVariable);

// console.log(monAutreVariable); // Plante !
let monAutreVariable = "Ceci est un autre texte";
console.log(monAutreVariable);

// Portée des variables
// En ES3/5
if (true) {
  var secret = "Mon nom est bond !";
}

console.log(secret);

// En ES6
if (true) {
  let messageSecret = "Je m'appelle le chiffre !";
}

// console.log(messageSecret); // Plante !

/**
 * La notion d'isolation des variables et de bloc
 */
// ES3/5
// IFE
(function(){
  var mouton = "Shaun !";
  console.log(mouton);
}());

// console.log(mouton); // Plante !

// ES6+
// Déclaration de bloc :
{
  let mouton = "Shaun !";
  console.log(mouton);
}

// console.log(mouton); // Plante !

/**
 * const pour les constantes
 */
// En ES6+
const graveDansLeMarbre = "Table de la loi";
// Les variables déclarée avec le mot clé const se comporte comme celle déclarée avec let
// graveDansLeMarbre = "Dédicace de Sami"; // Plante !

const monChien = {
  prenom: "Médor"
};

// Ce n'est pas parcequ'on ne peut pas modifier l'objet référencé par la variable monChien
// qu'on ne pas modifié le contenu de cet objet.
monChien.prenom = "rex"; // Légal

/**
 * Les fonctions
 */
// En ES3/5 : fonctions avec le mot clé function
var maFonction = function(){};

var monToutou = {
  prenom: "Médor",
  cri: "Waouf !",
  aboit: function(){
    /*
    // 1ère stratégie : conserver une référence au contexte dans une variable
    var contexte = this;
    setTimeout(function(){
      // utiliser cette variable dans la fonction qui sera exécutée dans le setTimeout
      console.log(contexte.cri);
    }, 1000);
    */
    // 2ème stratégie : fixer la valeur du this dans la fonction transmise au setTimeout
    /*
    // Ecriture détaillée
    var maFonction = function(){
      console.log(this.cri);
    };

    var copieDeLaFonctionAvecThisQuiEstFixe = maFonction.bind(this);

    setTimeout(copieDeLaFonctionAvecThisQuiEstFixe, 1000);*/
    // Ecriture compactée (sans variables intermédiaire) :
    setTimeout(function(){
      console.log(this.cri);
    }.bind(this), 2000);
  }
};

monToutou.aboit();

// En ES6+ : fonctions flèches
const monChaton = {
  cri: `Miaou`,
  miaule: function() {
    this; // pointe vers le contexte dans lequel se trouve la méthode lors de son exécution
    setTimeout(() => {
      // dans une fonction flèche, this référence le contexte dans lequel la fonction est
      // DECLAREE !
      console.log(this.cri);
    }, 1000);
  }
};

monChaton.miaule();

/*const addition = (a, b) => {
  return a + b;
}*/
// Equivaut à :
const addition = (a, b) => a + b;

/*const multiplierParDix = (a) => a * 10;*/
const multiplierParDix = a => a * 10;

/**
 * Les constructeurs
 */
// ES3/5 :
var FabricantDePcChinoisES5 = function(prix, ram){
  this.marque = "Lenovo";
  this.modele = "Legion";
  this.prix = prix;
  this.ram = ram;
  this.cpu = "Intel Core I7";
}

FabricantDePcChinoisES5.quelEstLAdresseDuSiege = function(){ // méthode statique
  // this pointe vers le constructeur
  console.log("Quelque part dans la zone franche de Shenzen...");
}

FabricantDePcChinoisES5.prototype.demarrage = function(){ // méthode d'instance
  // this pointera vers un objet fabriqué par ce constructeur
  console.log("Tadaaaaa !");
}

var lePcDeYanisEnES5 = new FabricantDePcChinoisES5(1500, 16);

lePcDeYanisEnES5.demarrage(); // exécute une méthode "héritée" du prototype
FabricantDePcChinoisES5.quelEstLAdresseDuSiege(); // méthode statique (exécutée directement à partir de la fonction constructeur)

// ES6 : avec les mots clés class et constructor
class FabricantDePcChinoisES6 {
  constructor(prix, ram) {
    this.marque = `Lenovo`;
    this.modele = `Legion`;
    this.prix = prix;
    this.ram = ram;
    this.cpu = `Intel Core I7`;
  }

  demarrage() { // méthode d'instance (va dans le prototype!)
    console.log(`Tadaaa !`);
  }

  static quelEstLAdresseDuSiege() { // méthode statique (attaché au constructeur)
    console.log(`Quelque part dans la zone franche de Shenzen...`);
  }
}

const lePcDeYanisEnES6 = new FabricantDePcChinoisES6(1500, 16);

console.log(lePcDeYanisEnES5);
console.log(lePcDeYanisEnES6);

FabricantDePcChinoisES6.quelEstLAdresseDuSiege();

/**
 * Design pattern : "sous-classe" ("sub-class")
 * Imitation de l'héritage de classe en
 */

// ES3/5 :
var FabricantDeMachineACafeES5 = function(prix, marque){
  this.prix = prix;
  this.marque = marque;
  this.utiliseDesDosette = true;
  this.reservoir = 100;
  this.couleur = "noir";
}

FabricantDeMachineACafeES5.prototype.clignote = function(){
  setInterval(function(){
    console.log("Clic clac !");
  }, 1000);
}

var FabricantDeMachineATheES5 = function(prix, marque) {
  FabricantDeMachineACafeES5.call(this, prix, marque);
  this.couleur = "rouge";
  this.estAutomatique = true;
}

FabricantDeMachineATheES5.prototype = Object.create(FabricantDeMachineACafeES5.prototype);

var maMachineAThe = new FabricantDeMachineATheES5(100, "Nestlé");

maMachineAThe.clignote();

// ES6+, on peut utiliser le mot clé extends et la fonction mot clé super()
class FabricantDeMachineACafeES6 {
  constructor(prix, marque) {
    this.prix = prix;
    this.marque = marque;
    this.utiliseDesDosette = true;
    this.reservoir = 100;
    this.couleur = `noir`;
  }

  clignote() {
    setInterval(function(){
      console.log(`Clic clac !`);
    }, 1000);
  }
}

class FabricantDeMachineATheES6 extends FabricantDeMachineACafeES6 {
  constructor(prix, marque){
    super(prix, marque); //FabricantDeMachineACafeES6.call(this, prix, marque);
    this.couleur = "rouge";
    this.estAutomatique = true;
  }
}

const maMachineEnES6 = new FabricantDeMachineATheES6(150, "Nestlé");

maMachineEnES6.suprise();

