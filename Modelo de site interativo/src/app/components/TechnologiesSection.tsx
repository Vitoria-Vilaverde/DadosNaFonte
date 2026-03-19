import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

const techCategories = [
  {
    label: 'Visualização',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-300',
    tools: ['Power BI', 'Looker Studio', 'Dashboards Web'],
  },
  {
    label: 'Dados e bancos',
    color: 'from-purple-500 to-violet-500',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-300',
    tools: ['SQL', 'PostgreSQL', 'MySQL', 'BigQuery'],
  },
  {
    label: 'Integrações',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-300',
    tools: ['APIs REST', 'CRM', 'Google Sheets', 'Webhooks'],
  },
  {
    label: 'Automação e ETL',
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-300',
    tools: ['Python', 'ETL', 'Make / N8N', 'Pipelines'],
  },
];

// Flat list for marquee
const technologies = [
  { name: 'Power BI', cat: 'Visualização' },
  { name: 'Looker Studio', cat: 'Visualização' },
  { name: 'SQL', cat: 'Dados' },
  { name: 'BigQuery', cat: 'Dados' },
  { name: 'PostgreSQL', cat: 'Dados' },
  { name: 'APIs REST', cat: 'Integração' },
  { name: 'CRM', cat: 'Integração' },
  { name: 'Google Sheets', cat: 'Integração' },
  { name: 'Python', cat: 'Automação' },
  { name: 'ETL', cat: 'Automação' },
  { name: 'MySQL', cat: 'Dados' },
  { name: 'Make / N8N', cat: 'Automação' },
];

const allTechs = [...technologies, ...technologies];

const catColor: Record<string, string> = {
  'Visualização': 'from-blue-500 to-cyan-500',
  'Dados': 'from-purple-500 to-violet-500',
  'Integração': 'from-emerald-500 to-teal-500',
  'Automação': 'from-amber-500 to-orange-500',
};

export function TechnologiesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-blue-950 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 50%, rgba(20,184,166,0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.05) 0%, transparent 60%)
          `,
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Cpu className="w-3.5 h-3.5" />
            Stack tecnológica
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A tecnologia é o{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              meio
            </span>
            , não o fim
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A ferramenta é escolhida depois de entender o problema. O que importa é que os dados cheguem
            certos, no momento certo, para quem precisa decidir.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={`relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 border ${cat.borderColor} hover:border-opacity-60 transition-all h-full`}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} rounded-t-2xl`} />

                <p className={`text-xs font-bold ${cat.textColor} uppercase tracking-widest mb-4`}>
                  {cat.label}
                </p>
                <div className="space-y-2">
                  {cat.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color} flex-shrink-0`} />
                      <span className="text-slate-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="space-y-4 overflow-hidden">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-950 to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-4"
              animate={{ x: [0, -50 * 12] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              style={{ width: 'max-content' }}
            >
              {allTechs.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group relative flex-shrink-0"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${catColor[tech.cat] ?? 'from-blue-500 to-teal-500'} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="relative bg-white/[0.07] backdrop-blur-sm rounded-xl px-5 py-3.5 border border-white/10 group-hover:border-white/25 transition-all duration-300 flex items-center gap-3 min-w-[130px]">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${catColor[tech.cat] ?? 'from-blue-500 to-teal-500'} flex-shrink-0`} />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-center text-slate-500 text-sm mt-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Domínio técnico não é diferencial sozinho. O que importa é saber quando usar cada
          ferramenta — e por quê.
        </motion.p>
      </div>
    </section>
  );
}
