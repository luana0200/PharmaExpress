import prismaClient from "../../prisma";

interface ListarUnico {
    id: string

}

class ListarProdutosUnicoServices {
    async execute({ id }: ListarUnico) {

        const resposta = await prismaClient.produtos.findMany({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                value: true,
                banner:true       
                 }
        })

        return (resposta)

    }
}

export { ListarProdutosUnicoServices }