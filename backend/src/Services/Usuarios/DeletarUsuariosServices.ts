import prismaClient from "../../prisma";

interface DeletarUsers{
    deletar:string
}

class DeletarUsuariosServices{
    async exeute({deletar} : DeletarUsers) {
     await prismaClient.cadastro.delete({
        where:{
            id: deletar
        }
     })
     return { data: 'Usuario Apagado Com Sucesso'}
    }
}
export { DeletarUsuariosServices }