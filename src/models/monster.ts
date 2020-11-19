
/**
 * Un monstre (basique) du jeu.
 */
export default class Monster {

    // --- Constantes ---

  /** Les valeurs possibles pour le nom d'un monstre. */
  private static readonly POSSIBLES_NAMES = [
    "Pierre", "Antoine", "Johan", "Théo", "Dorian", "Guillaume", "Thomas",
    "Baptiste", "Yoann", "Paul"
  ];

  /** Les valeurs possibles pour le type d'un monstre. */
  private static readonly POSSIBLES_TYPES = [
    "le gobelin", "la liche", "la goule", "le loup-garou", "la sorcière",
    "l'argileux", "le gluant", "la cocatrix", "le buisson", "le zombie"
  ];


    // --- Attributs ---

  #name: string;
  #type: string;


    // --- Constructeur ---

  constructor(name: string, type: string) {
    this.#name = name;
    this.#type = type;
  }


    // --- Méthode ---

  /**
   * Une chaîne de caractères représentant l'objet.
   */
  toString(): string {
    return `${this.#name} ${this.#type}`;
  }


    // --- Static ---

  /**
   * Génère un monstre aléatoire.
   */
  static generate(): Monster {
    const name = Monster.POSSIBLES_NAMES[
      Math.floor(Math.random() * Monster.POSSIBLES_NAMES.length)
    ];
    const type = Monster.POSSIBLES_TYPES[
      Math.floor(Math.random() * Monster.POSSIBLES_TYPES.length)
    ];
    return new Monster(name, type);
  }

}
