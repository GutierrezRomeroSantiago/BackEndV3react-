import { Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Comments } from '../model/comments'
import { Credentials } from '../model/users'


class Routes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }
    //Obtenemos todos los usuarios de la API con el fin de vlidar el login
    private getUsers = async (req: Request, res: Response) => {
        await db.conectarBD()
            .then(async () => {
                const query = await Credentials.find({ })
                res.json(query)
                console.log(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })
        await db.desconectarBD()
    }
    //Validación para el inicio de sesión en la aplicación
    private logUser = async (req: Request, res: Response) => {
        await db.conectarBD()
        console.log(req.body.username)
            let data = await Credentials.findOne({
                username: req.body.username,
                password: req.body.password
            })

            res.send(data)
        // .then(async () => {
        //     const j = await Credentials.find({})
        //     console.log(j)
        // })
        // .catch((mensaje) => {
        //     res.send(mensaje)
        // })
        await db.desconectarBD()
    }
    //Posteamos la información referente al usuario. La validación del usuario se realiza en el frontend.
    private postUser = async (req: Request, res: Response) => {
        const { username, password, nombre } = req.body
        await db.conectarBD()
        const dSchema = {
            _id_user: 10,
            username: username,
            password: password,
            nombre: nombre,
        }
        const oSchema = new Credentials(dSchema)
        console.log(oSchema)
        await oSchema.save()
            .then((doc: any) => res.send(doc))
            .catch((err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }
    //Recibimos el id de la pelicula, el id del usuario y el comentario realizado por el usuario
    private postComment = async (req: Request, res: Response) => {
        const { usuario, movieId, comment, value } = req.body
        console.log(req.body)
        await db.conectarBD()
        const dSchema = {
            usuario: usuario,
            movieId: movieId,
            comment: comment,
            value: value
        }
        const oSchema = new Comments(dSchema)
        console.log(oSchema)
        await oSchema.save()
            .then((doc: any) => res.send(doc))
            .catch((err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }

    //Recibir los comentarios de la pelicula
        private getComenta = async (req: Request, res: Response) => {
            const { movieId } = req.params
            console.log(req.params)
            await db.conectarBD()
                .then(async () => {
                    const query = await Comments.find({
                        movieId: movieId
                     })
                    res.json(query)
                    //console.log(query)
                })
                .catch((mensaje) => {
                    res.send(mensaje)
                })
            await db.desconectarBD()
        }

    misRutas() {
        //USUARIOS
        this._router.get('/user', this.getUsers)
        this._router.post('/credentials', this.logUser)
        this._router.post('/registrar', this.postUser)
        this._router.post('/comentario', this.postComment)
        this._router.get('/comenta/:movieId', this.getComenta)
    }

}

const obj = new Routes()
obj.misRutas()
export const routes = obj.router

