import { Client, MessageEmbed } from "discord.js";
import Attack from "./commands/attack";
import Lore from "./commands/lore";
import MonsterNest from "./models/monster_nest";
import CommandRouter from "./utils/command_router";
import Context from "./utils/context";

const context = Context.getInstance();
const nest = new MonsterNest(10);

const client = new Client();
client.once("ready", () => {
  console.log("Client launched successfully");
});

new CommandRouter(client).register(
  new Lore(),
  new Attack(nest)
);

void client.login(context.token);

setInterval( () => {
  const channel = client.channels.cache.get("769948948655636550");
  if (channel?.isText()) {
    const monster = nest.pop();
    if (monster) {
      const embed = new MessageEmbed()
        .addField("Apparition !", `**${monster.toString()}** est apparu !`);
      void channel.send(embed);
    }
  }
}, generateDelay());

function generateDelay(): number {
  const min = 5 * 60 * 1000;
  const max = 20 * 60 * 1000;
  return Math.floor(Math.random() * (max - min)) + min;
}
