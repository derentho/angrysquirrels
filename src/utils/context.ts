import { config } from "dotenv";

/**
 * Une classe contenant toutes les données de l'application.
 * 
 * `Context` est un singleton.
 */
export default class Context {

    // --- Static ---

  private static instance?: Context;

  /**
   * Récupère l'instance unique du contexte de l'application.
   * 
   * @returns L'instance actuelle de `Context`.
   */
  static getInstance(): Context {
    if (!this.instance) {
      this.instance = new Context();
    }
    return this.instance;
  }


    // --- Constructeur ---

  private constructor() {
    config();
  }


    // --- Accesseurs ---

  /**
   * Le token utilisé par l'API Discord.
   */
  get prefix(): string {
    return process.env.PREFIX ?? "";
  }

  /**
   * Le préfixe des commandes Discord.
   */
  get token(): string {
    return process.env.TOKEN ?? "";
  }

}
