import { Request, Response } from "express";
import { ListarProdutosUnicoServices } from "../../Services/Produtos/ListarProdutosUnico.Services";

class ListarProdutosUnicoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listarProdutosUnicoServices = new ListarProdutosUnicoServices()
        const resposta = await listarProdutosUnicoServices.execute({
            id
        })

        return res.json(resposta)
    }
}


export { ListarProdutosUnicoController }