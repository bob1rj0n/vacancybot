import fastify from "fastify";
import { ENV } from "../../common/config";
import { connectDB } from "../../common/db/connection";
import { botAdminPlugin } from "../plugins/admin.bot.plugin";
import { botPlugin } from "../plugins/bot.plugin";

const server = fastify({ logger: true });

server.register(botPlugin);
server.register(botAdminPlugin);

async function start() {
  try {
    await connectDB()
    server.listen({ port: ENV.BOT_PORT, host: "0.0.0.0" })
    console.log("Server bot is running : ", ENV.BOT_PORT)
  } catch (e) {
    console.log("Server failed to start___", e)
  }
}

start();