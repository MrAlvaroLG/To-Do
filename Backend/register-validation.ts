import express, { response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json());

const port = process.env.PORT || 3000
const mongoose = require('./mongodb')

app.post('/auth', function(req, res) {
    const result_pass = valid_pass(req.body.password);
    const result_user = valid_user(req.body.username);
    res.status(400).send({result_user, result_pass});
});

app.use(mongoose)

function valid_user(username:string){
    if (!/[a-z]/.test(username)) {
        return { valid: false, message: 'Username must contain at least one lowercase letter' };
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(username)) {
        return { valid: false, message: 'Username must not contain any symbols' };
    }
    return { valid: true, message: 'Username is valid' };
}

function valid_pass(pass:string){
    if (pass.length < 8) {
        return { valid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!/[a-z]/.test(pass)) {
        return { valid: false, message: 'Password must contain at least one lowercase letter' };
    }
    if (!/[A-Z]/.test(pass)) {
        return { valid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/[0-9]/.test(pass)) {
        return { valid: false, message: 'Password must contain at least one number' };
    }
    return { valid: true, message: 'Password is valid' };
}

app.listen(port, () =>{
    console.log("server andando")
    //http://localhost:3000
})