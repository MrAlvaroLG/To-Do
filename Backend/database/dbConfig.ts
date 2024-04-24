import mongoose from 'mongoose'

export const dbConfig = {
    url: 'mongodb+srv://alvarolgdeveloper:22461016@to-do.gnk8fmb.mongodb.net/To-Do?retryWrites=true&w=majority',
    user: 'alvarolgdeveloper',
    password: '22461016',
    database: 'To-Do',
}

export const User = new mongoose.Schema({
    username: String,
    password: String,
});
