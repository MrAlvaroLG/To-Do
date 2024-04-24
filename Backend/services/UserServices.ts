import { User } from '../models/user'
import { PasswordValidation, UsernameValidation } from './UserDataValidation'

export class UserService{
    async validateUserData(user: User): Promise<boolean>{
        if(!UsernameValidation(user.name) || !PasswordValidation(user.password))return false;
        return true;
    }

    async createUser(user: User): Promise<boolean>{
        return true;
    }
}