var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // Attention le type primitif number
    // N'est pas le type Number qui correspond
    // à la fonction constructeur Number.s
    var unNombre = void 0;
    unNombre = new Number(10);
    // Types primitifs :
    // Tuples :
    var ageEtPrenom = [
        37,
        "Sami",
    ];
    // Types avancés :
    // Type Union :
    var ageOuPrenom = void 0;
    ageOuPrenom = "Sami";
    ageOuPrenom = 37;
    var avionOuVoiture = void 0;
    var avionsOuVoitureOuDesString = void 0;
    avionsOuVoitureOuDesString = ["Hello", { reservoir: 320, ailes: 2 }];
    // Type Intersection :
    var voitureVolante = void 0;
    voitureVolante = {
        reservoir: 400,
        roues: 4,
        ailes: 2
    };
    var vv = void 0;
    var ap = void 0;
    // Déclarer des unions avec des valeurs statiques :
    var compteARebours = void 0;
    // Type qui correspond à undefined :
    var maFonction = function () {
        console.log("Hello !");
    };
    /**
     * Les héritages
     */
    // implements : TypeScript s'utilise pour désigner
    // l'interface à respecter :
    var FabricantDeVoiture = /** @class */ (function () {
        function FabricantDeVoiture(r) {
            this.roues = 4;
            this.reservoir = r;
        }
        return FabricantDeVoiture;
    }());
    ;
    // mot clé extends : ES2018
    var Renault = /** @class */ (function (_super) {
        __extends(Renault, _super);
        function Renault(modele) {
            var _this = _super.call(this, 100) || this;
            _this.modele = modele;
            _this.marque = "Renault"; // assignation ES2018.
            return _this;
        }
        return Renault;
    }(FabricantDeVoiture));
    var v = new Renault("Clio");
    window.addEventListener("DOMContentLoaded", function () {
        // Typage
        var element;
        //        Assertion de type :
        element = window.document.getElementById("petit-chat");
        element.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4P7iLCGajjyq0zt1sM8813gWxtWe0FCij_TiJhSs0F-t1hoa&s";
    });
}
