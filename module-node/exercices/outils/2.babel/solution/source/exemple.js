/**
 * Crée un nouveau Carosse.
 * @class
 */
class Carosse {
  /**
   * @constructs
   * @param {string} p
   */
  constructor(p) {
    this.roues = 4;
    this.attelage = true;
    this.vitesse = 20;
    this.proprietaire = p;
  }

  /** @method */
  quiEstLeProprietaire() {
    console.log(this.proprietaire);
  }
}

/**
 * Crée une nouvelle Voiture basée sur un Carosse.
 * @class
 */
class Voiture extends Carosse {
  /**
   * @constructs
   * @param {string} p
   */
  constructor(p) {
    super(p);
    this.reservoir = 100;
    this.portes = 5;
  }

  /** @method */
  roule() {
    console.log('Vrooom !');
  }
}

const vehicule = new Voiture('Pierre Dupont');

vehicule.roule();
