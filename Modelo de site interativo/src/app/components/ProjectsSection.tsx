import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Database } from 'lucide-react';

/* ─── Custom chart components (no Recharts = no duplicate-key issues) ─── */

const salesData = [40, 65, 45, 80, 70, 95];
const salesLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

function SalesChart() {
  const max = Math.max(...salesData);
  const w = 260;
  const h = 100;
  const pad = 10;
  const xs = salesData.map((_, i) => pad + (i / (salesData.length - 1)) * (w - pad * 2));
  const ys = salesData.map((v) => h - pad - ((v / max) * (h - pad * 2)));
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ');
  const area = `${d} L${xs[xs.length - 1]},${h - pad} L${xs[0]},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h + 18}`} className="w-full">
      <defs>
        <linearGradient id="sg-sales" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sg-sales)" />
      <path d={d} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <circle key={salesLabels[i]} cx={x} cy={ys[i]} r="4" fill="#3b82f6" />
      ))}
      {xs.map((x, i) => (
        <text key={`lbl-${salesLabels[i]}`} x={x} y={h + 14} textAnchor="middle" fontSize="9" fill="#94a3b8">
          {salesLabels[i]}
        </text>
      ))}
    </svg>
  );
}

const opData = [
  { label: 'SLA', value: 94 },
  { label: 'Vol', value: 78 },
  { label: 'Eff', value: 86 },
  { label: 'Resp', value: 92 },
];

function OperationalChart() {
  const barW = 36;
  const gap = 24;
  const h = 90;
  const totalW = opData.length * (barW + gap) - gap + 16;

  return (
    <svg viewBox={`0 0 ${totalW} ${h + 18}`} className="w-full">
      {opData.map((d, i) => {
        const barH = (d.value / 100) * h;
        const x = 8 + i * (barW + gap);
        const y = h - barH;
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={barW} height={barH} rx="4" fill="#14b8a6" opacity="0.85" />
            <text x={x + barW / 2} y={h + 13} textAnchor="middle" fontSize="9" fill="#94a3b8">
              {d.label}
            </text>
            <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="9" fill="#14b8a6" fontWeight="600">
              {d.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const pieSlices = [
  { label: 'Org', value: 35, color: '#3b82f6' },
  { label: 'Dir', value: 25, color: '#14b8a6' },
  { label: 'Ref', value: 20, color: '#f59e0b' },
  { label: 'Soc', value: 20, color: '#ec4899' },
];

function MarketingChart() {
  const cx = 65;
  const cy = 55;
  const r = 42;
  const ir = 24;
  let angle = -Math.PI / 2;
  const total = pieSlices.reduce((s, p) => s + p.value, 0);

  const arcs = pieSlices.map((slice) => {
    const start = angle;
    const sweep = (slice.value / total) * 2 * Math.PI;
    angle += sweep;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle);
    const ix1 = cx + ir * Math.cos(start);
    const iy1 = cy + ir * Math.sin(start);
    const ix2 = cx + ir * Math.cos(angle);
    const iy2 = cy + ir * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    return {
      ...slice,
      d: `M${ix1},${iy1} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} L${ix2},${iy2} A${ir},${ir} 0 ${large} 0 ${ix1},${iy1} Z`,
    };
  });

  return (
    <svg viewBox="0 0 200 110" className="w-full">
      {arcs.map((arc) => (
        <path key={arc.label} d={arc.d} fill={arc.color} opacity="0.9" />
      ))}
      {/* Legend */}
      {pieSlices.map((s, i) => (
        <g key={`leg-${s.label}`} transform={`translate(130, ${10 + i * 22})`}>
          <rect width="10" height="10" rx="2" fill={s.color} />
          <text x="14" y="9" fontSize="9" fill="#94a3b8">{s.label} {s.value}%</text>
        </g>
      ))}
    </svg>
  );
}

const integrationBars = [60, 85, 45, 70, 90, 55, 75];

function IntegrationChart() {
  return (
    <div className="h-[110px] flex items-end justify-around gap-1.5 px-2">
      {integrationBars.map((height, idx) => (
        <motion.div
          key={idx}
          className="flex-1 relative rounded-t-md overflow-hidden"
          style={{ height: `${height}%` }}
          initial={{ scaleY: 0, originY: 1 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.08, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600 to-amber-400" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Project data ─── */

const projects = [
  {
    id: 'commercial',
    icon: TrendingUp,
    title: 'Dashboard comercial e funil de vendas',
    description:
      'Consolidação de indicadores de leads, conversão, pipeline e performance comercial em uma visão executiva e operacional.',
    ChartComponent: SalesChart,
    gradient: 'from-blue-600 to-cyan-500',
    darkBg: 'from-blue-950 to-slate-900',
    glow: 'rgba(59,130,246,0.3)',
    kpi: { value: '+32%', label: 'em conversão' },
  },
  {
    id: 'operational',
    icon: Users,
    title: 'Dashboard de operação e atendimento',
    description:
      'Monitoramento de produtividade, SLA, tempos de resposta, volume e qualidade do atendimento.',
    ChartComponent: OperationalChart,
    gradient: 'from-teal-500 to-emerald-500',
    darkBg: 'from-teal-950 to-slate-900',
    glow: 'rgba(20,184,166,0.3)',
    kpi: { value: '94%', label: 'SLA atingido' },
  },
  {
    id: 'marketing',
    icon: Target,
    title: 'Dashboard de marketing e performance',
    description:
      'Leitura de campanhas, canais, origem, aquisição e impacto nas etapas do funil.',
    ChartComponent: MarketingChart,
    gradient: 'from-purple-600 to-violet-500',
    darkBg: 'from-purple-950 to-slate-900',
    glow: 'rgba(147,51,234,0.3)',
    kpi: { value: '3x', label: 'mais leads' },
  },
  {
    id: 'integration',
    icon: Database,
    title: 'Integração de múltiplas fontes',
    description:
      'Centralização de dados vindos de CRM, planilhas, APIs e bases internas em uma única estrutura analítica.',
    ChartComponent: IntegrationChart,
    gradient: 'from-orange-500 to-amber-500',
    darkBg: 'from-orange-950 to-slate-900',
    glow: 'rgba(249,115,22,0.3)',
    kpi: { value: '15+', label: 'fontes integradas' },
  },
];

/* ─── Section ─── */

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
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
            Portfólio
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos e{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              aplicações
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exemplos de como os dados podem ser organizados para gerar visibilidade, controle e ação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <motion.div
                      className={`w-[52px] h-[52px] rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      style={{ boxShadow: `0 0 20px ${project.glow}` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1.5">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className={`rounded-xl bg-gradient-to-br ${project.darkBg} p-4 relative overflow-hidden`}>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.kpi.value}
                      </span>
                      <span className="text-xs text-slate-400">{project.kpi.label}</span>
                    </div>
                    <project.ChartComponent />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver mais projetos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
