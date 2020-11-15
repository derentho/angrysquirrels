import { Client, Message } from "discord.js";
import CommandRouter from "./utils/command_router";
import Context from "./utils/context";

const client = new Client();
const context = Context.getInstance();
const router = new CommandRouter(client);

client.once("ready", () => {
  console.log("Client launched successfully");
});

client.on("message", (m: Message) => {
  if (m.content === `${context.prefix}help`) {
    void m.channel.send("A faire par **pipierre80**");
  }
});

void client.login(context.token);
