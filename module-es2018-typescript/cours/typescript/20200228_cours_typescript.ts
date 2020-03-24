{
  // Attention le type primitif number
  // N'est pas le type Number qui correspond
  // à la fonction constructeur Number.s
  let unNombre: Number;
  unNombre = new Number(10);

  // Types primitifs :
  // Tuples :
  let ageEtPrenom: [
    number,
    string
  ] = [
    37,
    "Sami",
  ];

  // Types avancés :
  // Type Union :
  let ageOuPrenom: string | number;

  ageOuPrenom = "Sami";
  ageOuPrenom = 37;

  interface Voiture {
    roues: number;
    reservoir: number;
  }

  interface Avion {
    ailes: number;
    reservoir: number;
  }

  let avionOuVoiture: Voiture | Avion;

  let avionsOuVoitureOuDesString: (Voiture | Avion | string)[];
  avionsOuVoitureOuDesString = ["Hello", {reservoir: 320, ailes: 2}];

    // Type Intersection :
    let voitureVolante: Avion & Voiture;

    voitureVolante = {
      reservoir: 400,
      roues: 4,
      ailes: 2
    };

    // Déclarer des types personnalisés à l'aide du mot-clé type
    type VoitureDeJamesBond = Avion & Voiture;

    let vv: VoitureDeJamesBond;

    type AgeOuPrenom = number | string;

    let ap: AgeOuPrenom;

    // Déclarer des unions avec des valeurs statiques :
    let compteARebours: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "Décollage";

    // Type qui correspond à undefined :
    const maFonction: () => void = function(){
      console.log("Hello !");
    };

    /**
     * Les héritages
     */
    // implements : TypeScript s'utilise pour désigner
    // l'interface à respecter :
    class FabricantDeVoiture implements Voiture {
      roues: number;
      reservoir: number;
      constructor(r){
        this.roues = 4;
        this.reservoir = r;
      }
    };

    // mot clé extends : ES2018
    class Renault extends FabricantDeVoiture {
      modele:  string;
      marque: "Renault"; // typage statique : marque doit contenir obligatoirement le texte "Renault"
      constructor(modele) {
        super(100);
        this.modele = modele;
        this.marque = "Renault"; // assignation ES2018.
      }
    }

    // Assertion de type :
    let v = <FabricantDeVoiture>new Renault("Clio");
    // Ici v est considérée comme un FabricantDeVoiture et pas comme une Renault

    window.addEventListener("DOMContentLoaded", function(){
      // Typage
      let element: HTMLImageElement;
      //        Assertion de type :
      element = <HTMLImageElement>window.document.getElementById("petit-chat");
      // Ici element est considéré comme un HTMLImageElement et non comme
      // un HTMLElement
      element.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4P7iLCGajjyq0zt1sM8813gWxtWe0FCij_TiJhSs0F-t1hoa&s";
    });
}