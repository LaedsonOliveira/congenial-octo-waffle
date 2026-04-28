import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, context: any) {
    const { params } = await context;
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const simulado = await prisma.simulado.findUnique({
        where: { id: params.id },
        include: {
            tentativas: {
                where: { userId: session.user.id, finishedAt: { not: null } },
                orderBy: { createdAt: 'desc' },
                take: 1,
            },
        },
    });

    if (!simulado) {
        return NextResponse.json({ message: 'Simulado não encontrado' }, { status: 404 });
    }

    return NextResponse.json({
        id: simulado.id,
        titulo: simulado.titulo,
        tema: simulado.tema,
        descricao: simulado.descricao,
        quantidadeQuestoes: simulado.quantidadeQuestoes,
        data: simulado.data.toISOString(),
        tempo: simulado.tempoMinutos,
        status: simulado.tentativas.length > 0 ? 'concluido' : simulado.status,
        lastAttempt:
            simulado.tentativas.length > 0
                ? {
                    score: simulado.tentativas[0].score,
                    finishedAt: simulado.tentativas[0].finishedAt?.toISOString() ?? null,
                }
                : null,
    });
}
