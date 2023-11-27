import { Request, Response } from 'express'
import { ListarCategoriasUnicoServices } from '../../Services/Categorias/ListarCategoriasUnicoServices'

class ListarCategoriasUnicoController {
    async handle(req: Request, res: Response) {
        const {id}  = req.params
        //console.log(id)
        const listarCategoriasUnicoServices = new ListarCategoriasUnicoServices()
        const resposta = await listarCategoriasUnicoServices.execute({
            id
        })
       return res.json(resposta)
    }
}

export { ListarCategoriasUnicoController }