import prismaClient from "../../prisma";

interface ListarUnico {
    id: string
    name: string
    value: string
}

class ListarProdutosUnicoServices {
    async execute({ id, name, value }: ListarUnico) {

        const resposta = await prismaClient.produtos.findFirst({
            where: {
                id: id,
                name:name,
                value:value
            },
            select: {
                name: true
            }
        })

        return (resposta)

    }
}

export { ListarProdutosUnicoServices }