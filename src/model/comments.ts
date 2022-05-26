// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Prendas"
import {Schema, model } from 'mongoose'

const commentSchema = new Schema({
    usuario: {
        type: String
    },
    movieId: {
        type: String
    },
    comment: {
        type: String
    },
    value: {
        type: Number
    }

},{ versionKey: false })

export type iComment = {
    usuario: string | null,
    movieId: number | null,
    comment: string | null,
    value: number | null
    }


    export const Comments = model('comments', commentSchema)