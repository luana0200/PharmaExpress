import {Request, Response} from 'express'
import {ExcluirProdutosServices} from '../../Services/Produtos/ExcluirProdutosServices'


class ExcluirProdutosController{
    async handle( req: Request, res: Response) {
        const { remove } = req.body
        const excluirProdutosServices = new ExcluirProdutosServices
        const produtos = await excluirProdutosServices.execute({ remove })

        return res.json(produtos)
    }

}
 export { ExcluirProdutosController}