import { getModelForClass, Index, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Collections } from "../../constant/collections";

@modelOptions({
    schemaOptions: {
        collection: Collections.USER
    }
})

@Index(
    {
        userId: 1,
    },
    {
        unique: true,
        background: true,
        name: "userId",
        partialFilterExpression: { isDeleted: { $eq: false } }
    }
)

export class User {
    @prop({})
    userId: number;

    @prop()
    isBot: boolean

    @prop()
    firstName: string;

    @prop()
    userName: string;

    @prop()
    phoneNumber: string;

    @prop()
    language: string;

    @prop({ default: false })
    isDeleted: boolean;

    @prop({ default: false })
    isAdmin: boolean

    @prop({ default: undefined })
    deletedAt?: Date;

    createdAt?: Date;
    updatedAt: Date;
}

export const UserModel = getModelForClass(User);
