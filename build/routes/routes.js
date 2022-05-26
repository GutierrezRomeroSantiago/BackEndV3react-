"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const comments_1 = require("../model/comments");
const users_1 = require("../model/users");
class Routes {
    constructor() {
        //Obtenemos todos los usuarios de la API con el fin de vlidar el login
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield users_1.Credentials.find({});
                res.json(query);
                console.log(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        //Validación para el inicio de sesión en la aplicación
        this.logUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            console.log(req.body.username);
            let data = yield users_1.Credentials.findOne({
                username: req.body.username,
                password: req.body.password
            });
            res.send(data);
            // .then(async () => {
            //     const j = await Credentials.find({})
            //     console.log(j)
            // })
            // .catch((mensaje) => {
            //     res.send(mensaje)
            // })
            yield database_1.db.desconectarBD();
        });
        //Posteamos la información referente al usuario. La validación del usuario se realiza en el frontend.
        this.postUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password, nombre } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _id_user: 10,
                username: username,
                password: password,
                nombre: nombre,
            };
            const oSchema = new users_1.Credentials(dSchema);
            console.log(oSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Recibimos el id de la pelicula, el id del usuario y el comentario realizado por el usuario
        this.postComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { usuario, movieId, comment, value } = req.body;
            console.log(req.body);
            yield database_1.db.conectarBD();
            const dSchema = {
                usuario: usuario,
                movieId: movieId,
                comment: comment,
                value: value
            };
            const oSchema = new comments_1.Comments(dSchema);
            console.log(oSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Recibir los comentarios de la pelicula
        this.getComenta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { movieId } = req.params;
            console.log(req.params);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                const query = yield comments_1.Comments.find({
                    movieId: movieId
                });
                res.json(query);
                //console.log(query)
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        //USUARIOS
        this._router.get('/user', this.getUsers);
        this._router.post('/credentials', this.logUser);
        this._router.post('/registrar', this.postUser);
        this._router.post('/comentario', this.postComment);
        this._router.get('/comenta/:movieId', this.getComenta);
    }
}
const obj = new Routes();
obj.misRutas();
exports.routes = obj.router;
