import prismaClient from '../../prisma'

class ListarProdutoCarrinhoServices {
    async execute() {
        const resposta = await prismaClient.produtos.findMany()
        console.log(resposta)
    }


}

export { ListarProdutoCarrinhoServices }