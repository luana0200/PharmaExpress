import prismaClient from "../../prisma";

class ListarUsuarioServices {
    async execute() {
        const resposta = await prismaClient.cadastro.findMany()

        return (resposta)
    }
}

export { ListarUsuarioServices }