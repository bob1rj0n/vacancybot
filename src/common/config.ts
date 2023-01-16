import dotenv from "dotenv";

dotenv.config();
const { env } = process;

export const ENV = {
    ADMIN_BOT_PORT: Number(env.ADMIN_BOT_PORT),
    BOT_PORT: Number(env.BOT_PORT),
    DB_URL: env.DB_URL,
    HOST: env.HOST,
    BOT_TOKEN: env.BOT_TOKEN,
    ADMIN_BOT_TOKEN: env.ADMIN_BOT_TOKEN,
};
