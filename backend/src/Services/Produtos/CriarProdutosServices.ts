import prismaClient from '../../prisma'

interface CriarProdutos {
    nome: string
    preco: string
    fornecedor: string
    quantidade: string
    descricao: string
    banner: string
    categoriasID: string
}

class CriarProdutosServices {
    async execute({ nome, preco, fornecedor, quantidade, descricao, banner, categoriasID }: CriarProdutos) {

        const produtos = await prismaClient.produtos.create({
            data: {
                name: nome,
                value: preco,
                provider: fornecedor,
                quantity: quantidade,
                description: descricao,
                banner: banner,
                categoriaId: categoriasID
            }
        })
        return produtos
    }
}

export { CriarProdutosServices }