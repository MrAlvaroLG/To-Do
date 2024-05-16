import express, { Request, Response, Router } from 'express'
import { UserService } from './user.services'
import { UserData } from './user.models'
import cors from 'cors'
import bodyParser from 'body-parser'
const bcrypt = require("bcrypt");

const app = express()


app.use(cors())
app.use(bodyParser.json());

const router = express.Router();


export class UserController {
    private userService: UserService;
    constructor() { this.userService = new UserService(); }
    public async CreateUser(req: Request, res: Response) {
        const user = new UserData(req.body.username, req.body.password);
        if (await this.userService.validateUserData(user)) {
            const result = await this.userService.createUser(user);
            if (result.statusCode === 409) res.status(409).send({ description: "User already exists" });
            else {
                res.status(201).send({ 
                    username: user.username,
                    token: await this.userService.createToken(user.username),
                    description: "User created successfully" 
                });
            }
        } 
        else {res.status(400).send({ description: "Invalid Form" })}
    }

    public async AuthUser(req: Request, res: Response){
        const user = new UserData(req.body.username, req.body.password);
        const result = await this.userService.validateUser(user);
        if(result.statusCode === 200){
            res.status(200).send({
                username: user.username,
                token: await this.userService.createToken(user.username),
                description: "User authenticated successfully"
            });
        }
        else res.status(result.statusCode).send({description: result.message})
    }

    public DeleteUser(req: Request, res: Response) {
        
    }
}

const usercontroller = new UserController();

/*
router.use((req, res, next) => {
    if(req.path === '/register') next()
    if(req.path === '/login')    next()
    else{
        
    }
})
*/

router.post('/register', (req, res) => {
    usercontroller.CreateUser(req, res);
});
router.post('/login', (req,res) =>{
    usercontroller.AuthUser(req,res);
})
router.post('/delete', (req,res) =>{
    usercontroller.DeleteUser(req,res);
})

module.exports = router
