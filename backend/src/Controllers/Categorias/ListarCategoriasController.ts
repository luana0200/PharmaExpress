import { Request, Response } from 'express'
import { ListarCategoriasServices } from '../../Services/Categorias/ListarCategoriasServices'


class ListarCategoriasController {
    async handle(req: Request, res: Response) {
        const listarCategoriasServices = new ListarCategoriasServices()
        const response = await listarCategoriasServices.execute()

        return res.json(response)
    }

//      async findCategoryName(req: Request, res: Response) {
//          const {categoriaId} = req.params
//          const listarCategoriasServices = new ListarCategoriasServices()
//          const response = await listarCategoriasServices.findCategoryName({categoriaId})

//          return res.json(response)
//      }
 }

export { ListarCategoriasController }