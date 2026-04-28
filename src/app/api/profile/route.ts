import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const [profile, stats] = await Promise.all([
        prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
            },
        }),
        prisma.simuladoAttempt.aggregate({
            where: { userId: session.user.id },
            _count: { _all: true },
            _sum: { tempoGastoSec: true, score: true },
        }),
    ]);

    if (!profile) {
        return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }

    return NextResponse.json({
        user: profile,
        stats: {
            simuladosRealizados: stats._count._all,
            tempoTotalSegundos: stats._sum.tempoGastoSec ?? 0,
            pontuacaoTotal: stats._sum.score ?? 0,
        },
    });
}
