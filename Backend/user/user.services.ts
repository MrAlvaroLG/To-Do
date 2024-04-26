import mongoose from 'mongoose';
import { PasswordValidation, UsernameValidation } from './user.data.validation'
import userModel, { User, UserData } from './user.models';
import { dbConfig } from './db.config';

export class UserService{
    async createUser(UserData: User): Promise<{ statusCode: number, message: string }> {
        try {
            await mongoose.connect(dbConfig.url);
                console.log("Connection established with the database");

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

    async validateUserData(user: UserData): Promise<boolean> {
        if(!UsernameValidation(user.username) || !PasswordValidation(user.password))return false;
        return true;
    }
}