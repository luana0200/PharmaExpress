import { Request, Response } from 'express'
import { ListarProdutoCarrinhoServices } from '../../Services/Carrinho/ListarProdutoCarrinhoServices'

class ListarProdutoCarrinhoController {

   
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listarProdutoCarrinhoServices = new ListarProdutoCarrinhoServices()
        const response = await listarProdutoCarrinhoServices.execute({
            id
        })
        return res.json(response)
    }
}

export { ListarProdutoCarrinhoController }