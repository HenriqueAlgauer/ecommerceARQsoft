export async function login(request, reply) {
    const { email, senha } = request.body;

    if (!email || !senha) {
        return reply.status(400).send({ error: 'Email e senha são obrigatórios.' });
    }

    try {
        const usuario = await request.server.prisma.usuario.findUnique({
            where: { email },
        });

        if (!usuario) {
            return reply.status(401).send({ error: 'Credenciais inválidas.' });
        }

        
        if (usuario.senha !== senha) {
            return reply.status(401).send({ error: 'Credenciais inválidas.' });
        }

        
        return reply.send({ message: 'Login bem-sucedido' });
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        return reply.status(500).send({ error: 'Erro interno do servidor.' });
    }
}
