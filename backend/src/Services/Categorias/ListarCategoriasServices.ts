import prismaClient from "../../prisma";

interface IdCategoria {
    categoriaId: string
    name: string
}

class ListarCategoriasServices {
    async execute({ categoriaId, name }: IdCategoria) {
        const resposta = await prismaClient.categorias.findFirst({
            where: {
                id: categoriaId,
                name:name
            }
        })
        return resposta
    }

}

export { ListarCategoriasServices }