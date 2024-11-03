import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';
import { fileURLToPath } from 'url';
import path from 'path';

// Instancia o Fastify
const fastify = Fastify({ logger: true });

// Instancia o Prisma Client
const prisma = new PrismaClient();

// Decora o Fastify com o Prisma Client
fastify.decorate('prisma', prisma);

// Configura o CORS
fastify.register(cors, {
  origin: '*', // Permite todas as origens. Em produção, especifique o domínio do frontend.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

// Importa as rotas
import usuarioRoutes from './routes/usuarioRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import financeiroRoutes from './routes/financeiroRoutes.js';

// Registra as rotas sem prefixo
fastify.register(usuarioRoutes);
fastify.register(produtoRoutes);
fastify.register(pedidoRoutes);
fastify.register(financeiroRoutes);

// Inicia o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3333 });
    console.log('Servidor rodando na porta 3333');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();