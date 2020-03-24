"use strict";

/**
 * Méthode d'instance et statiques
 */
var BatisseurDePyramides = function(hauteur){
  this.forme = "triangulaire";
  this.hauteur = hauteur;
}

// Méthode d'instance (sera exécutable à partir d'1 pyramide)
BatisseurDePyramides.prototype.quelleEstLaHauteur = function(){
  // Ici cette méthode utilise une référence à l'objet qui
  // est créé à l'aide de la fonction constructeur.
  // Cette méthode est faite pour être utilisée
  // sur 1 pyramide qui aura été crée à l'aide de la fonction
  // constructeur
  console.dir(this.hauteur);
}

// Méthode statique (elle ne pourra être appelé qu'a partir de
// de la fonction constructeur)
BatisseurDePyramides.quiEstLaMaitriseDOuvrage = function(){
  console.log("La maitrise d'ouvrage est le Pharaon.");
}

var pyramideDeGizeh  = new BatisseurDePyramides(200);
// l'objet obtenu à l'aide de la fonction constructeur
// BatisseurDePyramide est appelé "instance" de la fonction
// constructeur.

// .quelleEstLaHauter est qualifiée de méthode d'instance (est rattachée au prototype des objet créés à l'aide de la fonction constructeur)
pyramideDeGizeh.quelleEstLaHauteur(); // affiche 200 dans la console.
// 200 c'est la hauteur de la pyramideDeGizeh

// quiEstLaMaitriseDOuvrage est qualifiée de méthode statique (est rattachée à la fonction constructeur)
BatisseurDePyramides.quiEstLaMaitriseDOuvrage(); // affiche "... Pharaon" dans la console
// "... Pharaon" c'est la maitrise d'ouvrage de n'importe quel pyramide.

// En ES6+

// encapsulation à l'aide d'un bloc class
class ConstructeurDePyramides {
  constructor(hauteur){
    this.forme = "triangulaire";
    this.hauteur = hauteur;
  }
  // méthode d'instance (va dans la propriété prototype de la fonction constructeur)
  quelleEstLaHauteur(){
    console.log(this.hauteur);
  }
  // méthode statique (est rattachée à la fonction constructeur)
  static quiEstLaMaitriseDOuvrage(){
    console.log("La maitrise d'ouvrage est le Pharaon");
  }
};

var pyramideDeGizeh2 = new ConstructeurDePyramides(200);

// Méthode d'instance (existe que sur 1 pyramide)
pyramideDeGizeh.quelleEstLaHauteur();

// Méthode statique (n'existe pas pour 1 pyramide)
ConstructeurDePyramides.quiEstLaMaitriseDOuvrage();

/**
// En ES3/5
var ConstructeurDePyramides = (function(){
  // encapsulation dans une IFE
  function ConstructeurDePyramides(hauteur) {
    this.forme = "triangulaire";
    this.hauteur = hauteur;
  }

  // méthode d'instance (va dans la propriété prototype de la fonction constructeur)
  ConstructeurDePyramides.prototype.quelleEstLaHauteur = function(){
    console.log(this.hauteur);
  }
  // méthode statique (est rattachée à la fonction constructeur)
  ConstructeurDePyramides.quiEstLaMaitriseDOuvrage = function(){
    console.log("La maitrise d'ouvrage est le Pharaon");
  }
  return ConstructeurDePyramides;
}()); // Exécution immédiate
*/

/**
 * Les transferts de contexte
 */

var unePersonne = {
  prenom: "Sami",
  waitForIt: function() {
    // Gérer le transfert de contexte en utilisant la portée des variables
    /*
    var that = this;
    window.setTimeout(function(){
      console.log("My name is " + that.prenom);
    }, 2000);
    */

    // Gérer le transfert de contexte avec la méthode .bind()
    // Version détaillée
    /*var maFonction = function(){
      console.log("My name is " + this.prenom);
    };

    var maFonctionAvecThisFixe = maFonction.bind(this);

    window.setTimeout(maFonctionAvecThisFixe, 2000);*/

    // Version compacte
    /*window.setTimeout(function(){
      console.log("My name is " + this.prenom);
    }.bind(this), 2000);*/

    // Gérer le transfert de contexte avec les fonction flèches
    window.setTimeout(() => {
      console.log("My name is " + this.prenom);
    }, 2000);

  }
}

/**
 * Calcul des coordonnées d'un point selon une direction.
 */
var xA = 5; // coordonnées d'origine
var yA = 4; // coordonnées d'origine

var xB = 12; // coordonnées aléatoire
var yB = 15; // coordonnées aléatoire
var coefficient = (yB - yA) / (xB - xA); // coefficient directeur

// équation de la droite est de la forme y = coefficient * x + inconnue donc :
var inconnue = yA - coefficient * xA; // on détermine l'inconnue en utilisant le point d'origine.
// maintenant, on connait le coefficient directeur de l'inconnue de l'équation de droite.

var x = xA; // point de départ
var y = yA; // point de départ

// A chaque fois qu'on veut se déplacer d'un pas de 0.1 pixel (par exemple) :
var incrementArbitraire = 0.1;
// Maintenant on peut incrémenter (ou décrementer) x et retrouver le y correspondant comme suit
xCible = x + incrementArbitraire;
yCible = coefficient * xCible + inconnue;

// Si l'incrementation sur l'axe y est supérieure l'increment arbitraire.
if( Math.abs(yCible - y) > Math.abs(incrementArbitraire) && coefficient > 0) {
  // OU l'inverse, si on souhaite retrouver le x à partir d'un y incrementé :
  yCible = y + incrementArbitraire;
  xCible = (yCible - inconnue) / coefficient;
}




