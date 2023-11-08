import prismaClient from '../../prisma'

interface categoryId {
    id: string
}

class ListarProdutosServices {
    async execute() {
        const response = await prismaClient.produtos.findMany()
        return response
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

export { ListarProdutosServices }