import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json());

const port = process.env.PORT || 3000

app.post('/auth', function(req, res) {
    console.log(req.body)
    const result = valid_pass(req.body.password);
    if (!result.valid) {
        res.status(400).send(result.message);
    } 
});

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
    //http://localhost:3000
})