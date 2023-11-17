import prismaClient from '../../prisma'

interface CriarCarrinho {
    id: string
    n_pedido: number
    order_id: string
    produtos_id: string
}

class CriarCarrinhoServices {
    async execute({ id, n_pedido, order_id, produtos_id}: CriarCarrinho) {
        const response = await prismaClient.carrinho.create({
            data: {
                id: id,
                n_pedido:n_pedido,
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