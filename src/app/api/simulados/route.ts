import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(request.url);
    const query = url.searchParams.get('query')?.trim() ?? '';

    const where = query
        ? {
            OR: [
                { titulo: { contains: query } },
                { tema: { contains: query } },
            ],
        }
        : undefined;

    const simulados = await prisma.simulado.findMany({
        where,
        orderBy: { data: 'desc' },
        include: {
            questoes: { select: { id: true } },
            tentativas: {
                where: { userId: session.user.id, finishedAt: { not: null } },
                orderBy: { createdAt: 'desc' },
                take: 1,
            },
        },
    });

    const response = simulados.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        tema: item.tema,
        quantidadeQuestoes: item.questoes.length,
        data: item.data.toISOString(),
        status: item.tentativas.length > 0 ? 'concluido' : item.status,
        tempo: item.tempoMinutos,
        lastAttempt:
            item.tentativas.length > 0
                ? {
                    score: item.tentativas[0].score,
                    finishedAt: item.tentativas[0].finishedAt?.toISOString() ?? null,
                }
                : null,
    }));

    return NextResponse.json(response);
}
