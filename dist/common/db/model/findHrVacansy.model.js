"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindHrVacansyModel = exports.FindHrVacansy = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../constant/collections");
let FindHrVacansy = class FindHrVacansy {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "direction", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: 'findHr' }),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "officeName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "technology", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "responsible", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "place", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "tgUsername", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "timeOfWork", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "timeToCall", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "minPrice", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "maxPrice", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "msg", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "img", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "userMsgId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "messageId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "addition", void 0);
FindHrVacansy = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: { collection: collections_1.Collections.FIND_HR_VACANSY, timestamps: true }
    })
], FindHrVacansy);
exports.FindHrVacansy = FindHrVacansy;
exports.FindHrVacansyModel = (0, typegoose_1.getModelForClass)(FindHrVacansy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEhyVmFjYW5zeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvZmluZEhyVmFjYW5zeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTRFO0FBQzVFLDREQUF5RDtBQU1sRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFhO0NBeUR6QixDQUFBO0FBeERHO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzs2Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7MkNBQ2hCO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7a0RBQ1k7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7aURBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OytDQUNTO0FBRWhCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsrQ0FDUztBQUVoQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7Z0RBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2dEQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsrQ0FDUztBQXJEUCxhQUFhO0lBSnpCLElBQUEsd0JBQVksRUFBQztRQUNWLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSx5QkFBVyxDQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO0tBQy9FLENBQUM7R0FFVyxhQUFhLENBeUR6QjtBQXpEWSxzQ0FBYTtBQTJEYixRQUFBLGtCQUFrQixHQUFHLElBQUEsNEJBQWdCLEVBQUMsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBtb2RlbE9wdGlvbnMsIHByb3AgfSBmcm9tIFwiQHR5cGVnb29zZS90eXBlZ29vc2VcIjtcclxuaW1wb3J0IHsgQ29sbGVjdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvY29sbGVjdGlvbnNcIjtcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gICAgc2NoZW1hT3B0aW9uczogeyBjb2xsZWN0aW9uOiBDb2xsZWN0aW9ucy5GSU5EX0hSX1ZBQ0FOU1ksIHRpbWVzdGFtcHM6IHRydWUgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRIclZhY2Fuc3kge1xyXG4gICAgQHByb3AoKVxyXG4gICAgdXNlcklkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBkaXJlY3Rpb246IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogJ2ZpbmRIcicgfSlcclxuICAgIHR5cGU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG9mZmljZU5hbWU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRlY2hub2xvZ3k6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHJlc3BvbnNpYmxlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBwbGFjZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcHJpY2U6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRnVXNlcm5hbWU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRpbWVPZldvcms6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRpbWVUb0NhbGw6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG1pblByaWNlOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBtYXhQcmljZTogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbXNnOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBpbWc6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJNc2dJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWVzc2FnZUlkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBhZGRpdGlvbjogc3RyaW5nXHJcblxyXG4gICAgY3JlYXRlZEF0OiBEYXRlXHJcbiAgICB1cGRhdGVkQXQ6IERhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbmRIclZhY2Fuc3lNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoRmluZEhyVmFjYW5zeSk7XHJcbiJdfQ==