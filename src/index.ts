import { Client, Message } from "discord.js";
import * as config from "./config.json";

const client = new Client();

client.once("ready", () => {
  console.log("Client launched successfully");
});

client.on("message", (m: Message) => {
  if (m.content === `${config.prefix}help`) {
    void m.channel.send("A faire par **pipierre80**");
  }
});

void client.login(config.token);
