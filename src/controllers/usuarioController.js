export async function criarUsuario(request, reply) {
    const { nome, email, senha, tel } = request.body;

    if (!nome || !email || !senha) {
        return reply.status(400).send({ error: 'Nome, email e senha são obrigatórios.' });
    }

    try {
        
        const usuarioExistente = await request.server.prisma.usuario.findUnique({
            where: { email },
        });

        if (usuarioExistente) {
            return reply.status(400).send({ error: 'Email já está em uso.' });
        }

        const usuario = await request.server.prisma.usuario.create({
            data: { nome, email, senha, tel },
        });

        
        const { senha: _, ...usuarioSemSenha } = usuario;

        reply.status(201).send(usuarioSemSenha);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        reply.status(500).send({ error: 'Erro ao criar usuário.' });
    }
}
