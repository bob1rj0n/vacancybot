export declare class User {
    userId: number;
    isBot: boolean;
    firstName: string;
    userName: string;
    phoneNumber: string;
    language: string;
    isDeleted: boolean;
    isAdmin: boolean;
    deletedAt?: Date;
    createdAt?: Date;
    updatedAt: Date;
}
export declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
