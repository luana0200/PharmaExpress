import prismaClient from "../../prisma";
import { sign } from 'jsonwebtoken'
import { compare } from "bcryptjs";


interface AuthLogin {
    email: string
   senha: string
}

class AuthLoginServices {
    async execute({ email,senha }: AuthLogin) {
        const user = await prismaClient.cadastro.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Usuário/Senha Inconrreto')
        }

        const autenticado = await compare (senha, user.password)

        if(!autenticado) {
            throw new Error('Usuário/Senha Inconrreto')
        }

        // const token = sign(
        //     {

        //     }
        // )
        return {
            id: user.id,
            email: user.email
        }
    }
}

export { AuthLoginServices }
