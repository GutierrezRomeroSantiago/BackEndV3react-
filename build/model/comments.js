"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Prendas"
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
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
}, { versionKey: false });
exports.Comments = (0, mongoose_1.model)('comments', commentSchema);
