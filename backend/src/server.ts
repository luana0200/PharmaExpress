import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'
import path from 'path'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

app.use(
        '/file',
        express.static(path.resolve(__dirname, '..', 'tmp'))
    )
    

    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'Erro',
        message: 'Erro Interno do Servidor'

    })
})


app.listen(3334, () => console.log('Servidor rodando na porta 3334'))
