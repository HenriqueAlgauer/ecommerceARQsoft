export async function listarFinanceiro(req, reply) {
    try {
        const registros = await req.server.prisma.financeiro.findMany();
        reply.send(registros);
    } catch (error) {
        reply.status(500).send(error);
    }
}

export async function cadastrarDebito(req, reply) {
    const { idPedido, valor } = req.body;
    try {
        const debito = await req.server.prisma.financeiro.create({
            data: {
                idPedido,
                tipo: 'débito',
                valor,
            },
        });
        reply.send(debito);
    } catch (error) {
        reply.status(500).send(error);
    }
}
