import { Request,Response } from "express";
import { DeletarUsuariosServices } from "../../Services/Usuarios/DeletarUsuariosServices";

class DeletarUsuariosController{
    async handle(req: Request, res: Response) {
        const { deletar } = req.body
        const deletarUsuariosServces = new DeletarUsuariosServices()
        const response = await deletarUsuariosServces.exeute({deletar})
        return res.json (response)
    }
}

export{ DeletarUsuariosController}
