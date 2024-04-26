import express, { response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json());

const port = process.env.PORT || 3000

const userResponse = require('./user/user.controllers')

app.use(userResponse)

app.listen(port, () =>{
    console.log("Connection established with the server")
    //http://localhost:3000
})