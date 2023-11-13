import prismaClient from '../../prisma'

interface CriarCarrinho {
    id: string
}

class CriarCarrinhoServices {
    async execute({ id }: CriarCarrinho) {
        const response = await prismaClient.carrinho.create({
            data: {
                id: id,
            },
            select:{
                id: true
            }
        })

        return response
    }
}

export { CriarCarrinhoServices }