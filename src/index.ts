import { Client } from "discord.js";
import Lore from "./commands/lore";
import CommandRouter from "./utils/command_router";
import Context from "./utils/context";

const context = Context.getInstance();

const client = new Client();
client.once("ready", () => {
  console.log("Client launched successfully");
});

const router = new CommandRouter(client);
router.register(
  new Lore()
);

void client.login(context.token);
