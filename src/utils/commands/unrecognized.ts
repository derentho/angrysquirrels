import { Message, MessageEmbed } from "discord.js";
import Command from "../command";
import Context from "../context";

/**
 * Une commande qui gère les erreurs.
 */
export default class Unrecognized extends Command {

    // --- Accesseurs ---

  get name(): string {
    return "error";
  }

  get description(): string {
    return "Une erreur est survenue";
  }

  get help(): string {
    return "Affiche des informations en cas d'erreur.";
  }


    // --- Méthode ---

  async execute(message: Message, args?: string[]): Promise<void> {
    const context = Context.getInstance();
    const content = message.content.split(" ");
    const command = content[0].substring(context.prefix.length);

    let ret = `La commande \`${command}\` `;
    if (args && args.length === 1) {
      ret += `avec l'argument \`${args[0]}\` `;
    } else if (args && args.length >= 1) {
      ret += `avec les arguments ${args.map(e => `\`${e}\``).join(" ")} `;
    }
    ret += "n'est pas reconnue.";

    const embed = new MessageEmbed()
      .addField(this.description, ret);
    await message.channel.send(embed);
  }

}
