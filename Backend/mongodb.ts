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
    .then(() => {
    console.log('Conexión establecida con la base de datos.');
    })
    .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
    });

const User = new mongoose.Schema({
    username: String,
    password: String,
});

const user = mongoose.model('user', User, 'users');

router.post('/register', function(req, res) { 
    const user_name=req.body.username;
    const user_pass=req.body.password;
    const user_data = new user({
        username: user_name,
        password: user_pass,
    })
    user.findOne({ username : user_name})
        .then(find_user => {
            if(find_user){res.send({message: "User already exists"})} 
            else{
                user_data.save()
                    .then(saved_user => {console.log("User saved successfully")})
                    .catch(error =>{console.log("Error saving user")});
                res.send({message: "User created successfully"})
            }
        })
        .catch(error =>{console.log("Error finding user in database")});
});

module.exports = router
