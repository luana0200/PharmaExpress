import prismaClient from '../../prisma'

class ListarProdutosServices {
    async execute() {
        const response = await prismaClient.produtos.findMany()
        return response
    }
}

export { ListarProdutosServices }