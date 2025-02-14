import {IUser} from "@/models/IUser";

export interface IUserResponseModel {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}