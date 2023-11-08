import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface AutToken {
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction) {

    const authToken = req.headers.authorization

    if (!authToken) {
        return res.json({ dados: 'Token Inválido' })
    }

    const [, token] = authToken.split('')

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as AutToken
        req.usuario_id = sub
        return next()
    } catch (err) {
        return res.json({ dados: 'Token  Expirado' })
    }
}