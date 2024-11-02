async function financeiroRoutes(fastify, options) {
    fastify.get('/financeiro', fastify.controllers.financeiro.listarFinanceiro);
    fastify.post('/financeiro/debito', fastify.controllers.financeiro.cadastrarDebito);
}

export default financeiroRoutes;
