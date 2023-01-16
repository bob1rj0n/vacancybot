"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const config_1 = require("../../common/config");
const connection_1 = require("../../common/db/connection");
const bot_plugin_1 = require("../plugins/bot.plugin");
const server = (0, fastify_1.default)({ logger: true });
server.register(bot_plugin_1.botPlugin);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2JvdC9zZXJ2ZXJzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsZ0RBQTBDO0FBQzFDLDJEQUF1RDtBQUN2RCxzREFBa0Q7QUFFbEQsTUFBTSxNQUFNLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxzQkFBUyxDQUFDLENBQUM7QUFFM0IsS0FBSyxVQUFVLEtBQUs7SUFDbEIsSUFBSTtRQUNGLE1BQU0sSUFBQSxzQkFBUyxHQUFFLENBQUE7UUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsWUFBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQ3REO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFBO0tBQzVDO0FBQ0gsQ0FBQztBQUVELEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhc3RpZnkgZnJvbSBcImZhc3RpZnlcIjtcclxuaW1wb3J0IHsgRU5WIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWdcIjtcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYi9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IGJvdFBsdWdpbiB9IGZyb20gXCIuLi9wbHVnaW5zL2JvdC5wbHVnaW5cIjtcclxuXHJcbmNvbnN0IHNlcnZlciA9IGZhc3RpZnkoeyBsb2dnZXI6IHRydWUgfSk7XHJcblxyXG5zZXJ2ZXIucmVnaXN0ZXIoYm90UGx1Z2luKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgc2VydmVyLmxpc3Rlbih7IHBvcnQ6IEVOVi5CT1RfUE9SVCwgaG9zdDogXCIwLjAuMC4wXCIgfSlcclxuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIGJvdCBpcyBydW5uaW5nIDogXCIsIEVOVi5CT1RfUE9SVClcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBmYWlsZWQgdG8gc3RhcnRfX19cIiwgZSlcclxuICB9XHJcbn1cclxuXHJcbnN0YXJ0KCk7Il19