import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

type RespostaPayload = {
    respostas: Record<string, number>;
    tempoGastoSec: number;
};

export async function POST(request: Request, context: any) {
    const { params } = await context;
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body: RespostaPayload = await request.json().catch(() => ({} as RespostaPayload));

    if (!body || typeof body !== 'object' || !body.respostas) {
        return NextResponse.json({ message: 'Parâmetros inválidos' }, { status: 400 });
    }

    const simulado = await prisma.simulado.findUnique({
        where: { id: params.id },
        include: {
            questoes: {
                select: {
                    id: true,
                    correta: true,
                },
            },
        },
    });

    if (!simulado) {
        return NextResponse.json({ message: 'Simulado não encontrado' }, { status: 404 });
    }

    const questionMap = new Map(simulado.questoes.map((questao) => [questao.id, questao]));
    const respostasData = Object.entries(body.respostas)
        .map(([questaoId, respostaSelecionada]) => {
            const questao = questionMap.get(questaoId);
            if (!questao || typeof respostaSelecionada !== 'number') {
                return null;
            }

            return {
                questaoId,
                respostaSelecionada,
                correta: respostaSelecionada === questao.correta,
            };
        })
        .filter((item): item is { questaoId: string; respostaSelecionada: number; correta: boolean } => item !== null);

    const score = respostasData.reduce((acc, resposta) => acc + (resposta.correta ? 1 : 0), 0);
    const attempt = await prisma.simuladoAttempt.create({
        data: {
            userId: session.user.id,
            simuladoId: simulado.id,
            score,
            tempoGastoSec: Number(body.tempoGastoSec ?? 0),
            finishedAt: new Date(),
            respostas: {
                create: respostasData,
            },
        },
    });

    return NextResponse.json({
        attemptId: attempt.id,
        score,
        total: simulado.questoes.length,
        correct: score,
    });
}
