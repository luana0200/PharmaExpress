import { Request, Response } from 'express'
import { ListarUsuarioServices } from '../../Services/Usuarios/ListarUsuarioServices'

class ListarUsuariosController {
    async handle(req: Request, res: Response) {
        const listarUsuarioServices = new ListarUsuarioServices()
        const response = await listarUsuarioServices.execute()

        return res.json(response)
    }
}

export { ListarUsuariosController }