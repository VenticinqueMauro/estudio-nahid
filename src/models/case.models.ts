import { Schema, model, models } from "mongoose";

const caseSchema = new Schema({
    dni: {
        type: String,
        required: true,
        unique: true,
        maxlength: [8, 'Excediste la cantidad de caracteres permitidos en el campo DNI'],
    },    
    stage: {
        type: Number,
        required: true,
        min: 1,
        max: 14
    },
    stageMessage: {
        title:{
            type: String,
        },
        message: {
            type: String
        }
    },
    observation: {
        type: String,
        minlength: 3
    }
})

export const Case = models.Case || model('Case', caseSchema);