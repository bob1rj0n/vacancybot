import fastify from "fastify";
import { ENV } from "../../common/config";
import { connectDB } from "../../common/db/connection";
import { botAdminPlugin } from "../plugins/admin.bot.plugin";

const server = fastify({ logger: true });
server.register(botAdminPlugin);

async function start() {
  try {
    await connectDB()
    server.listen({ port: ENV.ADMIN_BOT_PORT, host: "0.0.0.0" })
    console.log("Server admin bot is running : ", ENV.ADMIN_BOT_PORT)
  } catch (e) {
    console.log("Server failed to start___", e)
  }
}

start();
