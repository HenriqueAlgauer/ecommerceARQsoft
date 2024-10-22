exports.criarProduto = async (req, reply) => {
    const { nome, descricao, sku, valor, estoque, ativo } = req.body;
    try {
        const produto = await req.server.prisma.produto.create({
            data: { nome, descricao, sku, valor, estoque, ativo },
        });
        reply.send(produto);
    } catch (error) {
        reply.status(500).send(error);
    }
};

exports.listarProdutos = async (req, reply) => {
    try {
        const produtos = await req.server.prisma.produto.findMany();
        reply.send(produtos);
    } catch (error) {
        reply.status(500).send(error);
    }
};

// Outros métodos como atualizarProduto, deletarProduto etc.
