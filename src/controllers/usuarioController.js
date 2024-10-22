exports.criarUsuario = async (req, reply) => {
    const { nome, email, senha, tel } = req.body;
    try {
        const usuario = await req.server.prisma.usuario.create({
            data: { nome, email, senha, tel },
        });
        reply.send(usuario);
    } catch (error) {
        reply.status(500).send(error);
    }
};

exports.listarUsuarios = async (req, reply) => {
    try {
        const usuarios = await req.server.prisma.usuario.findMany();
        reply.send(usuarios);
    } catch (error) {
        reply.status(500).send(error);
    }
};

// Outros métodos como atualizarUsuario, deletarUsuario etc.
