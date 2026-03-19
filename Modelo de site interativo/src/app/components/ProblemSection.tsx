import { motion } from 'motion/react';
import { Database, TrendingDown, FileSpreadsheet, BarChart2, Clock, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: 'Dados espalhados por toda parte',
    description:
      'CRM com uma versão, planilha com outra, e o sistema financeiro com uma terceira. Cada área tem o seu número — e nenhum bate.',
    gradient: 'from-red-500 to-rose-600',
    glow: 'rgba(239,68,68,0.3)',
    border: 'group-hover:border-red-500/40',
  },
  {
    icon: TrendingDown,
    title: 'Indicadores que ninguém confia',
    description:
      'O dashboard existe, mas quando alguém questiona um número a reunião trava. Falta critério de cálculo, contexto e rastreabilidade da origem.',
    gradient: 'from-purple-500 to-violet-600',
    glow: 'rgba(168,85,247,0.3)',
    border: 'group-hover:border-purple-500/40',
  },
  {
    icon: FileSpreadsheet,
    title: 'Fechamento manual toda semana',
    description:
      'Horas consolidando planilhas para gerar um relatório que já está desatualizado quando fica pronto. O analista vira operador de copiar e colar.',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.3)',
    border: 'group-hover:border-amber-500/40',
  },
  {
    icon: BarChart2,
    title: 'Painéis que ninguém usa',
    description:
      'O dashboard ficou pronto, foi apresentado, e depois ninguém mais abriu. Bonito, mas sem leitura, sem contexto, sem utilidade real.',
    gradient: 'from-teal-500 to-cyan-600',
    glow: 'rgba(20,184,166,0.3)',
    border: 'group-hover:border-teal-500/40',
  },
  {
    icon: Clock,
    title: 'Decisões sempre em atraso',
    description:
      'Quando os dados chegam, o momento de agir já passou. A operação reage ao problema depois que ele virou incêndio — porque não havia visibilidade antes.',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.3)',
    border: 'group-hover:border-blue-500/40',
  },
  {
    icon: HelpCircle,
    title: 'KPIs sem critério ou contexto',
    description:
      'Muitas métricas acompanhadas sem hierarquia. Ninguém sabe quais são os mais importantes, como calculá-las corretamente ou o que fazer quando estão fora do esperado.',
    gradient: 'from-green-500 to-emerald-600',
    glow: 'rgba(34,197,94,0.3)',
    border: 'group-hover:border-green-500/40',
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(239,68,68,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(20,184,166,0.05) 0%, transparent 50%)
          `,
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Diagnóstico
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O problema não é{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              falta de dado
            </span>
            . É falta de estrutura.
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A maioria das empresas já gera dados em volume suficiente. O que falta é a estrutura
            para que esses dados sejam confiáveis, acessíveis e úteis para quem decide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className={`relative bg-white/[0.05] backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${problem.border} transition-all duration-300 overflow-hidden h-full`}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${problem.gradient} opacity-60`} />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 18px ${problem.glow}` }}
                >
                  <problem.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-white mb-2 leading-snug">{problem.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-400 mt-12 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          O{' '}
          <span className="text-teal-400 font-semibold">Dados na Fonte</span>{' '}
          existe para resolver exatamente esses cenários — com estrutura, método e visão de negócio.
        </motion.p>
      </div>
    </section>
  );
}
