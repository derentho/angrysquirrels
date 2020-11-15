import { Client, Message } from "discord.js";
import Command from "./command";
import Help from "./commands/help";
import Unrecognized from "./commands/unrecognized";
import Context from "./context";

/**
 * Gère le routage des commandes.
 */
export default class CommandRouter {

    // --- Attribut ---

  #commands: Map<string, Command>;


    // --- Constructeur ---

  constructor(client: Client) {
    this.#commands = new Map<string, Command>();
    this.#commands.set("help", new Help(this.#commands));
    const context = Context.getInstance();

    client.on("message", (message: Message) => {
      if (!message.content.startsWith(context.prefix)) {
        return;
      }

      const content = message.content.split(" ");
      const command = content[0].substring(context.prefix.length);
      const args = content.slice(1);

      if (this.#commands.has(command)) {
        void this.#commands.get(command)?.execute(message, args);
      } else {
        const unrecognized = new Unrecognized();
        void unrecognized.execute(message, args);
      }
    });
  }


    // --- Méthode ---

  /**
   * Ajoute des comandes au routeur.
   * 
   * @param commands Un ensemble de commandes.
   */
  register(...commands: Command[]): void {
    for (const command of commands) {
      this.#commands.set(command.name, command);
    }
  }

}
