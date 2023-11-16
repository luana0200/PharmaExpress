import prismaClient from "../../prisma";

interface IdCategoria {
    categoriaId: string
}

class ListarCategoriasServices {
    async execute({ categoriaId }: IdCategoria) {
        const resposta = await prismaClient.categorias.findFirst({
            where: {
                id: categoriaId
            }
        })
        return resposta
    }

}

export { ListarCategoriasServices }