{
  /**
   * Types primitifs
   */
  let unBooleen: boolean;

  let unNombre: number = 10;

  let uneChaine: string = `Hello ${unNombre}`;

  /**
   * Inférence de type :
   */
  // Pas de typage (explicite) =>
  // TS fait de l'inférence de type
  // (déduit le type de la valeur assignée)
  let unAutreNombre = 10;

  // unAutreNombre = "Dix"; Type par inférence : number

  /**
   * Les Fonctions
   */

  // Ecrire la "signature" de la fonction
  let maFonction: (p: number, t: string, c:boolean) => string;

  // Déclare la fonction (qui correspond à la "signature")
  maFonction = function(a , b , c){
    // ...
    return a + b;
  }

  // On utilise la fonction avec les bons types
  let retour: string;
  retour = maFonction(1,"xyz",false);

  // Inférence de type sur les fonctions :
  const autreFonction = function(i: string,j:string,k:number){

    return i + j;
  };

  let retour2: string = autreFonction("Hello", "World", 120);

  // Faire du typage + de  l'inférence de type :
  const encoreUneFonction: (
    a:number,
    b:string
  ) => boolean = function(a: number, b:string) {
    //...
    return isNaN(parseFloat(b));
  }

  /**
   * Les "array"
   */
  const prenoms: string[] = [
    "Pierre",
    "Paul",
    "Jacques",
  ];

  const ages: number[] = [
    24,
    36,
    74,
  ];

  const verites: boolean[] = [
    true,
    false,
    false,
  ];

  // Enumérations :
  enum personnes {
    Sami,
    Michel = 45,
    Robert = 65,
    Maurice = 77,
  };

  personnes[37]; // "Sami"
  personnes["Sami"]; //37

  // Les Objets :
  interface CeQuEstUnEleve {
    prenom: string;
    nom: string;
    age: number;
    taille?: number; // optionnel avec ?
    estPresent: boolean;
    sePresente: () => void;
  };

  const benoit: CeQuEstUnEleve = {
    prenom: "Benoit",
    nom: "Balcon",
    age: 34,
    estPresent: true,
    sePresente: function(){
      window.alert("Présent !");
    }
  }

  benoit.taille = 180;

  interface QuEstCeQunClasse {
    desEleves: CeQuEstUnEleve[];
  };

  const laClasse: QuEstCeQunClasse = {
    desEleves: [benoit]
  }

  class ConstructeurDeVoiture {
    reservoir: number;
    aDesRoues: boolean;
    moteur: string;
    marque: string;
    constructor(m: string){
      this.reservoir = 100;
      this.aDesRoues = true;
      this.moteur = "à explosion";
      this.marque = m;
    }

    roule(){
      window.alert("Vroooom !");
    }
  }

  let v1: ConstructeurDeVoiture = new ConstructeurDeVoiture("Rono");

  v1.roule();


}

