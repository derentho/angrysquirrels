import { Client } from "discord.js";
import Attack from "./commands/attack";
import Lore from "./commands/lore";
import MonsterNest from "./models/monster_nest";
import CommandRouter from "./utils/command_router";
import Context from "./utils/context";

const context = Context.getInstance();
const nest = new MonsterNest();

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
    void channel.send(`**${nest.pop().toString()}** est apparu !`);
  }
}, 30000);
