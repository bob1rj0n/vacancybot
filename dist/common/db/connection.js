"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config");
async function connectDB() {
    try {
        console.log(config_1.ENV.DB_URL);
        mongoose_1.default.set("debug", true);
        await mongoose_1.default.connect(config_1.ENV.DB_URL);
        console.log("MongoDB connected!!!");
    }
    catch (e) {
        console.log(e);
    }
}
exports.connectDB = connectDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vZGIvY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0VBQWdDO0FBQ2hDLHNDQUFnQztBQUV6QixLQUFLLFVBQVUsU0FBUztJQUMzQixJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsa0JBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsWUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sQ0FBQyxFQUFFO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjtBQUNMLENBQUM7QUFWRCw4QkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7IEVOViB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhFTlYuREJfVVJMKTtcbiAgICAgICAgbW9uZ29vc2Uuc2V0KFwiZGVidWdcIiwgdHJ1ZSk7XG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoRU5WLkRCX1VSTCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0ZWQhISFcIik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbn1cbiJdfQ==