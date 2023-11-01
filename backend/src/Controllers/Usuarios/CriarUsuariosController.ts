import { Request, Response } from 'express'
import { CriarUsuariosServices } from '../../Services/Usuarios/CriarUsuariosServices'

class CriarUsuariosController {
    async handle(req: Request, res: Response) {
        const { name, dateN, cpf_cnpj, email, password } = req.body

        const criarUsuariosServices = new CriarUsuariosServices()
        const response = await criarUsuariosServices.execute({
            name,
            dateN,
            cpf_cnpj,
            email,
            password
        })

        return res.json(response)
    }
}

export { CriarUsuariosController }