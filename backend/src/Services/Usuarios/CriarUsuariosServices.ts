import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface CriarUsuarios {
    name: string
    dateN: string
    cpf_cnpj: string
    email: string
    password: string
}
class CriarUsuariosServices {
    async execute({ name, dateN, cpf_cnpj, email, password }: CriarUsuarios) {

        if (!name || !dateN || !cpf_cnpj || !email || !password) {
            throw new Error('Campos em Branco não são Permitidos')
        }

        const emailCadastrado = await prismaClient.cadastro.findFirst({
            where: {
                email: email
            }
        })

        if (emailCadastrado) {
            throw new Error('Email já Cadastrado!')
        }

        const senhaCrypt = await hash(password, 8)

        await prismaClient.cadastro.create({
            data: {
                name: name,
                dateN: dateN,
                cpf_cnpj: cpf_cnpj,
                email: email,
                password: senhaCrypt,
            }
        })

        return {dados: 'Cadastro Efetuado com Sucesso'}
    }
}

export { CriarUsuariosServices }