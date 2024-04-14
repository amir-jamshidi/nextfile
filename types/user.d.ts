import { Document } from "mongoose";

export interface IUser extends Document {
    profile: string
    phone: string,
    email: string,
    fullname: string,
    role: string,
}   