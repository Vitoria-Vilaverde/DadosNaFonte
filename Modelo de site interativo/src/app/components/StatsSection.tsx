import { motion } from 'motion/react';
import { LayoutDashboard, GitMerge, Target, Zap } from 'lucide-react';

const pillars = [
  {
    icon: LayoutDashboard,
    title: 'Dashboards sob medida',
    description: 'Painéis executivos e operacionais construídos a partir da realidade da empresa, não de templates genéricos.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.35)',
    tags: ['Power BI', 'Looker Studio', 'Web'],
  },
  {
    icon: GitMerge,
    title: 'Integração de fontes',
    description: 'Conexão entre CRM, planilhas, APIs, bancos de dados e sistemas internos em uma estrutura analítica única.',
    gradient: 'from-teal-500 to-emerald-500',
    glow: 'rgba(20,184,166,0.35)',
    tags: ['CRM', 'APIs', 'Google Sheets', 'SQL'],
  },
  {
    icon: Target,
    title: 'Indicadores que funcionam',
    description: 'Definição e estruturação dos KPIs certos — executivos, operacionais e de marketing — com critério e contexto.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.35)',
    tags: ['KPIs', 'Métricas', 'Diagnóstico'],
  },
  {
    icon: Zap,
    title: 'Automação e estrutura',
    description: 'Eliminação de retrabalho manual com pipelines de dados automatizados, modelagem e relatórios recorrentes.',
    gradient: 'from-purple-500 to-violet-500',
    glow: 'rgba(168,85,247,0.35)',
    tags: ['ETL', 'Python', 'Automação'],
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 0% 50%, rgba(20,184,166,0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)
            `,
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-medium mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            O que é entregue na prática
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estrutura, leitura e{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              decisão
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Não apenas visualização — o trabalho envolve a cadeia completa: da origem do dado à leitura
            que orienta a decisão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.gradient} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative bg-white/[0.06] backdrop-blur-lg rounded-2xl p-7 border border-white/10 group-hover:border-white/25 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${pillar.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div
                  className={`w-13 h-13 w-[52px] h-[52px] rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 20px ${pillar.glow}` }}
                >
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-white mb-2 text-lg leading-snug">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{pillar.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
