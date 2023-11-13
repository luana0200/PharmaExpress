import prismaClient from "../../prisma";
import { sign } from 'jsonwebtoken'
import { compare } from "bcryptjs";


interface AuthLogin {
    email: string
    senha: string
}

class AuthLoginServices {
    async execute({ email, senha }: AuthLogin) {

        if (!email || !senha) {
            throw new Error('Campos em Branco Não São Permitidos')
        }

        const user = await prismaClient.cadastro.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Usuário/Senha Inconrreto')
        }

        const autenticado = await compare(senha, user.password)

        if (!autenticado) {
            throw new Error('Usuário/Senha Inconrreto')
        }

        //criando token
        const token = sign({
            id: user.id,
            email: user.email
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '2h'
            })
        return {
            id: user.id,
            email: user.email,
            token: token
        }
    }
}

export { AuthLoginServices }
