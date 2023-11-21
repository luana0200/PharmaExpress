import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

import { isAutenticado } from './middleware/isAutenticado'

//Criar
import { CriarUsuariosController } from './Controllers/Usuarios/CriarUsuariosController'
import { AuthLoginController } from './Controllers/Login/AuthLoginController'
import { CriarCategoriasController } from './Controllers/Categorias/CriarCategoriasController'
import { CriarProdutosController } from './Controllers/Produtos/CriarProdutosController'
// import { CriarCarrinhoController } from './Controllers/Carrinho/CriarCarrinhoController'
import { CriarOrderController } from './Controllers/Order/CriarOrderController'

//Listar
import { ListarUsuariosTokenController } from './Controllers/Usuarios/ListarUsuarioController'
import { ListarProdutosController } from './Controllers/Produtos/ListarProdutosController'
import { ListarCategoriasController } from './Controllers/Categorias/ListarCategoriasController'
import { ListarCategoriasUnicoController } from './Controllers/Categorias/ListarCategoriasUnicoController'
import { ListarProdutoCarrinhoController } from './Controllers/Carrinho/ListarProdutoCarrinhoController'

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
router.get('/ListarCategoriasUnico', new ListarCategoriasUnicoController().handle)


//produtos
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarPdtUnico/${id}', new ListarProdutosUnicoController().handle)
// router.get('/categoryName/:id', new ListarCategoriasController().findCategoryName)

//carrinho
// router.post('/CriarCarrinho', new CriarCarrinhoController().handle)
router.get('/ListarCarrinho/${id}', new ListarProdutoCarrinhoController().handle)

//order
router.post('/CriarOrder', new CriarOrderController().handle)


export { router }

