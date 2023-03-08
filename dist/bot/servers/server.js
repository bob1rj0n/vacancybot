"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const config_1 = require("../../common/config");
const connection_1 = require("../../common/db/connection");
const admin_bot_plugin_1 = require("../plugins/admin.bot.plugin");
const bot_plugin_1 = require("../plugins/bot.plugin");
const server = (0, fastify_1.default)({ logger: true });
server.register(bot_plugin_1.botPlugin);
server.register(admin_bot_plugin_1.botAdminPlugin);
async function start() {
    try {
        await (0, connection_1.connectDB)();
        server.listen({ port: config_1.ENV.BOT_PORT, host: "0.0.0.0" });
        console.log("Server bot is running : ", config_1.ENV.BOT_PORT);
    }
    catch (e) {
        console.log("Server failed to start___", e);
    }
}
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2JvdC9zZXJ2ZXJzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsZ0RBQTBDO0FBQzFDLDJEQUF1RDtBQUN2RCxrRUFBNkQ7QUFDN0Qsc0RBQWtEO0FBRWxELE1BQU0sTUFBTSxHQUFHLElBQUEsaUJBQU8sRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUNBQWMsQ0FBQyxDQUFDO0FBRWhDLEtBQUssVUFBVSxLQUFLO0lBQ2xCLElBQUk7UUFDRixNQUFNLElBQUEsc0JBQVMsR0FBRSxDQUFBO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFlBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN0RDtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsQ0FBQTtLQUM1QztBQUNILENBQUM7QUFFRCxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5IGZyb20gXCJmYXN0aWZ5XCI7XG5pbXBvcnQgeyBFTlYgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBib3RBZG1pblBsdWdpbiB9IGZyb20gXCIuLi9wbHVnaW5zL2FkbWluLmJvdC5wbHVnaW5cIjtcbmltcG9ydCB7IGJvdFBsdWdpbiB9IGZyb20gXCIuLi9wbHVnaW5zL2JvdC5wbHVnaW5cIjtcblxuY29uc3Qgc2VydmVyID0gZmFzdGlmeSh7IGxvZ2dlcjogdHJ1ZSB9KTtcblxuc2VydmVyLnJlZ2lzdGVyKGJvdFBsdWdpbik7XG5zZXJ2ZXIucmVnaXN0ZXIoYm90QWRtaW5QbHVnaW4pO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0REIoKVxuICAgIHNlcnZlci5saXN0ZW4oeyBwb3J0OiBFTlYuQk9UX1BPUlQsIGhvc3Q6IFwiMC4wLjAuMFwiIH0pXG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgYm90IGlzIHJ1bm5pbmcgOiBcIiwgRU5WLkJPVF9QT1JUKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgZmFpbGVkIHRvIHN0YXJ0X19fXCIsIGUpXG4gIH1cbn1cblxuc3RhcnQoKTsiXX0=