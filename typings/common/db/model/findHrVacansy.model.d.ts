export declare class FindHrVacansy {
    userId: number;
    direction: string;
    type: string;
    officeName: string;
    technology: string;
    responsible: string;
    place: string;
    price: string;
    tgUsername: string;
    timeOfWork: string;
    timeToCall: string;
    minPrice: number;
    maxPrice: number;
    msg: string;
    img: string;
    userMsgId: number;
    messageId: number;
    addition: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const FindHrVacansyModel: import("@typegoose/typegoose").ReturnModelType<typeof FindHrVacansy, import("@typegoose/typegoose/lib/types").BeAnObject>;
