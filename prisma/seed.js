const { PrismaClient } = require('../src/generated/prisma/client');

const prisma = new PrismaClient();

const simulados = [
    {
        id: '1',
        titulo: 'Simulado ENADE ADS 2026 - Engenharia de Software',
        tema: 'Engenharia de Software',
        descricao: 'Revisão de requisitos, processos, UML e qualidade de software.',
        quantidadeQuestoes: 10,
        data: new Date('2026-04-10').toISOString(),
        tempoMinutos: 20,
        status: 'pendente',
    },
    {
        id: '2',
        titulo: 'Simulado ENADE ADS 2026 - Banco de Dados',
        tema: 'Banco de Dados',
        descricao: 'Questões sobre modelagem, SQL, normalização e transações.',
        quantidadeQuestoes: 10,
        data: new Date('2026-04-12').toISOString(),
        tempoMinutos: 25,
        status: 'pendente',
    },
    {
        id: '3',
        titulo: 'Simulado ENADE ADS 2026 - Redes de Computadores',
        tema: 'Redes',
        descricao: 'Conceitos de camadas, protocolos, TCP/IP e segurança de redes.',
        quantidadeQuestoes: 10,
        data: new Date('2026-04-15').toISOString(),
        tempoMinutos: 30,
        status: 'pendente',
    },
    {
        id: '4',
        titulo: 'Simulado ENADE ADS 2026 - Programação',
        tema: 'Programação',
        descricao: 'Questões sobre lógica, algoritmos, estruturas de dados e OOP.',
        quantidadeQuestoes: 10,
        data: new Date('2026-04-18').toISOString(),
        tempoMinutos: 25,
        status: 'pendente',
    },
    {
        id: '5',
        titulo: 'Simulado ENADE ADS 2026 - Sistemas Distribuídos',
        tema: 'Sistemas Distribuídos',
        descricao: 'Revisão de arquitetura distribuída, middleware e computação em nuvem.',
        quantidadeQuestoes: 10,
        data: new Date('2026-04-20').toISOString(),
        tempoMinutos: 30,
        status: 'pendente',
    },
];

