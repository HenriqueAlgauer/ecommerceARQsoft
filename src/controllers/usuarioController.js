export async function criarUsuario(request, reply) {
    const { nome, email, senha, tel } = request.body;
    try {
        const usuario = await request.server.prisma.usuario.create({
            data: { nome, email, senha, tel },
        });
        reply.send(usuario);
    } catch (error) {
        reply.status(500).send(error);
    }
}

export async function listarUsuarios(request, reply) {
    try {
        const usuarios = await request.server.prisma.usuario.findMany();
        reply.send(usuarios);
    } catch (error) {
        reply.status(500).send(error);
    }
}
