import { Request, Response } from 'express'
import { CriarOrderServices } from '../../Services/Order/CriarOrderServices'

class CriarOrderController {
    async handle(req: Request, res: Response) {
        const { table } = req.body
        const criarOrderServices = new CriarOrderServices()
        const response = await criarOrderServices.execute({

            table
        })
        return res.json(response)
    }
}
export { CriarOrderController }