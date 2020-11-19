import { Message, MessageEmbed } from "discord.js";
import MonsterNest from "../models/monster_nest";
import Command from "../utils/command";

/**
 * Une commande pour attaquer un monstre.
 */
export default class Attack extends Command {

    // --- Attribut ---

  #nest: MonsterNest;


    // --- Constructeur ---

  constructor(nest: MonsterNest) {
    super();
    this.#nest = nest;
  }


    // --- Accesseurs ---

  get name(): string {
    return "attack";
  }

  get description(): string {
    return "Attaque !";
  }

  get help(): string {
    return "Attaque un monstre, s'il y en a.";
  }


    // --- Méthode ---

  async execute(message: Message): Promise<void> {
    const killed = this.#nest.kill();

    let content = "";
    if (killed) {
      content += `${message.author.username} a tué ${killed.toString()}`;
    } else {
      content += "Il n'y a pas de monstre à attaquer...";
    }

    const embed = new MessageEmbed()
      .addField(this.description, content);
      await message.channel.send(embed);
  }

}
