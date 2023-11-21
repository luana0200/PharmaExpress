import prismaClient from "../../prisma";

interface IDCategoria {
    id: string
}

class ListarCategoriasUnicoServices {
    async execute({ id }: IDCategoria) {
        const resposta = await prismaClient.produtos.findMany({
            where: {
                categoriaId: id
            }
        })
        return resposta
    }

}

export { ListarCategoriasUnicoServices }