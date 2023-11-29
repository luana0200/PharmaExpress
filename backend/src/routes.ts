import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'
import { isAutenticado } from './middleware/isAutenticado'

//Criar
import { CriarUsuariosController } from './Controllers/Usuarios/CriarUsuariosController'
import { AuthLoginController } from './Controllers/Login/AuthLoginController'
import { CriarCategoriasController } from './Controllers/Categorias/CriarCategoriasController'
import { CriarProdutosController } from './Controllers/Produtos/CriarProdutosController'

//Listar
import { ListarUsuariosTokenController } from './Controllers/Usuarios/ListarUsuarioController'
import { ListarProdutosController } from './Controllers/Produtos/ListarProdutosController'
import { ListarCategoriasController } from './Controllers/Categorias/ListarCategoriasController'
import { ListarCategoriasUnicoController } from './Controllers/Categorias/ListarCategoriasUnicoController'

//Deletar
import { DeletarUsuariosController } from './Controllers/Usuarios/DeletarUsuariosController'
import { ListarProdutosUnicoController } from './Controllers/Produtos/ListarProdutosUnicoController'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//usuarios
router.post('/CriarUsuarios', new CriarUsuariosController().handle)
router.get('/ListarUsuariosToken', isAutenticado, new ListarUsuariosTokenController().handle)
router.post('/Login', new AuthLoginController().handle)

//delete
router.delete('/DeletarUsuarios', new DeletarUsuariosController().handle)

//categorias
router.post('/CriarCategorias', new CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)
router.get('/ListarCategoriasUnico/:id', new ListarCategoriasUnicoController().handle)

//produtos
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarPdtUnico', new ListarProdutosUnicoController().handle)

export { router }

