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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLDREQUF5RDtBQW9CbEQsSUFBTSxJQUFJLEdBQVYsTUFBTSxJQUFJO0NBOEJoQixDQUFBO0FBN0JHO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsQ0FBQzs7b0NBQ007QUFFZjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7bUNBQ087QUFFZDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7dUNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3NDQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt5Q0FDYTtBQUVwQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7c0NBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7O3VDQUNOO0FBRW5CO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOztxQ0FDVDtBQUVoQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztzQ0FDakIsSUFBSTt1Q0FBQztBQTFCUixJQUFJO0lBbEJoQixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUU7WUFDWCxVQUFVLEVBQUUseUJBQVcsQ0FBQyxJQUFJO1NBQy9CO0tBQ0osQ0FBQztJQUVELElBQUEsaUJBQUssRUFDRjtRQUNJLE1BQU0sRUFBRSxDQUFDO0tBQ1osRUFDRDtRQUNJLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCx1QkFBdUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtLQUN6RCxDQUNKO0dBRVksSUFBSSxDQThCaEI7QUE5Qlksb0JBQUk7QUFnQ0osUUFBQSxTQUFTLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIEluZGV4LCBtb2RlbE9wdGlvbnMsIHByb3AsIFJlZiB9IGZyb20gXCJAdHlwZWdvb3NlL3R5cGVnb29zZVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbnMuVVNFUlxyXG4gICAgfVxyXG59KVxyXG5cclxuQEluZGV4KFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgbmFtZTogXCJ1c2VySWRcIixcclxuICAgICAgICBwYXJ0aWFsRmlsdGVyRXhwcmVzc2lvbjogeyBpc0RlbGV0ZWQ6IHsgJGVxOiBmYWxzZSB9IH1cclxuICAgIH1cclxuKVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgQHByb3Aoe30pXHJcbiAgICB1c2VySWQ6IG51bWJlcjtcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBpc0JvdDogYm9vbGVhblxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZztcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBsYW5ndWFnZTogc3RyaW5nO1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogZmFsc2UgfSlcclxuICAgIGlzRGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBAcHJvcCh7IGRlZmF1bHQ6IGZhbHNlIH0pXHJcbiAgICBpc0FkbWluOiBib29sZWFuXHJcblxyXG4gICAgQHByb3AoeyBkZWZhdWx0OiB1bmRlZmluZWQgfSlcclxuICAgIGRlbGV0ZWRBdD86IERhdGU7XHJcblxyXG4gICAgY3JlYXRlZEF0PzogRGF0ZTtcclxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoVXNlcik7XHJcbiJdfQ==