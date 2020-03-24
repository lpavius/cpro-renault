"use strict";

var aExecuterDansLeFutur = function(texte) {
  console.log("Décollage", texte);
}

window.setTimeout(function(){
  aExecuterDansLeFutur("pouet");
}, 5000);

var maFonction  = function(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("pouet");
    }, 5000);
  });
};

maFonction()
  .then(function(texte){
    console.log("Décollage", texte);
  })
  .then(function(){

  })
  .catch(function(){

  });

/*
executeurAsynchrone.catch(function(){

});
*/