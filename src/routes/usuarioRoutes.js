import { criarUsuario, listarUsuarios } from '../controllers/usuarioController.js';

async function usuarioRoutes(fastify, options) {
    fastify.post('/usuarios', criarUsuario);
    fastify.get('/usuarios', listarUsuarios);
}

export default usuarioRoutes;
