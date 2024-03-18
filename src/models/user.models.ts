import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlenght: 6
    },
    fullname: {
        type: String,
        require: true,
        minlenght: 3
    }
})

export const User = models.User || model('User', userSchema);