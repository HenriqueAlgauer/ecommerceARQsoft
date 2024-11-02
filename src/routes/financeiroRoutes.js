import { listarFinanceiro, cadastrarDebito } from '../controllers/financeiroController.js';

async function financeiroRoutes(fastify, options) {
    fastify.get('/financeiro', listarFinanceiro);
    fastify.post('/financeiro/debito', cadastrarDebito);
}

export default financeiroRoutes;
