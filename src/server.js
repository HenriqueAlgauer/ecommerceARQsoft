
const fastify = require('fastify')({ logger: true });
const path = require('path');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



// Importar controllers
fastify.decorate('controllers', {
    usuario: require('./controllers/usuarioController'),
    produto: require('./controllers/produtoController'),
    pedido: require('./controllers/pedidoController'),
    financeiro: require('./controllers/financeiroController'),
});

// Registrar rotas
fastify.register(require('./routes/usuarioRoutes'));
fastify.register(require('./routes/produtoRoutes'));
fastify.register(require('./routes/pedidoRoutes'));
fastify.register(require('./routes/financeiroRoutes'));

// ...

// Instanciando o Prisma Client
const prismaClient = new prisma.PrismaClient();

// Decorando o Fastify com o Prisma Client
fastify.decorate('prisma', prismaClient);

// Registrar rotas
fastify.register(require('./routes/usuarioRoutes'));
fastify.register(require('./routes/produtoRoutes'));
fastify.register(require('./routes/pedidoRoutes'));
fastify.register(require('./routes/financeiroRoutes'));


// Outros imports e configurações...

// Registrar rotas
fastify.register(require('./routes/usuarioRoutes'));
// Registrar outras rotas...

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


// ...


