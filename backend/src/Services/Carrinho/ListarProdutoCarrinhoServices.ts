import prismaClient from '../../prisma'

interface Listar {
    id: string
}
class ListarProdutoCarrinhoServices {
    async execute({ id }: Listar) {
        const resposta = await prismaClient.produtos.findMany({
            where: {
                id: id
            },
            select: {
                name: true
            }
        })
        return (resposta)
    }


}

export { ListarProdutoCarrinhoServices }