import mongoose from 'mongoose';
import {DataValidation} from './user.data.validation'
import userModel, { User, UserData } from './user.models';
const bcrypt = require("bcrypt");

export class UserService{
    async createUser(UserData: User): Promise<{ statusCode: number, message: string }> {
        try {
            const existingUser = await userModel.findOne({ username: UserData.username });
                if (existingUser) return { statusCode: 409, message: "User already exists" };

            const user = new userModel(UserData);
                await user.save();
                console.log("User added to database");
                return { statusCode: 201, message: "User created successfully" };

        } catch (error) {
            console.error("Error saving user", error);
            return { statusCode: 500, message: "Internal Server Error" };
        }
    }

    async ValidateCredentials(UserData: User): Promise<{ statusCode: number, message: string }> {
        console.log(UserData.username)
        console.log(UserData.password)
        try {
            const userCredentials = await userModel.findOne({username: UserData.username})
            const passCredentials = await bcrypt.compare(UserData.password, userCredentials?.password)
            if(userCredentials && passCredentials) return {statusCode: 200, message: "User Authenticated"}
            return {statusCode: 401, message: "Unauthorized User"}
        } catch(error){
            console.error("Error validating credentials", error);
            return { statusCode: 500, message: "Internal Server Error" };
        }
    }

    async validateUserData(user: UserData): Promise<boolean> {
        if(DataValidation(user.username, user.password))return true;
        return false;
    }
}