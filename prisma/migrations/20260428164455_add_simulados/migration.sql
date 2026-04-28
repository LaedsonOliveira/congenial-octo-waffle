-- CreateEnum
CREATE TYPE "SimuladoStatus" AS ENUM ('concluido', 'pendente');

-- CreateTable
CREATE TABLE "Simulado" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidadeQuestoes" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "tempoMinutos" INTEGER NOT NULL,
    "status" "SimuladoStatus" NOT NULL DEFAULT 'pendente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Simulado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questao" (
    "id" TEXT NOT NULL,
    "simuladoId" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,
    "alternativas" JSONB NOT NULL,
    "correta" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SimuladoAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "simuladoId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "tempoGastoSec" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SimuladoAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttemptResposta" (
    "id" TEXT NOT NULL,
    "attemptId" TEXT NOT NULL,
    "questaoId" TEXT NOT NULL,
    "respostaSelecionada" INTEGER NOT NULL,
    "correta" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttemptResposta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttemptResposta_attemptId_questaoId_key" ON "AttemptResposta"("attemptId", "questaoId");

-- AddForeignKey
ALTER TABLE "Questao" ADD CONSTRAINT "Questao_simuladoId_fkey" FOREIGN KEY ("simuladoId") REFERENCES "Simulado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimuladoAttempt" ADD CONSTRAINT "SimuladoAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimuladoAttempt" ADD CONSTRAINT "SimuladoAttempt_simuladoId_fkey" FOREIGN KEY ("simuladoId") REFERENCES "Simulado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttemptResposta" ADD CONSTRAINT "AttemptResposta_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "SimuladoAttempt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttemptResposta" ADD CONSTRAINT "AttemptResposta_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
