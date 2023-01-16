"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const { env } = process;
exports.ENV = {
    ADMIN_BOT_PORT: Number(env.ADMIN_BOT_PORT),
    BOT_PORT: Number(env.BOT_PORT),
    DB_URL: env.DB_URL,
    HOST: env.HOST,
    BOT_TOKEN: env.BOT_TOKEN,
    ADMIN_BOT_TOKEN: env.ADMIN_BOT_TOKEN,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDREQUE0QjtBQUU1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFFWCxRQUFBLEdBQUcsR0FBRztJQUNmLGNBQWMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMxQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDOUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0lBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtJQUNkLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztJQUN4QixlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWU7Q0FDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5jb25zdCB7IGVudiB9ID0gcHJvY2VzcztcclxuXHJcbmV4cG9ydCBjb25zdCBFTlYgPSB7XHJcbiAgICBBRE1JTl9CT1RfUE9SVDogTnVtYmVyKGVudi5BRE1JTl9CT1RfUE9SVCksXHJcbiAgICBCT1RfUE9SVDogTnVtYmVyKGVudi5CT1RfUE9SVCksXHJcbiAgICBEQl9VUkw6IGVudi5EQl9VUkwsXHJcbiAgICBIT1NUOiBlbnYuSE9TVCxcclxuICAgIEJPVF9UT0tFTjogZW52LkJPVF9UT0tFTixcclxuICAgIEFETUlOX0JPVF9UT0tFTjogZW52LkFETUlOX0JPVF9UT0tFTixcclxufTtcclxuIl19