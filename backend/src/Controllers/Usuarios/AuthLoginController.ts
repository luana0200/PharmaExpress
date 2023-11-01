import { Request, Response } from 'express'
import { AuthLoginServices } from '../../Services/Usuarios/AuthLoginServices'

class AuthLoginController {
    async handle(req: Request, res: Response) {

        const { email, senha } = req.body
        const authLoginServices = new AuthLoginServices()
        const response = await authLoginServices.execute({
            email,
            senha
        })

        return res.json(response)
    }
}

export { AuthLoginController }
