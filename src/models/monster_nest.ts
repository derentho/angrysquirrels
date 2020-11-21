import Monster from "./monster";

/**
 * Un nid de monstres.
 */
export default class MonsterNest {

    // --- Attribut ---

  #monsters: Array<Monster>;
  readonly limit: number;


    // --- Constructeur ---

  constructor(limit: number) {
    this.#monsters = new Array<Monster>();
    this.limit = limit;
  }


    // --- Méthodes ---

  /**
   * Fait apparaitre un monstre dans le nid, s'il y a de la place.
   * 
   * @returns Un monstre, s'il est apparut.
   */
  pop(): Monster | undefined {
    if (this.#monsters.length === this.limit) {
      return undefined;
    }

    const monster = Monster.generate();
    this.#monsters.unshift(monster);
    return monster;
  }

  /**
   * Tue un monstre dans le nid.
   * 
   * @returns Un monstre, s'il a été tué.
   */
  kill(): Monster | undefined {
    return this.#monsters.pop();
  }

}
