import { Message, MessageEmbed } from "discord.js";
import Command from "../command";
import Context from "../context";

export default class Help extends Command {

    // --- Attribut ---

  #commands: Map<string, Command>;


    // --- Constructeur ---

  constructor(commands: Map<string, Command>) {
    super();
    this.#commands = commands;
  }


    // --- Accesseurs ---

  get name(): string {
    return "help";
  }

  get description(): string {
    return "Liste des commandes";
  }

  get help(): string {
    return "Affiche le menu d'aide.";
  }


    // --- Méthode ---

  async execute(message: Message): Promise<void> {
    const context = Context.getInstance();

    let ret = "";
    for (const command of this.#commands.values()) {
      ret += `\`${context.prefix}${command.name}\` : ${command.help}` + "\n";
    }

    const embed = new MessageEmbed()
      .addField(this.description, ret);
    await message.channel.send(embed);
  }

}
