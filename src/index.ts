import { Client, Message } from "discord.js";
import { API_TOKEN } from "./config";

const client = new Client();

client.on("ready", () => {
  console.log("Client launched successfully");
});

client.on("message", (m: Message) => {
  if (m.content === "!!help") {
    m.channel.send("A faire par **pipierre80**");
  }
});

client.login(API_TOKEN);
