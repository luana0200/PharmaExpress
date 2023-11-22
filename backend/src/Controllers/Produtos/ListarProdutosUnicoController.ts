import { Request, Response } from "express";
import { ListarProdutosUnicoServices } from "../../Services/Produtos/ListarProdutosUnico.Services";

class ListarProdutosUnicoController {
    async handle(req: Request, res: Response) {
        const { id, name, value} = req.body
        const listarProdutosUnicoServices = new ListarProdutosUnicoServices()
        const resposta = await listarProdutosUnicoServices.execute({
            id, name, value
        })

        return res.json(resposta)
    }
}


export { ListarProdutosUnicoController }