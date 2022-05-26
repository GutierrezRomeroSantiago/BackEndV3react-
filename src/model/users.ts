// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Prendas"
import {Schema, model } from 'mongoose'

const prendaSchema = new Schema({
    _id_user: {
        type: Number
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    nombre: {
        type: String
    }

},{ versionKey: false })

export type iPrenda = {
    _id_user: number | null,
    username: string | null,
    password: string | null,
    nombre: string | null
    }


    export const Credentials = model('credentials', prendaSchema)