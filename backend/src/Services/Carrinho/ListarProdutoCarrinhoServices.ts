import prismaClient from '../../prisma'

interface categoryId {
    id: string
}

class ListarProdutoCarrinhoServices {
    async execute() {
        const resposta = await prismaClient.produtos.findMany()
        return resposta
    }

    async findByCategory({ id }: categoryId) {
        const resposta = await prismaClient.produtos.findMany({
            where: {
                categoriaId: id
            },
            select: {
                name: true,
                description: true,
                value: true,
                banner: true,
                id: true
            }

        })
        return (resposta)
    }
}

export { ListarProdutoCarrinhoServices }