export async function criarProduto(req, reply) {
    const { nome, descricao, sku, valor, estoque, ativo } = req.body;
    try {
        const produto = await req.server.prisma.produto.create({
            data: { nome, descricao, sku, valor, estoque, ativo },
        });
        reply.send(produto);
    } catch (error) {
        reply.status(500).send(error);
    }
}

export async function listarProdutos(req, reply) {
    try {
        const produtos = await req.server.prisma.produto.findMany();
        reply.send(produtos);
    } catch (error) {
        reply.status(500).send(error);
    }
}