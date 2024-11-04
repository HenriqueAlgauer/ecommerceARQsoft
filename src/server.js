import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';
import authRoutes from './routes/authRoutes.js'; 
import usuarioRoutes from './routes/usuarioRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import financeiroRoutes from './routes/financeiroRoutes.js';

const fastify = Fastify({ logger: true });

const prisma = new PrismaClient();


fastify.decorate('prisma', prisma);


fastify.register(cors, {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});


fastify.register(authRoutes); 
fastify.register(usuarioRoutes); 
fastify.register(produtoRoutes);
fastify.register(pedidoRoutes);
fastify.register(financeiroRoutes);


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
