import mongoose from 'mongoose';
import { PasswordValidation, UsernameValidation } from './user.data.validation'
import userModel, { User, UserData } from './user.models';


export class UserService{
    async createUser(UserData: User): Promise<{ statusCode: number, message: string }> {
        console.log("a")
        userModel.create(UserData);
        const user = await userModel.create(UserData);
        const url = 'mongodb+srv://alvarolgdeveloper:22461016@to-do.gnk8fmb.mongodb.net/To-Do?retryWrites=true&w=majority'
        
        mongoose.connect(url)
            .then(() => { console.log("Connection established with the database"); })
            .catch(error => { console.error("Failed to connect to database", error); });
        
        let result: { statusCode: number, message: string } = { statusCode: 500, message: "Internal Server Error" };
        userModel.findOne({ username: UserData.username })
            .then(find_user => {
                if (find_user) result = { statusCode: 409, message: "User already exists" };
                else {
                    user.save()
                        .then(() => { console.log("User added to database") })
                        .catch(error => { console.error("Erro   r saving user", error) });
                    result = { statusCode: 201, message: "User created successfully" };
                }
                return result;
            })
            .catch(error => { console.error("Error finding user in database"), error });
        return Promise.resolve(result);
    }

    async validateUserData(user: UserData): Promise<boolean> {
        if(!UsernameValidation(user.username) || !PasswordValidation(user.password))return false;
        return true;
    }
}