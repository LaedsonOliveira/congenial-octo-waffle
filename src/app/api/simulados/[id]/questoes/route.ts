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
    });

    if (!simulado) {
        return NextResponse.json({ message: 'Simulado não encontrado' }, { status: 404 });
    }

    const questoes = await prisma.questao.findMany({
        where: { simuladoId: params.id },
        select: {
            id: true,
            pergunta: true,
            alternativas: true,
        },
    });

    return NextResponse.json(
        questoes.map((questao) => ({
            id: questao.id,
            pergunta: questao.pergunta,
            alternativas: questao.alternativas as string[],
        })),
    );
}
