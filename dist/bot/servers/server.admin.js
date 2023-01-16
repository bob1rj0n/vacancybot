"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const config_1 = require("../../common/config");
const connection_1 = require("../../common/db/connection");
const admin_bot_plugin_1 = require("../plugins/admin.bot.plugin");
const server = (0, fastify_1.default)({ logger: true });
server.register(admin_bot_plugin_1.botAdminPlugin);
async function start() {
    try {
        await (0, connection_1.connectDB)();
        server.listen({ port: config_1.ENV.ADMIN_BOT_PORT, host: "0.0.0.0" });
        console.log("Server admin bot is running : ", config_1.ENV.ADMIN_BOT_PORT);
    }
    catch (e) {
        console.log("Server failed to start___", e);
    }
}
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmFkbWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2JvdC9zZXJ2ZXJzL3NlcnZlci5hZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsZ0RBQTBDO0FBQzFDLDJEQUF1RDtBQUN2RCxrRUFBNkQ7QUFFN0QsTUFBTSxNQUFNLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxpQ0FBYyxDQUFDLENBQUM7QUFFaEMsS0FBSyxVQUFVLEtBQUs7SUFDbEIsSUFBSTtRQUNGLE1BQU0sSUFBQSxzQkFBUyxHQUFFLENBQUE7UUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFHLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsWUFBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0tBQ2xFO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFBO0tBQzVDO0FBQ0gsQ0FBQztBQUVELEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhc3RpZnkgZnJvbSBcImZhc3RpZnlcIjtcclxuaW1wb3J0IHsgRU5WIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWdcIjtcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYi9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IGJvdEFkbWluUGx1Z2luIH0gZnJvbSBcIi4uL3BsdWdpbnMvYWRtaW4uYm90LnBsdWdpblwiO1xyXG5cclxuY29uc3Qgc2VydmVyID0gZmFzdGlmeSh7IGxvZ2dlcjogdHJ1ZSB9KTtcclxuc2VydmVyLnJlZ2lzdGVyKGJvdEFkbWluUGx1Z2luKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgc2VydmVyLmxpc3Rlbih7IHBvcnQ6IEVOVi5BRE1JTl9CT1RfUE9SVCwgaG9zdDogXCIwLjAuMC4wXCIgfSlcclxuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIGFkbWluIGJvdCBpcyBydW5uaW5nIDogXCIsIEVOVi5BRE1JTl9CT1RfUE9SVClcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBmYWlsZWQgdG8gc3RhcnRfX19cIiwgZSlcclxuICB9XHJcbn1cclxuXHJcbnN0YXJ0KCk7XHJcbiJdfQ==