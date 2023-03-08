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
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "hashtegs", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "vacancyType", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjYW5jeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLDREQUF5RDtBQVVsRCxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQU87Q0F3RW5CLENBQUE7QUF2RUc7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3VDQUNPO0FBRWQ7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDOztxQ0FDbEI7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7cUNBQ0s7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7b0NBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzJDQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsyQ0FDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3FDQUNLO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzswQ0FDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt5Q0FDUztBQUVoQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7NENBQ1k7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7OzBDQUNOO0FBRW5CO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO3NDQUNqQixJQUFJOzBDQUFDO0FBcEVSLE9BQU87SUFSbkIsSUFBQSx3QkFBWSxFQUFDO1FBQ1YsYUFBYSxFQUFFO1lBQ1gsVUFBVSxFQUFFLHlCQUFXLENBQUMsT0FBTztZQUMvQixVQUFVLEVBQUUsSUFBSTtTQUNuQjtLQUNKLENBQUM7R0FHVyxPQUFPLENBd0VuQjtBQXhFWSwwQkFBTztBQTBFUCxRQUFBLFlBQVksR0FBRyxJQUFBLDRCQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgSW5kZXgsIG1vZGVsT3B0aW9ucywgcHJvcCwgUmVmIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xuXG5AbW9kZWxPcHRpb25zKHtcbiAgICBzY2hlbWFPcHRpb25zOiB7XG4gICAgICAgIGNvbGxlY3Rpb246IENvbGxlY3Rpb25zLlZBQ0FOQ1ksXG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWVcbiAgICB9XG59KVxuXG5cbmV4cG9ydCBjbGFzcyBWYWNhbmN5IHtcbiAgICBAcHJvcCgpXG4gICAgdXNlcklkOiBudW1iZXJcblxuICAgIEBwcm9wKClcbiAgICBkaXJlY3Rpb246IHN0cmluZ1xuXG4gICAgQHByb3AoeyBkZWZhdWx0OiAnZmluZFdvcmsnIH0pXG4gICAgdHlwZTogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgbmFtZTogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgYWdlOiBudW1iZXJcblxuICAgIEBwcm9wKClcbiAgICB0ZWNobm9sb2d5OiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICB0Z1VzZXJuYW1lOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICBwaG9uZTogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgcGxhY2U6IHN0cmluZ1xuXG4gICAgQHByb3AoKVxuICAgIHByaWNlOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICBtaW5TdW06IG51bWJlclxuXG4gICAgQHByb3AoKVxuICAgIG1heFN1bTogbnVtYmVyXG5cbiAgICBAcHJvcCgpXG4gICAgcHJvZmVzc2lvbjogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgdGltZVRvQ2FsbDogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgZ29hbDogc3RyaW5nXG5cbiAgICBAcHJvcCh7fSlcbiAgICBtc2c6IHN0cmluZztcblxuICAgIEBwcm9wKClcbiAgICB1c2VyTXNnSWQ6IG51bWJlclxuXG4gICAgQHByb3AoKVxuICAgIG1lc3NhZ2VJZDogbnVtYmVyXG5cbiAgICBAcHJvcCh7fSlcbiAgICBpbWc6IHN0cmluZztcblxuICAgIEBwcm9wKClcbiAgICBoYXNodGVnczogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgdmFjYW5jeVR5cGU6IHN0cmluZ1xuXG4gICAgQHByb3AoeyBkZWZhdWx0OiBmYWxzZSB9KVxuICAgIGlzRGVsZXRlZDogYm9vbGVhbjtcblxuICAgIEBwcm9wKHsgZGVmYXVsdDogdW5kZWZpbmVkIH0pXG4gICAgZGVsZXRlZEF0PzogRGF0ZTtcblxuICAgIGNyZWF0ZWRBdD86IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgY29uc3QgVmFjYW5jeU1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhWYWNhbmN5KTtcbiJdfQ==