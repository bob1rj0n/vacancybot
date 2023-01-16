export declare class Vacancy {
    userId: number;
    direction: string;
    type: string;
    name: string;
    age: number;
    technology: string;
    tgUsername: string;
    phone: string;
    place: string;
    price: string;
    minSum: number;
    maxSum: number;
    profession: string;
    timeToCall: string;
    goal: string;
    msg: string;
    userMsgId: number;
    messageId: number;
    img: string;
    isDeleted: boolean;
    deletedAt?: Date;
    createdAt?: Date;
    updatedAt: Date;
}
export declare const VacancyModel: import("@typegoose/typegoose").ReturnModelType<typeof Vacancy, import("@typegoose/typegoose/lib/types").BeAnObject>;
