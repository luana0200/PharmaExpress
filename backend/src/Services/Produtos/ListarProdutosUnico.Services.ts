import prismaClient from "../../prisma";

interface ListarUnico {
    id: string
}

class ListarProdutosUnicoServices {
    async execute({ id }: ListarUnico) {

        const resposta = await prismaClient.produtos.findFirst({
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

export { ListarProdutosUnicoServices }