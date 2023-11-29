import prismaClient from "../../prisma";

interface ApagarProdutos{
    remove: string
}

class ExcluirProdutosServices{
    async execute({ remove } : ApagarProdutos){
        await prismaClient.produtos.delete({

            where:{
                id: remove
            }
        })
    }
}

export {ExcluirProdutosServices }