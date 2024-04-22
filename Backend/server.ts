import express, { response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json());

const port = process.env.PORT || 3000

const db_response = require('./login-register/db-validate-register')

app.use(db_response)

app.listen(port, () =>{
    console.log("Connection established with the server")
    //http://localhost:3000
})