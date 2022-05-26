"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credentials = void 0;
// El diseño de este esquema tiene el objetivo de de hacer como base para la subida y salida de datos a la colección "Prendas"
const mongoose_1 = require("mongoose");
const prendaSchema = new mongoose_1.Schema({
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
}, { versionKey: false });
exports.Credentials = (0, mongoose_1.model)('credentials', prendaSchema);
