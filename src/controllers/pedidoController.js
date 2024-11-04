export async function criarPedido(req, reply) {
    const { idCliente, itens } = req.body;
    try {
        let valorTotal = 0;
        for (const item of itens) {
            const produto = await req.server.prisma.produto.findUnique({
                where: { id: item.idProduto },
            });
            if (!produto) {
                return reply.status(404).send({ error: 'Produto não encontrado' });
            }
            valorTotal += produto.valor * item.quantidade;
        }

        const pedido = await req.server.prisma.pedido.create({
            data: {
                idCliente,
                valor: valorTotal,
                pedidoItens: {
                    create: itens.map(item => ({
                        idProduto: item.idProduto,
                        quantidade: item.quantidade,
                    })),
                },
            },
            include: {
                pedidoItens: true,
            },
        });

        
        for (const item of itens) {
            await req.server.prisma.produto.update({
                where: { id: item.idProduto },
                data: {
                    estoque: { decrement: item.quantidade },
                },
            });
        }

        
        await req.server.prisma.financeiro.create({
            data: {
                idPedido: pedido.id,
                tipo: 'débito',
                valor: valorTotal,
            },
        });

        reply.send(pedido);
    } catch (error) {
        reply.status(500).send(error);
    }
}


