"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../constant/collections");
let User = class User {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isBot", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "userName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "language", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: undefined }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
User = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.Collections.USER
        }
    }),
    (0, typegoose_1.Index)({
        userId: 1,
    }, {
        unique: true,
        background: true,
        name: "userId",
        partialFilterExpression: { isDeleted: { $eq: false } }
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLDREQUF5RDtBQW9CbEQsSUFBTSxJQUFJLEdBQVYsTUFBTSxJQUFJO0NBOEJoQixDQUFBO0FBN0JHO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsQ0FBQzs7b0NBQ007QUFFZjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7bUNBQ087QUFFZDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7dUNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3NDQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt5Q0FDYTtBQUVwQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7c0NBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7O3VDQUNOO0FBRW5CO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztxQ0FDVDtBQUVoQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztzQ0FDakIsSUFBSTt1Q0FBQztBQTFCUixJQUFJO0lBbEJoQixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUU7WUFDWCxVQUFVLEVBQUUseUJBQVcsQ0FBQyxJQUFJO1NBQy9CO0tBQ0osQ0FBQztJQUVELElBQUEsaUJBQUssRUFDRjtRQUNJLE1BQU0sRUFBRSxDQUFDO0tBQ1osRUFDRDtRQUNJLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCx1QkFBdUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtLQUN6RCxDQUNKO0dBRVksSUFBSSxDQThCaEI7QUE5Qlksb0JBQUk7QUFnQ0osUUFBQSxTQUFTLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIEluZGV4LCBtb2RlbE9wdGlvbnMsIHByb3AsIFJlZiB9IGZyb20gXCJAdHlwZWdvb3NlL3R5cGVnb29zZVwiO1xuaW1wb3J0IHsgQ29sbGVjdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvY29sbGVjdGlvbnNcIjtcblxuQG1vZGVsT3B0aW9ucyh7XG4gICAgc2NoZW1hT3B0aW9uczoge1xuICAgICAgICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9ucy5VU0VSXG4gICAgfVxufSlcblxuQEluZGV4KFxuICAgIHtcbiAgICAgICAgdXNlcklkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIGJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIG5hbWU6IFwidXNlcklkXCIsXG4gICAgICAgIHBhcnRpYWxGaWx0ZXJFeHByZXNzaW9uOiB7IGlzRGVsZXRlZDogeyAkZXE6IGZhbHNlIH0gfVxuICAgIH1cbilcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIEBwcm9wKHt9KVxuICAgIHVzZXJJZDogbnVtYmVyO1xuXG4gICAgQHByb3AoKVxuICAgIGlzQm90OiBib29sZWFuXG5cbiAgICBAcHJvcCgpXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAcHJvcCgpXG4gICAgdXNlck5hbWU6IHN0cmluZztcblxuICAgIEBwcm9wKClcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nO1xuXG4gICAgQHByb3AoKVxuICAgIGxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgICBAcHJvcCh7IGRlZmF1bHQ6IGZhbHNlIH0pXG4gICAgaXNEZWxldGVkOiBib29sZWFuO1xuXG4gICAgQHByb3AoeyBkZWZhdWx0OiBmYWxzZSB9KVxuICAgIGlzQWRtaW46IGJvb2xlYW5cblxuICAgIEBwcm9wKHsgZGVmYXVsdDogdW5kZWZpbmVkIH0pXG4gICAgZGVsZXRlZEF0PzogRGF0ZTtcblxuICAgIGNyZWF0ZWRBdD86IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgY29uc3QgVXNlck1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhVc2VyKTtcbiJdfQ==