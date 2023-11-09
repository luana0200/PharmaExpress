import { Request, Response } from 'express'
import { ListarProdutoCarrinhoServices } from '../../Services/Carrinho/ListarProdutoCarrinhoServices'

class ListarProdutoCarrinhoController {

    async handle(req: Request, res: Response) {
        const id = req.produto_id
        const listarProdutoCarrinhoServices = new ListarProdutoCarrinhoServices()
        const resposta = await listarProdutoCarrinhoServices.execute()
        return res.json(resposta)

    }
    // async findByCategory(req: Request, res: Response) {
    //     const { id } = req.params
    //     const listarProdutoCarrinhoServices = new ListarProdutoCarrinhoController()
    //     const response = await listarProdutoCarrinhoServices.findByCategory({
    //         id
    //     })
    //     return res.json(response)
    // }
}

export { ListarProdutoCarrinhoController }