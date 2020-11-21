import { Message } from "discord.js";

/**
 * Une commande personnalisée. Permet de mettre en page l'aide et de fournir des
 *  aides à l'écriture de commande, tel que l'analyse des arguments.
 */
export default interface Command {

    // --- Accesseurs ---

  /**
   * Le nom de la commande.
   */
  name: string;

  /**
   * La description courte de la commande.
   */
  description: string;

  /**
   * L'aide complète de la commande.
   */
  help: string;


    // --- Méthode ---

  /**
   * Effectue la commande.
   * 
   * @param message Le message source de la commande.
   * @param args Les arguments de la commande.
   */
  execute(message: Message, args?: string[]): Promise<void>;

}
