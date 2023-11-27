import prismaClient from '../../prisma'

interface Listar {
    id: string
}
class ListarProdutoCarrinhoServices {
    async execute({ id }: Listar) {

        const resposta = await prismaClient.produtos.findFirst({

            where: {
                id: id,
            },
            select: {
                name: true,
                value:true
            }
        })
        return resposta
    }


}

export { ListarProdutoCarrinhoServices }