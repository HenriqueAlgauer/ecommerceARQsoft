import { criarPedido } from '../controllers/pedidoController.js';

async function pedidoRoutes(fastify) {
    fastify.post('/pedidos', criarPedido);
}

export default pedidoRoutes;
