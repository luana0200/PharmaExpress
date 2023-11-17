import prismaClient from '../../prisma'


class CriarOrderServices {
    async execute({ table }) {
        const resposta = await prismaClient.order.create({
            data: {
                table: table
            }
        })
        return resposta
    }
}

export { CriarOrderServices }