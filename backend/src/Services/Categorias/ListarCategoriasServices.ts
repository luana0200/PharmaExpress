import prismaClient from "../../prisma";

interface IdCategoria {
    id: string
}

class ListarCategoriasServices {
    async execute() {
        const resposta = await prismaClient.categorias.findMany()
        return resposta
    }

    async findCategoryName( {id} : IdCategoria) {
        const resposta = await prismaClient.categorias.findFirst({
            where: {
                id: id
            },
            select: {
                name: true,
            }
        })
    }
}

export { ListarCategoriasServices }