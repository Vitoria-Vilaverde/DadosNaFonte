import { motion } from 'motion/react';
import { Search, Database, GitBranch, Layout, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Entendimento do cenário',
    description: 'Mapeamento do negócio, das dores e dos indicadores realmente importantes.',
    color: 'from-blue-600 to-blue-500',
    glow: 'rgba(37,99,235,0.4)',
    lightBg: 'from-blue-50 to-slate-50',
    borderColor: 'border-blue-200',
    numberColor: 'text-blue-200',
  },
  {
    icon: Database,
    title: 'Levantamento das fontes',
    description: 'Análise das ferramentas, planilhas, sistemas e bases disponíveis.',
    color: 'from-purple-600 to-violet-500',
    glow: 'rgba(147,51,234,0.4)',
    lightBg: 'from-purple-50 to-slate-50',
    borderColor: 'border-purple-200',
    numberColor: 'text-purple-200',
  },
  {
    icon: GitBranch,
    title: 'Estruturação dos dados',
    description: 'Organização, padronização e modelagem para garantir consistência.',
    color: 'from-teal-600 to-cyan-500',
    glow: 'rgba(13,148,136,0.4)',
    lightBg: 'from-teal-50 to-slate-50',
    borderColor: 'border-teal-200',
    numberColor: 'text-teal-200',
  },
  {
    icon: Layout,
    title: 'Construção do dashboard',
    description: 'Desenvolvimento visual com foco em leitura, hierarquia e contexto.',
    color: 'from-amber-600 to-orange-500',
    glow: 'rgba(217,119,6,0.4)',
    lightBg: 'from-amber-50 to-slate-50',
    borderColor: 'border-amber-200',
    numberColor: 'text-amber-200',
  },
  {
    icon: Settings,
    title: 'Ajustes com base no uso',
    description: 'Refinamento da solução a partir da rotina real da operação.',
    color: 'from-green-600 to-emerald-500',
    glow: 'rgba(22,163,74,0.4)',
    lightBg: 'from-green-50 to-slate-50',
    borderColor: 'border-green-200',
    numberColor: 'text-green-200',
  },
  {
    icon: CheckCircle,
    title: 'Entrega e orientação',
    description: 'Entrega final com apoio para interpretação e uso dos indicadores.',
    color: 'from-blue-600 to-teal-500',
    glow: 'rgba(37,99,235,0.4)',
    lightBg: 'from-blue-50 to-teal-50',
    borderColor: 'border-blue-200',
    numberColor: 'text-blue-200',
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-60"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-3xl opacity-60"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-medium mb-5 border border-blue-200/50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Metodologia
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              funciona
            </span>{' '}
            o processo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto é construído para fazer sentido no dia a dia da empresa, e não apenas para
            apresentar números.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div
              className="h-full bg-gradient-to-b from-blue-600 via-teal-500 to-blue-600"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content card */}
                <div className="flex-1 w-full">
                  <motion.div
                    className={`group relative bg-gradient-to-br ${step.lightBg} rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border ${step.borderColor} overflow-hidden`}
                    whileHover={{ y: -4 }}
                  >
                    {/* Large background number */}
                    <div className={`absolute -bottom-4 right-4 text-[8rem] font-black ${step.numberColor} opacity-20 select-none pointer-events-none leading-none`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Top gradient line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-70`} />

                    <div className="relative z-10 flex items-start gap-5">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                        style={{ boxShadow: `0 0 20px ${step.glow}` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <div className={`inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2 tracking-widest`}>
                          ETAPA {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="hidden lg:flex relative flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                >
                  <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${step.color} shadow-lg z-10 flex items-center justify-center`}
                    style={{ boxShadow: `0 0 15px ${step.glow}` }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  {/* Ping animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-40`}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
