import prismaClient from "../../prisma";

interface CriarCategorias {
    nome: string
}

class CriarCategoriasServices {
    async execute({ nome }: CriarCategorias) {
        const resposta = await prismaClient.categorias.create({
            data: {
                name: nome
            }
        })

        return resposta
    }
}

export { CriarCategoriasServices }