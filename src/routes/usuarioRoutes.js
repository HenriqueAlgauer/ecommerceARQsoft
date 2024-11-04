import { criarUsuario } from '../controllers/usuarioController.js';

async function usuarioRoutes(fastify, options) {
    fastify.post('/usuarios', criarUsuario);
}

export default usuarioRoutes;
