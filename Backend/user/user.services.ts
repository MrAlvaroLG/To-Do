import mongoose from 'mongoose';
import {DataValidation} from './user.data.validation'
import userModel, { User, UserData } from './user.models';
import bcrypt from "bcrypt";
const jwt = require('jsonwebtoken')

export class UserService{
    async createUser(UserData: User): Promise<{ statusCode: number, message: string }> {
        try {
            // Hash the password
            UserData.password = await bcrypt.hash(UserData.password, 5);

            // Check if the user already exists
            const existingUser = await userModel.findOne({ username: UserData.username });
            if (existingUser) return { statusCode: 409, message: "User already exists" };
            
            // Create the user
            const user = new userModel(UserData);
            await user.save();
            console.log("User added to database");
            return { statusCode: 201, message: "User created successfully" };
        } catch (error) {
            console.error("Error saving user", error);
            return { statusCode: 500, message: "Internal Server Error" };
        }
    }

    async validateUser(userData: User): Promise<{ statusCode: number; message: string }> {
        try {
            // Check if the user exists
            const user = await userModel.findOne({ username: userData.username });
            if (!user)  return { statusCode: 401, message: 'User does not exist' };
            
            // Check if the password is correct
            const isValidPassword = await bcrypt.compare(userData.password, user.password);
            if (!isValidPassword) return { statusCode: 401, message: 'Invalid password' };
            return { statusCode: 200, message: 'User authenticated successfully' };
        } catch (error) {
            console.error('Error validating credentials:', error);
            return { statusCode: 500, message: 'Internal Server Error' };
        }
    }

    async validateUserData(user: UserData): Promise<boolean> {
        if(DataValidation(user.username, user.password))return true;
        return false;
    }

    async createToken(username: string): Promise<string>{
        const token = jwt.sign({username}, 'secret_key');
        return token;
    }
}