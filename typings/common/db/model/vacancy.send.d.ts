export declare class VacancySend {
    msg: string;
    img: string;
    chatId: number;
    isDeleted: boolean;
    deletedAt?: Date;
    createdAt?: Date;
    updatedAt: Date;
}
export declare const VacancySendModel: import("@typegoose/typegoose").ReturnModelType<typeof VacancySend, import("@typegoose/typegoose/lib/types").BeAnObject>;
