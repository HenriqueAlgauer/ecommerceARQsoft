async function pedidoRoutes(fastify, options) {
    fastify.post('/pedidos', fastify.controllers.pedido.criarPedido);
    // Outras rotas: GET /pedidos, GET /pedidos/:id
}

export default pedidoRoutes;
