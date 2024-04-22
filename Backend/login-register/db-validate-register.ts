import express, { response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
const router = express.Router()

const app = express()
const url = 'mongodb+srv://alvarolgdeveloper:22461016@to-do.gnk8fmb.mongodb.net/To-Do?retryWrites=true&w=majority'

app.use(cors())
app.use(bodyParser.json());

mongoose.connect(url)
    .then(() => {console.log("Connection established with the database");})
    .catch(error => {console.error("Failed to connect to database", error);});

const User = new mongoose.Schema({
    username: String,
    password: String,
});

const user = mongoose.model('user', User, 'users');

router.post('/authenticate', function(req, res) { 
    const user_name=req.body.username;
    const user_pass=req.body.password;
    const user_data = new user({
        username: user_name,
        password: user_pass,
    })
    user.findOne({ username : user_name})
        .then(find_user => {
            if(find_user)   res.status(409).send({description: "User Invalid"})
            else{
                user_data.save()
                    .then(() => {console.log("User added to database")})
                    .catch(error =>{console.error("Error saving user", error)});
                    res.status(201).send({description: "User Passed"})
            }
        })
        .catch(error =>{console.error("Error finding user in database"), error});
});

module.exports = router
