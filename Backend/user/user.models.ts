import { Document, model, Schema} from "mongoose";
import { dbConfig } from "./db.config";

export class User {
    username: string = "";
    password: string = "";

}

export class UserData{
    username: string;
    password: string;
    constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }
}

export const UserSchema = new Schema<User & Document>({
    username: String,
    password: String,
});

export default model<User & Document>('User', UserSchema, dbConfig.UserDataCollection);

