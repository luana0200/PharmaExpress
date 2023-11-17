import prismaClient from '../../prisma'

interface CriarCarrinho {
    id: string
    numero: string
    order_id: string
    produtos_id: string
}

class CriarCarrinhoServices {
    async execute({ id, numero, order_id, produtos_id}: CriarCarrinho) {
        const response = await prismaClient.carrinho.create({
            data: {
                id: id,
                numero:numero,
                order_id: order_id,
                produtos_id:produtos_id
            },
            select: {
                id: true
            }
        })

        console.log(response)
    }
}

export { CriarCarrinhoServices }