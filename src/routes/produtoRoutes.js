import { criarProduto, listarProdutos } from '../controllers/produtoController.js';

async function produtoRoutes(fastify) {
    fastify.post('/produtos', criarProduto);
    fastify.get('/produtos', listarProdutos);
}

export default produtoRoutes;
