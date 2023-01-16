import { getModelForClass, Index, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Collections } from "../../constant/collections";

@modelOptions({
    schemaOptions: {
        collection: Collections.VACANCY,
        timestamps: true
    }
})


export class Vacancy {
    @prop()
    userId: number

    @prop()
    direction: string

    @prop({ default: 'findWork' })
    type: string

    @prop()
    name: string

    @prop()
    age: number

    @prop()
    technology: string

    @prop()
    tgUsername: string

    @prop()
    phone: string

    @prop()
    place: string

    @prop()
    price: string

    @prop()
    minSum: number

    @prop()
    maxSum: number

    @prop()
    profession: string

    @prop()
    timeToCall: string

    @prop()
    goal: string

    @prop({})
    msg: string;

    @prop()
    userMsgId: number

    @prop()
    messageId: number

    @prop({})
    img: string;

    @prop({ default: false })
    isDeleted: boolean;

    @prop({ default: undefined })
    deletedAt?: Date;

    createdAt?: Date;
    updatedAt: Date;
}

export const VacancyModel = getModelForClass(Vacancy);
