import Monster from "./monster";

/**
 * Un nid de monstres.
 */
export default class MonsterNest {

    // --- Attribut ---

  #monsters: Array<Monster>;


    // --- Constructeur ---

  constructor() {
    this.#monsters = new Array<Monster>();
  }


    // --- Méthodes ---

  /**
   * Fait apparaitre un monstre dans le nid.
   * 
   * @returns Le monstre apparut.
   */
  pop(): Monster {
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
