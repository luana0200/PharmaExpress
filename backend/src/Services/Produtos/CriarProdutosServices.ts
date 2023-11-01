import prismaClient from '../../prisma'

interface CriarProdutos {
    nome: string
    preco: string
    fornecedor: string
    quantidade: string
    descricao: string
    banner: string
    categoriasId: string
}
  
class CriarProdutosServices {
    async execute({ nome, preco, fornecedor, quantidade, descricao,  banner, categoriasId }: CriarProdutos) {
 
        const produtos = await prismaClient.produtos.create({
            data: {
                name: nome,
                value: preco,
                provider: fornecedor,
                quantity: quantidade,
                description: descricao,
                banner: banner,
                categoriaId: categoriasId
            }
        })
        return produtos
    }
}

export { CriarProdutosServices }