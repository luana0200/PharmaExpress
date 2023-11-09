import prismaClient from "../../prisma";

interface TokenId {
    id: string
}
class ListarUsuarioTokenServices {
    async execute({ id }: TokenId) {
        const resposta = await prismaClient.cadastro.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return resposta
    }
}

export { ListarUsuarioTokenServices }