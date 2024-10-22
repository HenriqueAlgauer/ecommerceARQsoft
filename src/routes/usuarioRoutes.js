async function usuarioRoutes(fastify, options) {
    fastify.post('/usuarios', fastify.controllers.usuario.criarUsuario);
    fastify.get('/usuarios', fastify.controllers.usuario.listarUsuarios);
    // Outras rotas: GET /usuarios/:id, PUT /usuarios/:id, DELETE /usuarios/:id
}

module.exports = usuarioRoutes;
