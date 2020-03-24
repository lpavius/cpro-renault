"use strict";

/**
 * Création d'une structure objet
 */
// 1ère possibilité :
/**
var Simulation = function() {
  this.name = "Ma Simulation";
}

Simulation.prototype.createAquarium = function(x,y){
  // this référence vers l'objet dans lequel est exécutée la méthode
  this.aquarium = new Aquarium(x,y, this);
}

var Aquarium = function(x, y, simulation){
  this.x = x;
  this.y = y;

  this.simulation = simulation;

  this.fishShoal = [];
}

Aquarium.prototype.createFish = function(x, y) {
  this.fishShoal.push(new Poisson(x,y, this));
}

var Poisson = function(x, y, aquarium){
  this.x = x;
  this.y = y;

  this.aquarium = aquarium;
}

Poisson.prototype.whatSimulation = function(){
  this.aquarium.simulation.name
}

var mySimulation = new Simulation();
mySimulation.createAquarium(17,71);
mySimulation.aquarium.createFish(67,76);

console.log(mySimulation);
**/
var Fish = function(x, y, anAquarium){
  this.x = x;
  this.y = y;

  this.aquarium = anAquarium; // to be defined
}

var Aquarium = function(x,y,aSimulation){
  this.x = x;
  this.y = y;

  this.simulation = aSimulation; // to be defined

  this.fishShoal = [];
}

var Simulation = function(){
  this.aquarium; // to be defined
}

var mySimulation = new Simulation();

mySimulation.aquarium = new Aquarium(12, 14, mySimulation);
mySimulation.aquarium.fishShoal.push( new Fish(56, 22, mySimulation.aquarium) );


/**
 * Constructeur et Class
 */
// ES6+
/*class VoitureMieux {
  constructor() {
    this.marque = "Rono";
  }

  quelleMarque(){
    console.log(this.marque);
  }
}*/

// Identique à
// ES5
function VoitureMieux(){
  this.marque = "Rono";
}

VoitureMieux.prototype.quelleMarque = function(){
  console.log(this.marque);
}

let v1 = new VoitureMieux();
let v2 = new VoitureMieux();

v2.quelleMarque();

/**
 * Design pattern "sub-class"
 */
/*var Cheval = function() {
  this.pattes = 4;
  this.aUneCriniere = true;
  this.couleur = "brun";
}

Cheval.prototype.henit = function(){
  console.log("Hiiii ! Hann !");
}

var Mule = function(){
  this.aDeGrandeDents = true;
  this.estTetue = true;
  // Utilise la fonction parent pour définir les propriété propres.
  Cheval.call(this);
}
// Recopie les méthodes du prototype de la fonction constructeur parent.
Mule.prototype = Object.create(Cheval.prototype);
*/
/**
 * Ce design pattern est implémenté en es6+ avec class... extends et super
 */
class Cheval {
  constructor(){
    this.pattes = 4;
    this.aUneCriniere = true;
    this.couleur = "brun";
  }

  henit() {
    console.log("Hiiii ! Hann !");
  }
}

class Mule extends Cheval{
  constructor(){
    super();
    this.aDeGrandeDents = true;
    this.estTetue = true;
  }

  henit() {
    console.log("Hi ! Han !");
  }
}

var a1 = new Mule();














