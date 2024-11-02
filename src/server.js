import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.decorate('prisma', prisma);

// Importar rotas
import usuarioRoutes from './routes/usuarioRoutes.js';
import financeiroRoutes from './routes/financeiroRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';

fastify.register(usuarioRoutes);
fastify.register(pedidoRoutes);
fastify.register(financeiroRoutes);
fastify.register(produtoRoutes);

// Iniciar o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Servidor rodando na porta 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
