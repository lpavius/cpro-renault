/**
 * Tester successivement des valeurs.
 */
let variableATester = Math.floor(Math.random() * 10);

const valeursATester = [
  2,
  5,
  6,
  9,
  10
];

let valeurDArret;
for(valeur of valeursATester) {
  if (variableATester <= valeur) {
    valeurDArret = valeur;
    break;
  }
};

/**
 * Créer un accumulateur basiquement
 */
let accumulateur1 = 0;
for (let i = 0; i < 10; i++) {
  let unNombre = Math.random();
  accumulateur1 += unNombre;
}
// Avec .reduce
let monAccumulateur = [1,2,3].reduce(function(accumulateur2, valeurCourante){
  accumulateur2 += valeurCourante;
  return accumulateur2;
});

monAccumulateur; // 6 <= 1 + 2 + 3