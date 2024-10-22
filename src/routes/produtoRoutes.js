async function produtoRoutes(fastify, options) {
    fastify.post('/produtos', fastify.controllers.produto.criarProduto);
    fastify.get('/produtos', fastify.controllers.produto.listarProdutos);
    // Outras rotas
}

module.exports = produtoRoutes;
