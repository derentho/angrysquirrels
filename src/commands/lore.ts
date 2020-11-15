import { Message, MessageEmbed } from "discord.js";
import Command from "../utils/command";

/**
 * Une commande affichant le lore du jeu.
 */
export default class Lore extends Command {

    // --- Accesseurs ---

  get name(): string {
    return "lore";
  }

  get description(): string {
    return "Le lore du jeu";
  }

  get help(): string {
    return "Affiche le lore du jeu.";
  }


    // --- Méthode ---

  async execute(message: Message): Promise<void> {
    const lore = "2042. L'explosion de la consommation a provoqué la chute de "
      + "l'Humanité. Les seuls êtres vivants restants sont une race "
      + "d'écureuils mutants, et quelques humains qui essayent tant bien que "
      + "mal de survivre. Armé de votre meilleure batte de baseball, vous vous "
      + "battez pour essayer de rendre à l'Humanité sa gloire passée...";

    const embed = new MessageEmbed()
      .addField(this.description, lore);
    await message.channel.send(embed);
  }

}
