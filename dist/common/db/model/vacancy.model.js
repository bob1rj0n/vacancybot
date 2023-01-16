"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyModel = exports.Vacancy = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../constant/collections");
let Vacancy = class Vacancy {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "direction", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: 'findWork' }),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "age", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "technology", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "tgUsername", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "place", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "minSum", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "maxSum", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "profession", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "timeToCall", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "goal", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "msg", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "userMsgId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "messageId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "img", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Vacancy.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: undefined }),
    tslib_1.__metadata("design:type", Date)
], Vacancy.prototype, "deletedAt", void 0);
Vacancy = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.Collections.VACANCY,
            timestamps: true
        }
    })
], Vacancy);
exports.Vacancy = Vacancy;
exports.VacancyModel = (0, typegoose_1.getModelForClass)(Vacancy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjYW5jeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLDREQUF5RDtBQVVsRCxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQU87Q0FrRW5CLENBQUE7QUFqRUc7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3VDQUNPO0FBRWQ7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDOztxQ0FDbEI7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7cUNBQ0s7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7b0NBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzJDQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsyQ0FDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3FDQUNLO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzswQ0FDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOzswQ0FDTjtBQUVuQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztzQ0FDakIsSUFBSTswQ0FBQztBQTlEUixPQUFPO0lBUm5CLElBQUEsd0JBQVksRUFBQztRQUNWLGFBQWEsRUFBRTtZQUNYLFVBQVUsRUFBRSx5QkFBVyxDQUFDLE9BQU87WUFDL0IsVUFBVSxFQUFFLElBQUk7U0FDbkI7S0FDSixDQUFDO0dBR1csT0FBTyxDQWtFbkI7QUFsRVksMEJBQU87QUFvRVAsUUFBQSxZQUFZLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIEluZGV4LCBtb2RlbE9wdGlvbnMsIHByb3AsIFJlZiB9IGZyb20gXCJAdHlwZWdvb3NlL3R5cGVnb29zZVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbnMuVkFDQU5DWSxcclxuICAgICAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhY2FuY3kge1xyXG4gICAgQHByb3AoKVxyXG4gICAgdXNlcklkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBkaXJlY3Rpb246IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogJ2ZpbmRXb3JrJyB9KVxyXG4gICAgdHlwZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbmFtZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgYWdlOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0ZWNobm9sb2d5OiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0Z1VzZXJuYW1lOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBwaG9uZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcGxhY2U6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHByaWNlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBtaW5TdW06IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG1heFN1bTogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcHJvZmVzc2lvbjogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGltZVRvQ2FsbDogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgZ29hbDogc3RyaW5nXHJcblxyXG4gICAgQHByb3Aoe30pXHJcbiAgICBtc2c6IHN0cmluZztcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB1c2VyTXNnSWQ6IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG1lc3NhZ2VJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3Aoe30pXHJcbiAgICBpbWc6IHN0cmluZztcclxuXHJcbiAgICBAcHJvcCh7IGRlZmF1bHQ6IGZhbHNlIH0pXHJcbiAgICBpc0RlbGV0ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgQHByb3AoeyBkZWZhdWx0OiB1bmRlZmluZWQgfSlcclxuICAgIGRlbGV0ZWRBdD86IERhdGU7XHJcblxyXG4gICAgY3JlYXRlZEF0PzogRGF0ZTtcclxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZhY2FuY3lNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoVmFjYW5jeSk7XHJcbiJdfQ==