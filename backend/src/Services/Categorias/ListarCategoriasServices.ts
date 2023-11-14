import prismaClient from "../../prisma";

interface IdCategoria {
    categoriaId : string
}

class ListarCategoriasServices {
    async execute() {
        const resposta = await prismaClient.categorias.findMany()
        return resposta
    }

    async findCategoryName( {categoriaId} : IdCategoria) {
        const resposta = await prismaClient.categorias.findFirst({
            where: {
                id : categoriaId
            },
            select: {
                name: true,
            }
        })
    }
}

export { ListarCategoriasServices }