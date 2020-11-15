import { Client, Message } from "discord.js";
import Command from "./command";
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
    const context = Context.getInstance();

    client.on("message", (message: Message) => {
      if (!message.content.startsWith(context.prefix)) {
        return;
      }

      const content = message.content.split(" ");
      const command = content[0];
      const args = content.slice(1);

      if (this.#commands.has(command)) {
        void this.#commands.get(command)?.execute(message, args);
      } else {
        this.unrecognizedCommand(message, command, args);
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


    // --- Outil ---

  /**
   * L'action à effectuer en cas de message non reconnue.
   * 
   * @param message Le message source de la commande.
   * @param command Le nom de la commande.
   * @param args Les arguments de la commande.
   */
  unrecognizedCommand(message: Message, command: string, args: string[]): void {
    void message.channel.send(
        "La commande `"
      + command
      + "` avec les arguments `"
      + args.join(" ")
      + "` n'est pas reconnue."
    );
  }

}
