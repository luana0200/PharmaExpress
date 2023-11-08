import { Request, Response } from "express";
import { CriarProdutosServices } from "../../Services/Produtos/CriarProdutosServices";

class CriarProdutosController {
    async handle(req: Request, res: Response) {
        const { nome, preco, fornecedor, quantidade, descricao, categoriasID } = req.body

        if (!req.file) {
            throw new Error('Imagem com Problemas')
        } else {
            const { originalname, filename: banner } = req.file

            const criarProdutosServices = new CriarProdutosServices()
            
            const resposta = await criarProdutosServices.execute({

                nome,
                preco,
                fornecedor,
                quantidade,
                descricao,
                banner,
                categoriasID

            })
            return res.json(resposta)
        }


    }
}

export { CriarProdutosController }