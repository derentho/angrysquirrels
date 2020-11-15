import { Message } from "discord.js";

/**
 * Une commande personnalisée. Permet de mettre en page l'aide et de fournir des
 *  aides à l'écriture de commande, tel que l'analyse des arguments.
 */
export default abstract class Command {

    // --- Accesseurs ---

  /**
   * Le nom de la commande.
   */
  abstract get name(): string;

  /**
   * La description courte de la commande.
   */
  abstract get description(): string;

  /**
   * L'aide complète de la commande.
   */
  abstract get help(): string;


    // --- Méthode ---

  /**
   * Effectue la commande.
   * 
   * @param message Le message source de la commande.
   * @param args Les arguments de la commande.
   */
  async abstract execute(message: Message, args?: string[]): Promise<void>;

}
