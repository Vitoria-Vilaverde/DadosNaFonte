export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  gradient: string;
  icon: string;
  kpiBefore: { label: string; value: string }[];
  kpiAfter: { label: string; value: string }[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'dashboard-comercial-conversao-32-porcento',
    title: 'Como construímos um dashboard comercial que aumentou a conversão em 32%',
    subtitle: 'A jornada de transformar dados espalhados em CRM e planilhas em um painel executivo unificado para o time de vendas.',
    category: 'Cases',
    readTime: '8 min',
    publishedAt: '10 Mar 2026',
    tags: ['Dashboard Comercial', 'CRM', 'Funil de Vendas', 'Power BI'],
    gradient: 'from-blue-600 to-cyan-500',
    icon: '📊',
    kpiBefore: [
      { label: 'Tempo para gerar relatório', value: '6h/semana' },
      { label: 'Fontes de dados isoladas', value: '4 sistemas' },
      { label: 'Taxa de conversão visível', value: 'Não rastreada' },
    ],
    kpiAfter: [
      { label: 'Tempo para gerar relatório', value: '0h (automático)' },
      { label: 'Fontes integradas', value: '1 painel único' },
      { label: 'Aumento na conversão', value: '+32%' },
    ],
    content: {
      intro: 'O time comercial de uma empresa de médio porte no setor de serviços B2B vivia um problema clássico: dados espalhados entre HubSpot, Google Sheets e relatórios manuais exportados pelo time de operações. Cada segunda-feira, um analista gastava cerca de 3 horas consolidando números para apresentar na reunião de pipeline — e mesmo assim, os dados chegavam desatualizados e inconsistentes.',
      sections: [
        {
          heading: 'O diagnóstico inicial',
          body: 'Antes de escrever uma linha de SQL ou abrir o Power BI, a primeira etapa foi entender o que a empresa realmente precisava ver. Conversamos com o gerente comercial, os SDRs e o head de operações. O que encontramos foi uma situação típica: cada pessoa tinha a sua versão dos números. O CRM mostrava um total de leads, a planilha mostrava outro, e o relatório do marketing mostrava um terceiro. Nenhum dos três estava errado — eles simplesmente mediam coisas diferentes sem documentar isso em lugar algum.',
        },
        {
          heading: 'Mapeamento das fontes de dados',
          body: 'Identificamos quatro fontes principais: o HubSpot (CRM com dados de leads, negócios e contatos), uma planilha Google Sheets alimentada manualmente pelo time de pré-vendas, uma exportação semanal do sistema de faturamento em Excel e os dados de campanhas do Google Ads via API. O desafio não era técnico — era de modelagem e nomenclatura. O que o HubSpot chamava de "lead qualificado" era diferente do que o time de marketing entendia como "lead qualificado". Fizemos um glossário de indicadores com todos os envolvidos antes de qualquer integração.',
        },
        {
          heading: 'A estruturação dos dados',
          body: 'Com as fontes mapeadas e os conceitos alinhados, construímos um pipeline de dados usando Python para extrair do HubSpot via API, normalizar os campos e carregar em um banco PostgreSQL. A planilha foi substituída por um formulário interno que alimentava diretamente o banco. Criamos uma camada de transformação com SQL que gerava as métricas consolidadas: taxa de conversão por etapa, ticket médio por origem, velocidade do ciclo de venda e produtividade por SDR.',
        },
        {
          heading: 'O dashboard no Power BI',
          body: 'O painel foi construído em três visões: executiva (visão macro do funil, receita e tendência), operacional (performance diária do time, SLA de follow-up, negócios em risco) e analítica (origem dos leads, conversão por canal, comparativo por período). A atualização passou a acontecer automaticamente duas vezes ao dia. O gerente comercial acessava o dashboard no celular antes mesmo de chegar ao escritório.',
        },
        {
          heading: 'Os resultados três meses depois',
          body: 'Com visibilidade real do funil, o time identificou que negócios em que o primeiro contato demorava mais de 48 horas tinham uma taxa de fechamento 40% menor. Com esse insight, implementaram um alerta automático no próprio painel. Em três meses, a taxa de conversão de lead qualificado para proposta subiu 32%, não porque o produto melhorou, mas porque o time passou a agir sobre os dados certos na hora certa.',
        },
      ],
      conclusion: 'Dashboards não aumentam conversão. Mas a clareza de dados permite que o time tome decisões melhores com mais velocidade. Neste caso, a maior mudança não foi tecnológica — foi cultural. Quando os números passaram a ser confiáveis e acessíveis, as reuniões deixaram de ser discussões sobre "qual é o número certo" e passaram a ser conversas sobre o que fazer com os dados.',
    },
  },
  {
    slug: 'do-excel-ao-bigquery-estruturacao-dados-ecommerce',
    title: 'Do Excel ao BigQuery: a jornada de dados de um e-commerce em crescimento',
    subtitle: 'Como estruturamos a base analítica de uma operação que cresceu 3x em 18 meses e não conseguia mais acompanhar os próprios números.',
    category: 'Cases',
    readTime: '10 min',
    publishedAt: '25 Fev 2026',
    tags: ['BigQuery', 'ETL', 'E-commerce', 'Python', 'Looker Studio'],
    gradient: 'from-teal-600 to-emerald-500',
    icon: '🛒',
    kpiBefore: [
      { label: 'Tempo de fechamento mensal', value: '3 dias úteis' },
      { label: 'Relatórios confiáveis', value: '0' },
      { label: 'Fontes de dados', value: '11 planilhas' },
    ],
    kpiAfter: [
      { label: 'Tempo de fechamento mensal', value: '2 horas' },
      { label: 'Dashboards ativos', value: '5 painéis' },
      { label: 'Dados centralizados', value: 'BigQuery unificado' },
    ],
    content: {
      intro: 'Uma loja virtual no segmento de moda feminina cresceu de R$800K para R$2,6M de faturamento anual em 18 meses. O crescimento foi real, mas a capacidade analítica não acompanhou. O fechamento mensal durava três dias úteis, com cinco pessoas trabalhando em paralelo em planilhas diferentes — e ainda assim o resultado era questionado pela diretoria.',
      sections: [
        {
          heading: 'O caos das planilhas em escala',
          body: 'Mapeamos 11 planilhas ativas sendo usadas simultaneamente: controle de estoque, pedidos, devoluções, performance por canal (Shopify, Mercado Livre, Instagram Shopping), fluxo de caixa, custo de produto e relatório de marketing. Cada uma tinha um responsável diferente. Cada uma usava uma nomenclatura diferente. Um produto podia aparecer com três nomes distintos dependendo de qual planilha você estava olhando.',
        },
        {
          heading: 'Por que o BigQuery?',
          body: 'A decisão pelo Google BigQuery foi pragmática: a empresa já usava Google Workspace e o custo para começar é essencialmente zero até determinado volume. Mais importante: o Looker Studio se conecta nativamente ao BigQuery, o que simplificaria a camada de visualização. Construímos um pipeline com Python que extraía dados do Shopify via API, normalizava os campos e carregava no BigQuery diariamente às 6h. Os dados do Mercado Livre seguiam o mesmo padrão via API oficial.',
        },
        {
          heading: 'A modelagem que fez diferença',
          body: 'O grande trabalho não foi técnico — foi conceitual. Criamos um dicionário de dados com a empresa: o que conta como "venda realizada" (pedido pago e não cancelado), o que é "devolução" (retorno físico confirmado, não apenas solicitação), como calcular o CMV quando o mesmo produto tem custos diferentes por lote. Essas definições, documentadas e validadas com a diretoria, foram a base de todo o modelo no BigQuery.',
        },
        {
          heading: 'Os cinco dashboards entregues',
          body: 'Construímos cinco painéis no Looker Studio: (1) Visão executiva com faturamento, margem e crescimento; (2) Performance por canal de venda; (3) Estoque e giro de produto; (4) Marketing e aquisição (Google Ads + Meta Ads via API); (5) Operacional de fulfillment com SLA de entrega. Cada painel foi desenvolvido em conjunto com o responsável pela área — não com o que achávamos que eles precisavam, mas com o que eles realmente usariam.',
        },
        {
          heading: 'O impacto na operação',
          body: 'O fechamento mensal passou de 3 dias para 2 horas. A diretora comercial passou a ter os números de vendas por canal no celular todos os dias antes das 7h. Em dois meses, a empresa identificou que um dos canais consumia 30% do orçamento de marketing e gerava apenas 8% da receita — uma decisão de realocação que não teria sido possível sem os dados estruturados.',
        },
      ],
      conclusion: 'Crescimento rápido cria uma armadilha analítica: a empresa se acostuma a operar no escuro porque sempre foi assim, e o volume de trabalho manual cresce junto com o negócio. A estruturação de dados não é um luxo para grandes empresas — é o que permite que as médias empresas tomem decisões com a mesma qualidade que as grandes.',
    },
  },
  {
    slug: 'dashboard-atendimento-identificar-gargalos-tempo-real',
    title: 'Dashboard de atendimento: como o time passou a identificar gargalos em tempo real',
    subtitle: 'Um case de monitoramento de SLA, volume e produtividade para uma operação de suporte com 40 atendentes.',
    category: 'Cases',
    readTime: '7 min',
    publishedAt: '12 Fev 2026',
    tags: ['Operações', 'SLA', 'Atendimento', 'Automação'],
    gradient: 'from-purple-600 to-violet-500',
    icon: '🎧',
    kpiBefore: [
      { label: 'Visibilidade de SLA', value: 'D-1 (ontem)' },
      { label: 'Gargalos identificados', value: 'Após o problema' },
      { label: 'Relatório do supervisor', value: '2h/dia manualmente' },
    ],
    kpiAfter: [
      { label: 'Visibilidade de SLA', value: 'Tempo real' },
      { label: 'Alertas automáticos', value: 'Ativos' },
      { label: 'Tempo economizado', value: '10h/semana' },
    ],
    content: {
      intro: 'Uma empresa de serviços financeiros tinha uma operação de atendimento com 40 agentes, quatro supervisores e um SLA contratual de resposta em até 4 horas. O problema: eles só sabiam que tinham descumprido o SLA no dia seguinte, quando o relatório manual era finalizado. O cliente já havia esperado. A multa contratual já havia sido gerada.',
      sections: [
        {
          heading: 'O problema da visibilidade atrasada',
          body: 'A operação usava uma plataforma de tickets que gerava dados — mas esses dados eram exportados manualmente uma vez ao dia pelo supervisor. O relatório chegava às 18h com os números do dia, quando nada mais podia ser feito. A gestão sabia dos problemas, mas sempre depois que já tinham acontecido.',
        },
        {
          heading: 'A solução técnica',
          body: 'A plataforma de atendimento tinha uma API REST com autenticação OAuth. Construímos um conector Python que consultava a API a cada 15 minutos, extraindo dados de tickets abertos, tempo de fila, primeiro contato e resolução. Os dados eram carregados no PostgreSQL e um dashboard no Power BI era atualizado automaticamente via DirectQuery.',
        },
        {
          heading: 'Os indicadores que mudaram a operação',
          body: 'Mais importante que o painel bonito foi a escolha dos indicadores. Não queríamos mostrar apenas o SLA acumulado do mês — isso não ajuda o supervisor no momento da decisão. Construímos uma visão de tickets em risco: aqueles que já haviam consumido mais de 75% do tempo de SLA disponível ficavam destacados em amarelo; acima de 90%, em vermelho. O supervisor passava a ver exatamente onde precisava agir.',
        },
        {
          heading: 'Alertas automáticos integrados',
          body: 'Além do dashboard visual, configuramos alertas via webhook para o Slack do time de supervisão: sempre que um ticket ultrapassava 75% do SLA, o sistema enviava uma notificação com o número do ticket, o tipo de demanda e o agente responsável. Em dois dias de uso, o time já havia absorvido o hábito de olhar os alertas antes de qualquer outra coisa.',
        },
        {
          heading: 'Os números após 60 dias',
          body: 'O índice de SLA descumprido caiu de 18% para 4% em dois meses. Os supervisores economizaram em média 2,5 horas diárias que antes eram gastas montando relatórios. Com esse tempo livre, passaram a fazer mais acompanhamento individual dos agentes — o que, por si só, contribuiu para a melhora dos indicadores.',
        },
      ],
      conclusion: 'Dados em tempo real não são apenas uma questão de tecnologia — são uma questão de capacidade de resposta. Uma operação que só vê o que aconteceu ontem não consegue atuar no problema de hoje. O maior impacto deste projeto não foi técnico: foi dar ao time a confiança de que eles podiam resolver os problemas antes que os clientes percebessem.',
    },
  },
  {
    slug: 'kpis-que-importam-reestruturacao-indicadores-saas',
    title: 'KPIs que importam: como reestruturamos os indicadores de marketing de uma SaaS',
    subtitle: 'Quando a empresa acompanhava 47 métricas e ainda não sabia se o marketing estava funcionando.',
    category: 'Análise',
    readTime: '6 min',
    publishedAt: '28 Jan 2026',
    tags: ['KPIs', 'Marketing', 'SaaS', 'Métricas'],
    gradient: 'from-amber-500 to-orange-500',
    icon: '🎯',
    kpiBefore: [
      { label: 'Métricas acompanhadas', value: '47' },
      { label: 'Decisões baseadas em dados', value: 'Raras' },
      { label: 'CAC calculado corretamente', value: 'Não' },
    ],
    kpiAfter: [
      { label: 'KPIs no dashboard principal', value: '9' },
      { label: 'Reunião de resultado (tempo)', value: '30 min' },
      { label: 'CAC e LTV mapeados', value: 'Sim, por canal' },
    ],
    content: {
      intro: 'Uma empresa de SaaS B2B com cerca de 200 clientes ativos tinha um dashboard de marketing invejável esteticamente — 47 métricas em 6 abas, com gráficos de todos os tipos. O CMO confessou que abria o dashboard toda semana e saía mais confuso do que entrou. A pergunta "o marketing está funcionando?" continuava sem resposta clara.',
      sections: [
        {
          heading: 'O problema do excesso de métricas',
          body: 'Mais métricas não é mais clareza. Em muitos casos, é o oposto. Quando tudo parece importante, nada orienta a decisão. O time de marketing estava medindo sessões, cliques, impressões, CTR, CPL, MQLs, SQLs, taxa de abertura de e-mail, taxa de clique, scroll depth, tempo na página, bounce rate, NPS do trial, churn dos primeiros 30 dias — e mais 30 outras métricas. O problema não era falta de dado. Era ausência de hierarquia.',
        },
        {
          heading: 'A metodologia de redução',
          body: 'Fizemos uma sessão de trabalho com o CMO e o CEO respondendo a uma pergunta simples: "Se você pudesse ver apenas três números para saber se o marketing está indo bem, quais seriam?" A resposta revelou o que realmente importava: CAC por canal, taxa de conversão do trial para pago e volume de MQLs qualificados por semana. Tudo o mais eram métricas de suporte — importantes para diagnóstico, mas não para decisão executiva.',
        },
        {
          heading: 'Reconstruindo o CAC corretamente',
          body: 'Descobrimos que o CAC calculado pela empresa estava incorreto: ele incluía apenas o investimento em mídia paga, ignorando os salários do time de marketing e as ferramentas de automação. Recalculamos o CAC real por canal (Google Ads, LinkedIn, indicação, orgânico) e descobrimos que o LinkedIn, que parecia o canal mais caro no CPL, tinha o menor CAC real quando considerávamos a taxa de conversão do lead para cliente pago.',
        },
        {
          heading: 'O novo dashboard de marketing',
          body: 'Redesenhamos o dashboard em duas camadas. A primeira, executiva, com 9 KPIs: MQLs, SQLs, taxa de conversão MQL→SQL, CAC por canal, LTV médio, relação LTV/CAC, trial ativados, trial convertidos e churn do primeiro mês. A segunda, operacional, com as métricas de suporte organizadas por canal — disponível para quem precisasse de detalhamento, mas fora da visão principal.',
        },
        {
          heading: 'O impacto nas reuniões',
          body: 'A reunião mensal de marketing, que antes durava 2 horas com muita discussão sobre qual número era o correto, passou a durar 30 minutos com foco em decisões. Em três meses, a empresa realocou 40% do budget de LinkedIn para o Google Ads (que tinha um CAC real menor no segmento deles) e viu o volume de trials aumentar sem aumentar o custo total de aquisição.',
        },
      ],
      conclusion: 'Não existe um conjunto universal de KPIs corretos. O que existe são indicadores alinhados com o momento e os objetivos de cada empresa. O trabalho de estruturação de métricas é, antes de tudo, um trabalho de alinhamento estratégico — e isso requer conversa, não apenas código.',
    },
  },
  {
    slug: 'automacao-relatorios-eliminar-12-horas-semanais',
    title: 'Automação de relatórios: como eliminamos 12 horas semanais de retrabalho manual',
    subtitle: 'Um case de automação de ETL e geração de relatórios para um time financeiro que vivia no Excel.',
    category: 'Cases',
    readTime: '9 min',
    publishedAt: '15 Jan 2026',
    tags: ['Automação', 'ETL', 'Python', 'Financeiro', 'Google Sheets'],
    gradient: 'from-green-600 to-emerald-500',
    icon: '⚡',
    kpiBefore: [
      { label: 'Horas semanais em relatórios', value: '12h' },
      { label: 'Erros por mês', value: '3-5 por relatório' },
      { label: 'Defasagem dos dados', value: 'Até 3 dias' },
    ],
    kpiAfter: [
      { label: 'Horas semanais em relatórios', value: '< 1h (revisão)' },
      { label: 'Erros por mês', value: '0 (validação automática)' },
      { label: 'Defasagem dos dados', value: 'Atualização diária' },
    ],
    content: {
      intro: 'O time financeiro de uma construtora de médio porte passava todo terceiro dia útil do mês em um ritual exaustivo: extrair dados do ERP, cruzar com planilhas de obra, calcular o DRE gerencial e preparar quatro apresentações para a diretoria. O processo levava dois analistas trabalhando em paralelo por dois dias. E mesmo assim, erros de digitação e fórmulas quebradas eram recorrentes.',
      sections: [
        {
          heading: 'Mapeando o fluxo manual',
          body: 'Passamos um dia inteiro acompanhando o processo de fechamento. Identificamos 14 etapas manuais: extração de dados do ERP (TOTVS) em CSV, limpeza manual de formatação, importação para planilha mestre, PROCV entre três bases diferentes, aplicação de rateios por centro de custo, formatação visual dos gráficos, e por aí vai. Cada etapa era uma oportunidade de erro — e em pelo menos três delas, identificamos erros recorrentes que ninguém havia documentado.',
        },
        {
          heading: 'A estratégia de automação',
          body: 'A estratégia não foi substituir tudo de uma vez. Começamos pelas etapas com maior impacto e menor risco: automatizamos a extração do ERP com um script Python que rodava automaticamente às 6h, a limpeza e normalização dos dados, e a carga na planilha Google Sheets via API do Google. Isso já eliminava 7 das 14 etapas manuais — e as mais propensas a erro.',
        },
        {
          heading: 'Construindo a camada de validação',
          body: 'Uma parte crítica que muitos projetos ignoram: validação automática dos dados. Construímos verificações que rodavam junto com a extração: totais devem fechar com o ERP, centros de custo devem bater com o cadastro vigente, não deve haver lançamentos duplicados. Se alguma validação falhasse, o script enviava um e-mail automático ao analista com o detalhe do problema — em vez de deixar o erro passar silenciosamente.',
        },
        {
          heading: 'O dashboard financeiro automatizado',
          body: 'Com os dados limpos e validados no Google Sheets, construímos um dashboard no Looker Studio com o DRE gerencial, evolução por obra, análise de desvio de orçamento versus realizado e fluxo de caixa projetado. O dashboard atualizava automaticamente às 7h de cada dia útil. A diretoria passou a ter os números antes da reunião matinal.',
        },
        {
          heading: 'Os números reais do impacto',
          body: 'Em um mês de operação, a economia foi de 12 horas semanais de trabalho analítico repetitivo (equivalente a 0,3 headcount). Os erros de relatório chegaram a zero graças às validações automáticas. O time financeiro, que antes vivia apagando incêndio de fechamento, passou a dedicar esse tempo para análises prospectivas — que eram a função real deles, mas nunca havia tempo para fazer.',
        },
      ],
      conclusion: 'Automação de relatórios não é sobre eliminar pessoas. É sobre eliminar trabalho mecânico que consome o tempo das pessoas certas. Um analista financeiro vale muito mais construindo cenários e análises do que fazendo PROCV em planilha. O maior resultado deste projeto não foi a economia de horas — foi devolver ao time a possibilidade de fazer o trabalho para o qual foram contratados.',
    },
  },
  {
    slug: 'integracao-multiplas-fontes-crm-sheets-api',
    title: 'Integração de múltiplas fontes: CRM, Sheets e APIs em um painel único',
    subtitle: 'Como centralizamos dados de seis sistemas diferentes para um time de growth que tomava decisões no escuro.',
    category: 'Cases',
    readTime: '11 min',
    publishedAt: '3 Jan 2026',
    tags: ['Integração', 'API', 'CRM', 'Growth', 'PostgreSQL'],
    gradient: 'from-blue-700 to-teal-600',
    icon: '🔗',
    kpiBefore: [
      { label: 'Sistemas sem integração', value: '6 fontes' },
      { label: 'Visão unificada do cliente', value: 'Inexistente' },
      { label: 'Tempo para responder "quanto vendemos?"', value: '30 min' },
    ],
    kpiAfter: [
      { label: 'Pipeline de dados automatizado', value: 'Ativo' },
      { label: 'Visão 360° do cliente', value: 'Disponível' },
      { label: 'Tempo para responder "quanto vendemos?"', value: '< 5 seg' },
    ],
    content: {
      intro: 'Uma startup de growth no setor de educação tinha um problema que é quase um rito de passagem para empresas em estágio de escala: seis sistemas diferentes sendo usados ao mesmo tempo, sem comunicação entre si. O time de growth queria entender o ciclo completo — do lead ao aluno ativo — mas os dados estavam fragmentados em cada ferramenta.',
      sections: [
        {
          heading: 'O ecossistema desconectado',
          body: 'As seis fontes eram: RD Station (CRM e automação de marketing), uma planilha Google Sheets de controle de matrículas mantida pelo time financeiro, a plataforma de cursos (LMS própria com banco MySQL), Meta Ads e Google Ads (cada um com sua API), e um sistema de pagamentos (Iugu). Cada ferramenta tinha seu próprio conceito de "aluno", "lead" e "conversão". Unificar isso exigia mais do que código — exigia um modelo de dados comum.',
        },
        {
          heading: 'Construindo o modelo de dados unificado',
          body: 'A primeira entrega não foi um dashboard — foi um documento. Mapeamos todas as entidades relevantes (Lead, Oportunidade, Matrícula, Aluno, Pagamento, Curso) e como cada sistema as representava. Definimos qual sistema era a "fonte da verdade" para cada entidade: RD Station para dados de lead, Iugu para dados de pagamento, LMS para engajamento do aluno. Esse documento foi validado com a diretoria antes de qualquer linha de código.',
        },
        {
          heading: 'A arquitetura de integração',
          body: 'Construímos um banco PostgreSQL central que consolidava os dados. Pipelines Python rodavam via cron jobs: de hora em hora para as fontes críticas (CRM e pagamentos), uma vez ao dia para as demais. Cada pipeline tinha tratamento de erros e logging — qualquer falha gerava um alerta no Slack. A planilha Google Sheets foi substituída por um formulário interno que escrevia diretamente no banco.',
        },
        {
          heading: 'A visão 360° do aluno',
          body: 'Com os dados unificados, foi possível construir algo que a empresa nunca havia conseguido antes: a jornada completa do aluno. Primeiro contato com o anúncio, abertura do e-mail de nurturing, preenchimento do formulário, reunião de vendas, matrícula, primeiro acesso ao curso, engajamento nos módulos, renovação ou churn. Cada etapa rastreada e conectada.',
        },
        {
          heading: 'Os dashboards entregues',
          body: 'Três painéis no Power BI: (1) Funil de aquisição unificado com dados do Meta Ads, Google Ads e RD Station; (2) Performance de matrículas e receita com dados do Iugu e da planilha (agora automatizada); (3) Engajamento de alunos com dados do LMS, incluindo alertas de alunos em risco de churn por baixo acesso. O terceiro painel foi o mais impactante — o time de sucesso do cliente passou a fazer contato proativo com alunos desengajados antes que eles pedissem reembolso.',
        },
      ],
      conclusion: 'Integração de dados é o trabalho invisível que torna todo o resto possível. Nenhum dashboard, por mais bonito que seja, funciona sem dados confiáveis e conectados. E dados confiáveis exigem um modelo bem definido, pipelines robustos e validações constantes. O resultado final — a visão do ciclo completo do aluno — só foi possível porque fizemos o trabalho de base com rigor.',
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
