import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Collections } from "../../constant/collections";

@modelOptions({
    schemaOptions: { collection: Collections.FIND_HR_VACANSY, timestamps: true }
})

export class FindHrVacansy {
    @prop()
    userId: number

    @prop()
    direction: string

    @prop({ default: 'findHr' })
    type: string

    @prop()
    officeName: string

    @prop()
    technology: string

    @prop()
    responsible: string

    @prop()
    place: string

    @prop()
    price: string

    @prop()
    tgUsername: string

    @prop()
    timeOfWork: string

    @prop()
    timeToCall: string

    @prop()
    minPrice: number

    @prop()
    maxPrice: number

    @prop()
    msg: string

    @prop()
    img: string

    @prop()
    hashtegs: string

    @prop()
    userMsgId: number

    @prop()
    messageId: number

    @prop()
    addition: string

    @prop({ default: null })
    link: string

    createdAt: Date
    updatedAt: Date
}

export const FindHrVacansyModel = getModelForClass(FindHrVacansy);
