import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Criar
import { CriarUsuariosController } from './Controllers/Usuarios/CriarUsuariosController'
import { AuthLoginController } from './Controllers/Usuarios/AuthLoginController'
import { CriarCategoriasController } from './Controllers/Categorias/CriarCategoriasController'
import { CriarProdutosController } from './Controllers/Produtos/CriarProdutosController'

//Listar
import { ListarUsuariosController } from './Controllers/Usuarios/ListarUsuarioController'
import { ListarProdutosController } from './Controllers/Produtos/ListarProdutosController'
import { ListarCategoriasController } from './Controllers/Categorias/ListarCategoriasController'

//Deletar
import { DeletarUsuariosController } from './Controllers/Usuarios/DeletarUsuariosController'
import { ListarProdutosUnicoController } from './Controllers/Produtos/ListarProdutosUnicoController'


const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//usuarios
router.post('/CriarUsuarios', new CriarUsuariosController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)
router.post('/Login', new AuthLoginController().handle)

//delete
router.delete('/DeletarUsuarios', new DeletarUsuariosController().handle)

//categorias
router.post('/CriarCategorias', new CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)
router.get('/categoryName/:id', new ListarCategoriasController().findCategoryName)

//produtos
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarPdtUnico/:id', new ListarProdutosUnicoController().handle)
router.get('/ListarProdutos/:id', new ListarProdutosController().handle)


export { router }

