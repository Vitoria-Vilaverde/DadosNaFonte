import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { DataFlowAnimation } from './DataFlowAnimation';

// Floating data particles
const dataParticles = [
  { text: '+18%', x: '12%', y: '25%', delay: 0, color: 'text-teal-500' },
  { text: 'R$245K', x: '80%', y: '18%', delay: 0.8, color: 'text-blue-500' },
  { text: '↑ 32%', x: '75%', y: '72%', delay: 1.5, color: 'text-green-500' },
  { text: '94% SLA', x: '15%', y: '78%', delay: 0.4, color: 'text-amber-500' },
  { text: '1.2K leads', x: '55%', y: '10%', delay: 1.1, color: 'text-purple-500' },
  { text: '0.6s', x: '90%', y: '45%', delay: 0.6, color: 'text-cyan-500' },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Multi-layer animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 15% 60%, rgba(59,130,246,0.12) 0%, transparent 55%),
              radial-gradient(ellipse at 85% 30%, rgba(20,184,166,0.12) 0%, transparent 55%),
              radial-gradient(ellipse at 50% 90%, rgba(245,158,11,0.06) 0%, transparent 40%)
            `,
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating data particles */}
        {dataParticles.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute font-bold text-sm select-none pointer-events-none ${p.color} opacity-30`}
            style={{ left: p.x, top: p.y }}
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          >
            {p.text}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DataFlowAnimation className="scale-75" />
            Dashboards • BI • Integrações • KPIs
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dashboards personalizados e{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                estrutura de dados
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>{' '}
            para decisões mais inteligentes
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Integro fontes, organizo indicadores e desenvolvo painéis sob medida para empresas que
            precisam acompanhar operação, vendas, marketing e performance com mais clareza.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <motion.button
              onClick={() => scrollToSection('contato')}
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Quero um dashboard</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('projetos')}
              className="px-8 py-4 rounded-full bg-white text-gray-700 font-medium shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300 hover:text-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver projetos
            </motion.button>
          </div>

          <p className="text-sm text-gray-500">
            De planilhas e CRMs a APIs e bancos de dados: transformo dados espalhados em visão
            prática de negócio.
          </p>
        </motion.div>

        {/* Right content - Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Pulsing ring behind card */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-2xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            {/* Header bar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <motion.div
                className="flex items-center gap-1.5 text-xs text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                Atualizado agora
              </motion.div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: TrendingUp, label: 'Receita', value: 'R$ 245K', change: '+12.5%', color: 'from-emerald-500 to-green-400', bg: 'from-emerald-50 to-green-50', border: 'border-emerald-100' },
                { icon: BarChart3, label: 'Conversão', value: '32.4%', change: '+5.2%', color: 'from-blue-500 to-cyan-400', bg: 'from-blue-50 to-cyan-50', border: 'border-blue-100' },
                { icon: PieChart, label: 'Leads', value: '1.2K', change: '+18%', color: 'from-purple-500 to-violet-400', bg: 'from-purple-50 to-violet-50', border: 'border-purple-100' },
                { icon: Activity, label: 'SLA', value: '94%', change: '+3%', color: 'from-amber-500 to-orange-400', bg: 'from-amber-50 to-orange-50', border: 'border-amber-100' },
              ].map((kpi, idx) => (
                <motion.div
                  key={idx}
                  className={`bg-gradient-to-br ${kpi.bg} rounded-xl p-4 border ${kpi.border}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-3 shadow-md`}>
                    <kpi.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{kpi.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  <p className="text-xs text-green-600 font-semibold">{kpi.change}</p>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <motion.div
              className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl p-5 h-36 flex items-end justify-around gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[40, 65, 45, 80, 60, 90, 70, 85].map((height, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1 relative rounded-t-md overflow-hidden"
                  style={{ height: `${height}%` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1 + idx * 0.08, duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-teal-400 opacity-90" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-2xl opacity-40"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl blur-2xl opacity-40"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
