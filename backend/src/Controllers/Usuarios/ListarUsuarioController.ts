import { Request, Response } from 'express'
import { ListarUsuarioTokenServices } from '../../Services/Usuarios/ListarUsuarioServices'

class ListarUsuariosTokenController {
    async handle(req: Request, res: Response) {
        const id = req.usuario_id
        const listarUsuarioTokenServices = new ListarUsuarioTokenServices()
        const response = await listarUsuarioTokenServices.execute({
            id
        })

        return res.json(response)
    }
}

export { ListarUsuariosTokenController }