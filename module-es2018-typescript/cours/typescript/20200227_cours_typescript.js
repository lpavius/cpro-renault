{
    /**
     * Types primitifs
     */
    var unBooleen = void 0;
    var unNombre = 10;
    var uneChaine = "Hello " + unNombre;
    /**
     * Inférence de type :
     */
    // Pas de typage (explicite) =>
    // TS fait de l'inférence de type
    // (déduit le type de la valeur assignée)
    var unAutreNombre = 10;
    // unAutreNombre = "Dix"; Type par inférence : number
    /**
     * Les Fonctions
     */
    // Ecrire la "signature" de la fonction
    var maFonction = void 0;
    // Déclare la fonction (qui correspond à la "signature")
    maFonction = function (a, b, c) {
        // ...
        return a + b;
    };
    // On utilise la fonction avec les bons types
    var retour = void 0;
    retour = maFonction(1, "xyz", false);
    // Inférence de type sur les fonctions :
    var autreFonction = function (i, j, k) {
        return i + j;
    };
    var retour2 = autreFonction("Hello", "World", 120);
    // Faire du typage + de  l'inférence de type :
    var encoreUneFonction = function (a, b) {
        //...
        return isNaN(parseFloat(b));
    };
    /**
     * Les "array"
     */
    var prenoms = [
        "Pierre",
        "Paul",
        "Jacques",
    ];
    var ages = [
        24,
        36,
        74,
    ];
    var verites = [
        true,
        false,
        false,
    ];
    // Enumérations :
    var personnes = void 0;
    (function (personnes) {
        personnes[personnes["Sami"] = 0] = "Sami";
        personnes[personnes["Michel"] = 45] = "Michel";
        personnes[personnes["Robert"] = 65] = "Robert";
        personnes[personnes["Maurice"] = 77] = "Maurice";
    })(personnes || (personnes = {}));
    ;
    personnes[37]; // "Sami"
    personnes["Sami"]; //37
    ;
    var benoit = {
        prenom: "Benoit",
        nom: "Balcon",
        age: 34,
        estPresent: true,
        sePresente: function () {
            window.alert("Présent !");
        }
    };
    benoit.taille = 180;
    ;
    var laClasse = {
        desEleves: [benoit]
    };
    var ConstructeurDeVoiture = /** @class */ (function () {
        function ConstructeurDeVoiture(m) {
            this.reservoir = 100;
            this.aDesRoues = true;
            this.moteur = "à explosion";
            this.marque = m;
        }
        ConstructeurDeVoiture.prototype.roule = function () {
            window.alert("Vroooom !");
        };
        return ConstructeurDeVoiture;
    }());
    var v1 = new ConstructeurDeVoiture("Rono");
    v1.roule();
}