const questoes = [
    {
        simuladoId: '1',
        pergunta: 'O que representa a sigla UML?',
        alternativas: ['Unified Modeling Language', 'Universal Machine Language', 'Unique Model Logic', 'Unified Matrix Layer'],
        correta: 0,
    },
    {
        simuladoId: '1',
        pergunta: 'Qual artefato documenta casos de uso?',
        alternativas: ['Diagrama de classes', 'Diagrama de casos de uso', 'Diagrama de sequência', 'Diagrama de componentes'],
        correta: 1,
    },
    {
        simuladoId: '1',
        pergunta: 'Qual prática é essencial em desenvolvimento ágil?',
        alternativas: ['Documentação extensa', 'Planejamento trimestral fechado', 'Integração contínua', 'Fase de testes única no fim'],
        correta: 2,
    },
    {
        simuladoId: '1',
        pergunta: 'O que é requisito não funcional?',
        alternativas: ['Descrição de uma interface', 'Característica de qualidade do sistema', 'Fluxo de navegação', 'Exemplo de tela'],
        correta: 1,
    },
    {
        simuladoId: '1',
        pergunta: 'Qual modelo usa protótipos e iteratividade?',
        alternativas: ['Cascata', 'Spiral', 'V', 'RAD'],
        correta: 3,
    },
    {
        simuladoId: '1',
        pergunta: 'O que é refatoração?',
        alternativas: ['Trocar a linguagem do sistema', 'Reescrever o software do zero', 'Melhorar estrutura sem alterar funcionalidade', 'Reduzir a equipe de desenvolvimento'],
        correta: 2,
    },
    {
        simuladoId: '1',
        pergunta: 'Qual é uma métrica de qualidade de código?',
        alternativas: ['Escalabilidade', 'Manutenibilidade', 'Disponibilidade', 'Performance'],
        correta: 1,
    },
    {
        simuladoId: '1',
        pergunta: 'O que significa teste de regressão?',
        alternativas: ['Teste de memória', 'Teste de desempenho', 'Retestar funcionalidades após mudanças', 'Teste de segurança'],
        correta: 2,
    },
    {
        simuladoId: '1',
        pergunta: 'Qual técnica identifica falhas no início do desenvolvimento?',
        alternativas: ['Prototipagem', 'Pair programming', 'Análise de requisitos', 'Testes de aceitação'],
        correta: 2,
    },
    {
        simuladoId: '1',
        pergunta: 'Qual documento descreve arquitetura de software?',
        alternativas: ['Plano de testes', 'Documento de visão', 'Documento de arquitetura', 'Especificação de casos de uso'],
        correta: 2,
    },
    {
        simuladoId: '2',
        pergunta: 'Qual comando SQL seleciona linhas de uma tabela?',
        alternativas: ['INSERT', 'DELETE', 'SELECT', 'UPDATE'],
        correta: 2,
    },
    {
        simuladoId: '2',
        pergunta: 'O que faz a normalização em bancos de dados?',
        alternativas: ['Melhora a interface', 'Reduz redundância', 'Aumenta o número de índices', 'Cria backups automáticos'],
        correta: 1,
    },
    {
        simuladoId: '2',
        pergunta: 'Qual chave identifica unicamente um registro?',
        alternativas: ['Chave estrangeira', 'Chave primária', 'Índice', 'Visão'],
        correta: 1,
    },
    {
        simuladoId: '2',
        pergunta: 'O que é transação no contexto de banco de dados?',
        alternativas: ['Cópia de segurança', 'Conjunto de operações atômicas', 'Tipo de índice', 'Mapeamento objeto-relacional'],
        correta: 1,
    },
    {
        simuladoId: '2',
        pergunta: 'Qual propriedade garante que uma transação é indivisível?',
        alternativas: ['Atomicidade', 'Consistência', 'Isolamento', 'Durabilidade'],
        correta: 0,
    },
    {
        simuladoId: '2',
        pergunta: 'Uma view é:',
        alternativas: ['Tabela física', 'Índice', 'Consulta virtual', 'Backup'],
        correta: 2,
    },
    {
        simuladoId: '2',
        pergunta: 'O que é SQL Injection?',
        alternativas: ['Técnica de otimização', 'Ataque por instruções maliciosas', 'Recurso de backup', 'Tipo de índice'],
        correta: 1,
    },
    {
        simuladoId: '2',
        pergunta: 'Qual comando altera dados já existentes?',
        alternativas: ['SELECT', 'INSERT', 'UPDATE', 'DROP'],
        correta: 2,
    },
    {
        simuladoId: '2',
        pergunta: 'O que é uma consulta JOIN?',
        alternativas: ['Excluir dados', 'Modificar tabela', 'Combinar dados de duas tabelas', 'Criar índice'],
        correta: 2,
    },
    {
        simuladoId: '2',
        pergunta: 'Qual é a forma normal que elimina dependências parciais?',
        alternativas: ['1FN', '2FN', '3FN', 'BCNF'],
        correta: 1,
    },
    {
        simuladoId: '3',
        pergunta: 'Qual camada do modelo OSI realiza roteamento?',
        alternativas: ['Física', 'Enlace', 'Rede', 'Transporte'],
        correta: 2,
    },
    {
        simuladoId: '3',
        pergunta: 'O que é um endereço IP?',
        alternativas: ['Um tipo de roteador', 'Um identificador de host na rede', 'Um protocolo de segurança', 'Uma porta de comunicação'],
        correta: 1,
    },
    {
        simuladoId: '3',
        pergunta: 'Qual protocolo entrega pacotes orientado a conexão?',
        alternativas: ['UDP', 'HTTP', 'ICMP', 'TCP'],
        correta: 3,
    },
    {
        simuladoId: '3',
        pergunta: 'O que faz o DNS?',
        alternativas: ['Gerencia roteadores', 'Traduz nomes em endereços IP', 'Armazena dados de usuários', 'Segmenta pacotes'],
        correta: 1,
    },
    {
        simuladoId: '3',
        pergunta: 'Qual dispositivo opera na camada de enlace?',
        alternativas: ['Roteador', 'Switch', 'Firewall', 'Servidor DNS'],
        correta: 1,
    },
    {
        simuladoId: '3',
        pergunta: 'O que representa TCP/IP?',
        alternativas: ['Transporte/Protocolo de Internet', 'Tráfego de Protocolo', 'Taxa de Conexão', 'Terminal Protocol Interface'],
        correta: 0,
    },
    {
        simuladoId: '3',
        pergunta: 'Qual é a função de um gateway?',
        alternativas: ['Filtrar spam', 'Interligar redes diferentes', 'Armazenar dados', 'Gerenciar usuários'],
        correta: 1,
    },
    {
        simuladoId: '3',
        pergunta: 'O que significa NAT?',
        alternativas: ['Network Address Translation', 'Network Access Type', 'Node Access Table', 'Network Automatic Transfer'],
        correta: 0,
    },
    {
        simuladoId: '3',
        pergunta: 'Qual camada fornece controle de fluxo?',
        alternativas: ['Rede', 'Transporte', 'Sessão', 'Aplicação'],
        correta: 1,
    },
    {
        simuladoId: '3',
        pergunta: 'O que é uma sub-rede?',
        alternativas: ['Uma forma de criptografia', 'Uma divisão lógica de rede', 'Um tipo de cabo', 'Um serviço de nuvem'],
        correta: 1,
    },
    {
        simuladoId: '4',
        pergunta: 'Qual estrutura de dados usa FIFO?',
        alternativas: ['Pilha', 'Fila', 'Árvore', 'Grafo'],
        correta: 1,
    },
    {
        simuladoId: '4',
        pergunta: 'O que é encapsulamento em OOP?',
        alternativas: ['Dividir classes em pacotes', 'Esconder dados e comportamentos internos', 'Copiar objetos', 'Executar métodos sequenciais'],
        correta: 1,
    },
    {
        simuladoId: '4',
        pergunta: 'Qual comando imprime texto em JavaScript?',
        alternativas: ['console.log()', 'System.out.println()', 'printf()', 'echo'],
        correta: 0,
    },
    {
        simuladoId: '4',
        pergunta: 'Qual algoritmo é usado para ordenar em O(n²)?',
        alternativas: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Heap Sort'],
        correta: 2,
    },
    {
        simuladoId: '4',
        pergunta: 'O que é recursão?',
        alternativas: ['Laço infinito', 'Função que chama a si mesma', 'Estrutura condicional', 'Um tipo de variável'],
        correta: 1,
    },
    {
        simuladoId: '4',
        pergunta: 'Qual é a complexidade de busca binária?',
        alternativas: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
        correta: 0,
    },
    {
        simuladoId: '4',
        pergunta: 'O que é um array?',
        alternativas: ['Conjunto de funções', 'Coleção indexada de valores', ' variável única', 'Arquivo de texto'],
        correta: 1,
    },
    {
        simuladoId: '4',
        pergunta: 'Qual é a saída de 2 + 2 em programação?',
        alternativas: ['22', '4', 'Erro', '2'],
        correta: 1,
    },
    {
        simuladoId: '4',
        pergunta: 'O que significa OOP?',
        alternativas: ['Orientação a Objetos', 'Operações em Processos', 'Organização de Pagamento', 'Ordem de Programação'],
        correta: 0,
    },
    {
        simuladoId: '4',
        pergunta: 'Qual estrutura representa relacionamento hierárquico?',
        alternativas: ['Pilha', 'Fila', 'Árvore', 'Grafo'],
        correta: 2,
    },
    {
        simuladoId: '5',
        pergunta: 'O que é um sistema distribuído?',
        alternativas: ['Um único computador', 'Vários computadores cooperando', 'Um banco de dados remoto', 'Um software desktop'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'Qual conceito descreve consistência em sistemas distribuídos?',
        alternativas: ['Mesmo dado em diferentes nós', 'Alta disponibilidade', 'Baixa latência', 'Escalabilidade vertical'],
        correta: 0,
    },
    {
        simuladoId: '5',
        pergunta: 'O que é RPC?',
        alternativas: ['Regional Process Control', 'Remote Procedure Call', 'Random Packet Channel', 'Resource Protocol Code'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'O que é escalabilidade horizontal?',
        alternativas: ['Aumentar poder do servidor', 'Adicionar mais servidores', 'Reduzir o número de usuários', 'Melhorar algoritmo'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'Qual é um exemplo de middleware?',
        alternativas: ['SO', 'Apache Kafka', 'HTML', 'CSS'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'O que significa replicação de dados?',
        alternativas: ['Excluir dados duplicados', 'Copiar dados para mais de um nó', 'Criptografar dados', 'Mover dados para backup'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'Qual componente ajuda a balancear carga?',
        alternativas: ['Firewall', 'Load balancer', 'Switch', 'Servidor DNS'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'O que é tolerância a falhas?',
        alternativas: ['Ocultar erros do usuário', 'Manter o sistema funcionando quando parte falha', 'Aumentar desempenho', 'Reduzir custos'],
        correta: 1,
    },
    {
        simuladoId: '5',
        pergunta: 'Qual é a finalidade do cache em sistemas distribuídos?',
        alternativas: ['Armazenar logs', 'Aumentar a latência', 'Melhorar desempenho de leitura', 'Gerenciar transações'],
        correta: 2,
    },
    {
        simuladoId: '5',
        pergunta: 'O que caracteriza comunicação assíncrona?',
        alternativas: ['Resposta imediata', 'Não há bloqueio enquanto espera resposta', 'Usa apenas HTTP', 'Sempre usa TCP'],
        correta: 1,
    },
];

async function main() {
    const simuladoCount = await prisma.simulado.count();
    if (simuladoCount > 0) {
        console.log('Dados de simulado já existentes. Nenhuma semente aplicada.');
        await prisma.$disconnect();
        return;
    }

    await prisma.simulado.createMany({ data: simulados });

    for (const questao of questoes) {
        await prisma.questao.create({
            data: {
                simuladoId: questao.simuladoId,
                pergunta: questao.pergunta,
                alternativas: questao.alternativas,
                correta: questao.correta,
            },
        });
    }

    console.log('Semente de dados de simulados e questões aplicada com sucesso.');
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
