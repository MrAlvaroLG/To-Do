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
            /* Hash password */
            const hash = bcrypt.hashSync(user.password, 5);
            user.password=hash
            /*______________ */
            const result = await this.userService.createUser(user);
            if (result.statusCode === 409) res.status(409).send({ description: "User already exists" });
            else res.status(201).send({ description: "User created successfully" });
        } 
        else {res.status(400).send({ description: "Invalid Form" })}
    }

    public DeleteUser(req: Request, res: Response) {

    }
}

const usercontroller = new UserController();

router.post('/authenticate', (req, res) => {
    usercontroller.CreateUser(req, res);
});
router.get('/deleteuser', usercontroller.DeleteUser)

module.exports = router