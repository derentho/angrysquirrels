import { config } from "dotenv";

/**
 * Une classe contenant toutes les données de l'application.
 * 
 * `Context` est un singleton.
 */
export default class Context {

    // --- Constantes ---

  /** Le préfixe par défaut des commandes Discord. */
  private static readonly DEFAULT_PREFIX = "!!";

  /** Le token par défaut utilisé par l'API Discord. */
  private static readonly DEFAULT_TOKEN = "";


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
   * Le préfixe des commandes Discord.
   */
  get prefix(): string {
    return process.env.PREFIX ?? Context.DEFAULT_PREFIX;
  }

  /**
   * Le token utilisé par l'API Discord.
   */
  get token(): string {
    return process.env.TOKEN ?? Context.DEFAULT_TOKEN;
  }

}
