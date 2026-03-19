import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSpreadsheet, AlertTriangle, Building2,
  Megaphone, TrendingUp, LayoutDashboard,
  CheckCircle2, ArrowRight, GitMerge, AlertOctagon,
  BarChart2, Activity, Users, Clock,
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────
interface Scenario {
  id: string;
  icon: React.ElementType;
  situation: string;
  description: string;
  fit: string;
  gradient: string;
  lightBg: string;
  borderColor: string;
  textAccent: string;
  visual: React.ReactNode;
}

// ─── Mini visual mockups ────────────────────────────────────────────────────

/** 1 — Disconnected data sources fluxogram */
function FluxDataSources() {
  const sources = [
    { label: 'CRM', color: '#3b82f6', icon: '👥' },
    { label: 'Excel', color: '#22c55e', icon: '📊' },
    { label: 'ERP', color: '#8b5cf6', icon: '⚙️' },
    { label: 'Ads', color: '#f59e0b', icon: '📣' },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 select-none">
      {/* Header */}
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
        Suas fontes hoje
      </div>
      {/* Sources → pain */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-2 flex-1">
          {sources.map((s) => (
            <motion.div
              key={s.label}
              className="flex items-center gap-2 bg-white border border-dashed border-gray-300 rounded-lg px-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sources.indexOf(s) * 0.1 }}
            >
              <span className="text-sm">{s.icon}</span>
              <span className="text-sm font-medium text-gray-700">{s.label}</span>
              <div className="ml-auto w-2 h-2 rounded-full" style={{ background: s.color }} />
            </motion.div>
          ))}
        </div>
        {/* arrows */}
        <div className="flex flex-col items-center gap-4 px-2">
          {sources.map((_, i) => (
            <motion.div
              key={i}
              className="w-6 h-px bg-dashed border-t-2 border-dashed border-red-300 relative"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <span className="absolute -right-1 -top-1.5 text-red-400 text-xs">⇢</span>
            </motion.div>
          ))}
        </div>
        {/* fragmented hub */}
        <motion.div
          className="flex-shrink-0 w-28 bg-red-50 border-2 border-dashed border-red-300 rounded-xl p-3 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <AlertOctagon className="w-6 h-6 text-red-400" />
          <p className="text-xs text-red-500 text-center font-medium leading-snug">Sem visão unificada</p>
          <div className="text-xs text-gray-400 text-center">4 versões diferentes</div>
        </motion.div>
      </div>
      {/* Solution hint */}
      <motion.div
        className="mt-auto bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <GitMerge className="w-5 h-5 text-blue-500 flex-shrink-0" />
        <p className="text-xs text-blue-700 font-medium">Integração centraliza tudo em uma base única</p>
      </motion.div>
    </div>
  );
}

/** 2 — Dashboard with untrustworthy numbers */
function MockupUntrustworthyDashboard() {
  const kpis = [
    { label: 'Receita', v1: 'R$ 248K', v2: 'R$ 231K', source1: 'CRM', source2: 'ERP', ok: false },
    { label: 'Leads', v1: '1.240', v2: '1.189', source1: 'Ads', source2: 'CRM', ok: false },
    { label: 'Conversão', v1: '18%', v2: '21%', source1: 'Sheets', source2: 'BI', ok: false },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 select-none">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
        Dashboard — dados divergentes
      </div>
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          className="bg-white border border-red-100 rounded-xl p-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-gray-700">{kpi.label}</span>
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-red-50 rounded-lg p-2">
              <p className="text-xs text-red-400 mb-0.5">{kpi.source1}</p>
              <p className="font-bold text-red-600 text-sm">{kpi.v1}</p>
            </div>
            <div className="flex items-center text-gray-300 text-xs px-1">≠</div>
            <div className="flex-1 bg-orange-50 rounded-lg p-2">
              <p className="text-xs text-orange-400 mb-0.5">{kpi.source2}</p>
              <p className="font-bold text-orange-600 text-sm">{kpi.v2}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div
        className="mt-auto bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-3 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
        <p className="text-xs text-teal-700 font-medium">Com modelagem correta, um único número confiável por métrica</p>
      </motion.div>
    </div>
  );
}

/** 3 — Executive unified view */
function MockupExecutiveDashboard() {
  const areas = [
    { label: 'Comercial', value: '+12%', trend: 'up', color: 'bg-blue-500' },
    { label: 'Operação', value: '94% SLA', trend: 'up', color: 'bg-teal-500' },
    { label: 'Marketing', value: 'R$ 3.2 ROAS', trend: 'neutral', color: 'bg-purple-500' },
  ];
  const bars = [55, 72, 48, 88, 65, 91, 70];
  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 select-none">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Painel executivo unificado</span>
        <span className="text-[10px] text-teal-500 font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse inline-block" />
          Ao vivo
        </span>
      </div>
      {/* KPI row */}
      <div className="grid grid-cols-3 gap-2">
        {areas.map((a, i) => (
          <motion.div
            key={a.label}
            className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`w-6 h-1 ${a.color} rounded-full mb-1.5`} />
            <p className="text-[10px] text-gray-500 mb-0.5">{a.label}</p>
            <p className="text-sm font-bold text-gray-900">{a.value}</p>
          </motion.div>
        ))}
      </div>
      {/* Mini chart */}
      <motion.div
        className="bg-slate-900 rounded-xl p-3 flex-1 flex flex-col justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-[10px] text-slate-500 mb-2">Performance consolidada — últimos 7 dias</p>
        <div className="flex items-end gap-1.5 h-14">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-teal-400"
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.07, ease: 'easeOut' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/** 4 — Marketing attribution funnel */
function MockupMarketingFunnel() {
  const stages = [
    { label: 'Impressões', value: '45.2K', pct: 100, color: 'from-purple-400 to-violet-500' },
    { label: 'Cliques', value: '3.8K', pct: 62, color: 'from-blue-400 to-cyan-500' },
    { label: 'Leads', value: '812', pct: 40, color: 'from-teal-400 to-emerald-500' },
    { label: 'Oportunidades', value: '214', pct: 24, color: 'from-amber-400 to-orange-500' },
    { label: 'Clientes', value: '58', pct: 12, color: 'from-green-500 to-emerald-600' },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4 select-none">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
        Funil de marketing — atribuição
      </div>
      {stages.map((s, i) => (
        <motion.div
          key={s.label}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <span className="text-[10px] text-gray-500 w-20 flex-shrink-0">{s.label}</span>
          <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${s.color} rounded-full flex items-center justify-end pr-2`}
              initial={{ width: 0 }}
              animate={{ width: `${s.pct}%` }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs font-bold text-gray-700 w-10 text-right">{s.value}</span>
        </motion.div>
      ))}
      <motion.div
        className="mt-auto bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-3 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Megaphone className="w-4 h-4 text-purple-500 flex-shrink-0" />
        <p className="text-xs text-purple-700 font-medium">Qual canal gerou os 58 clientes? Com integração, você sabe.</p>
      </motion.div>
    </div>
  );
}

/** 5 — Sales pipeline dashboard */
function MockupSalesPipeline() {
  const pipeline = [
    { stage: 'Prospecção', count: 42, value: 'R$ 380K', color: 'bg-blue-400' },
    { stage: 'Qualificado', count: 27, value: 'R$ 290K', color: 'bg-cyan-400' },
    { stage: 'Proposta', count: 14, value: 'R$ 185K', color: 'bg-teal-400' },
    { stage: 'Negociação', count: 8, value: 'R$ 122K', color: 'bg-emerald-400' },
    { stage: 'Fechado', count: 3, value: 'R$ 48K', color: 'bg-green-500' },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2 p-4 select-none">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pipeline comercial</span>
        <span className="text-xs font-bold text-emerald-600">R$ 1,025K total</span>
      </div>
      {pipeline.map((p, i) => (
        <motion.div
          key={p.stage}
          className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-gray-100"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${p.color} flex-shrink-0`} />
          <span className="text-xs text-gray-600 flex-1">{p.stage}</span>
          <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5 font-medium text-gray-700">
            {p.count} deals
          </span>
          <span className="text-xs font-bold text-gray-900 w-16 text-right">{p.value}</span>
        </motion.div>
      ))}
      <motion.div
        className="mt-auto flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex-1 bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">
          <p className="text-[10px] text-amber-600">Em risco</p>
          <p className="font-bold text-amber-700 text-sm">5 deals</p>
        </div>
        <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-2 text-center">
          <p className="text-[10px] text-red-500">Parados +15 dias</p>
          <p className="font-bold text-red-600 text-sm">8 deals</p>
        </div>
      </motion.div>
    </div>
  );
}

/** 6 — Operational real-time dashboard */
function MockupOperational() {
  const metrics = [
    { label: 'SLA Atendimento', value: '94%', target: '95%', ok: false, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { label: 'Tempo médio (min)', value: '4.2', target: '≤ 5', ok: true, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { label: 'Volume abertos', value: '187', target: '< 200', ok: true, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { label: 'Backlog crítico', value: '23', target: '< 10', ok: false, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
  ];
  const sparkline = [60, 75, 65, 88, 72, 90, 85, 94];
  return (
    <div className="w-full h-full flex flex-col gap-2.5 p-4 select-none">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dashboard operacional</span>
        <span className="text-[10px] text-teal-500 font-medium flex items-center gap-1">
          <Activity className="w-3 h-3" /> Tempo real
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className={`${m.bg} ${m.border} border rounded-xl p-2.5`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] text-gray-500 leading-tight">{m.label}</p>
              {m.ok
                ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                : <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              }
            </div>
            <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
            <p className="text-[10px] text-gray-400">Meta: {m.target}</p>
          </motion.div>
        ))}
      </div>
      {/* Sparkline */}
      <motion.div
        className="bg-slate-900 rounded-xl p-3 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] text-slate-400">SLA — últimas 8 horas</p>
          <Users className="w-3.5 h-3.5 text-slate-500" />
        </div>
        <div className="flex items-end gap-1 h-8">
          {sparkline.map((h, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-sm ${h >= 95 ? 'bg-emerald-500' : h >= 90 ? 'bg-teal-500' : 'bg-amber-500'}`}
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.6 + i * 0.06 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Scenarios data ──────────────────────────────────────────────────────────
const scenarios: Scenario[] = [
  {
    id: 'planilhas',
    icon: FileSpreadsheet,
    situation: 'Seus dados vivem em planilhas',
    description: 'Cada área tem a sua versão. No fechamento do mês alguém passa horas cruzando tudo no Excel — e os números ainda não batem.',
    fit: 'Integração e automação de dados',
    gradient: 'from-blue-500 to-cyan-500',
    lightBg: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-300',
    textAccent: 'text-blue-600',
    visual: <FluxDataSources />,
  },
  {
    id: 'desconfianca',
    icon: AlertTriangle,
    situation: 'Você tem dashboard, mas não confia nos números',
    description: 'Os gráficos existem, mas quando alguém questiona um número, a reunião trava. Falta rastreabilidade da origem.',
    fit: 'Diagnóstico e reestruturação analítica',
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-300',
    textAccent: 'text-amber-600',
    visual: <MockupUntrustworthyDashboard />,
  },
  {
    id: 'lideranca',
    icon: Building2,
    situation: 'A liderança não tem visão única da operação',
    description: 'Cada área apresenta seu relatório separado. Os números às vezes não batem. A decisão executiva depende de quem compilou mais rápido.',
    fit: 'Painel executivo unificado',
    gradient: 'from-purple-500 to-violet-500',
    lightBg: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-300',
    textAccent: 'text-purple-600',
    visual: <MockupExecutiveDashboard />,
  },
  {
    id: 'marketing',
    icon: Megaphone,
    situation: 'Marketing não sabe o impacto real das campanhas',
    description: 'Você vê cliques e leads, mas não consegue traçar o caminho do lead ao cliente — nem saber qual canal realmente gerou receita.',
    fit: 'Dashboard de marketing e funil integrado',
    gradient: 'from-rose-500 to-pink-500',
    lightBg: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-300',
    textAccent: 'text-rose-600',
    visual: <MockupMarketingFunnel />,
  },
  {
    id: 'comercial',
    icon: TrendingUp,
    situation: 'O comercial acompanha o funil no olhômetro',
    description: 'Reuniões de pipeline baseadas em memória ou relatórios exportados na véspera. Não há visibilidade em tempo real do que está em risco.',
    fit: 'Dashboard comercial e funil de vendas',
    gradient: 'from-emerald-500 to-teal-500',
    lightBg: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-300',
    textAccent: 'text-emerald-600',
    visual: <MockupSalesPipeline />,
  },
  {
    id: 'operacao',
    icon: LayoutDashboard,
    situation: 'Você quer monitorar operação em tempo real',
    description: 'SLA, volume, produtividade — tudo existe em sistemas, mas ninguém vê em tempo real. Os problemas aparecem depois que já viraram incêndio.',
    fit: 'Dashboard operacional e de atendimento',
    gradient: 'from-teal-500 to-cyan-500',
    lightBg: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-300',
    textAccent: 'text-teal-600',
    visual: <MockupOperational />,
  },
];

// ─── Main component ──────────────────────────────────────────────────────────
export function AudienceSection() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const activeScenario = scenarios.find((s) => s.id === activeId) ?? scenarios[0];

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600" />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-teal-100/50 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Você se reconhece aqui?
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Para empresas que precisam{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              sair do escuro
            </span>{' '}
            nos dados
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Selecione o cenário mais próximo da sua realidade — e veja como a solução se aplica ao
            seu contexto.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-6 items-start">
          {/* ── Left: navigation tabs ── */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {scenarios.map((s) => {
              const isActive = s.id === activeId;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`relative text-left rounded-xl px-4 py-3.5 border transition-all duration-200 group overflow-hidden ${
                    isActive
                      ? `bg-gradient-to-br ${s.lightBg} ${s.borderColor} shadow-md`
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                  }`}
                  whileHover={{ x: isActive ? 0 : 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      className={`absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b ${s.gradient} rounded-r-full`}
                      layoutId="activeBar"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                  <div className="flex items-center gap-3 pl-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive
                        ? `bg-gradient-to-br ${s.gradient} shadow-md`
                        : 'bg-gray-200 group-hover:bg-gray-300'
                    }`}>
                      <s.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-snug ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                        {s.situation}
                      </p>
                      {isActive && (
                        <motion.p
                          className={`text-xs mt-0.5 ${s.textAccent} font-medium`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.2 }}
                        >
                          → {s.fit}
                        </motion.p>
                      )}
                    </div>
                    {isActive && (
                      <ArrowRight className={`w-4 h-4 flex-shrink-0 ${s.textAccent}`} />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── Right: detail panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative"
            >
              <div className={`rounded-2xl border-2 ${activeScenario.borderColor} overflow-hidden shadow-lg`}>
                {/* Card top gradient strip */}
                <div className={`h-1.5 bg-gradient-to-r ${activeScenario.gradient}`} />

                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left: text */}
                  <div className={`bg-gradient-to-br ${activeScenario.lightBg} p-7 flex flex-col justify-between`}>
                    <div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeScenario.gradient} flex items-center justify-center mb-5 shadow-md`}>
                        <activeScenario.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                        {activeScenario.situation}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {activeScenario.description}
                      </p>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border ${activeScenario.borderColor} text-xs font-bold ${activeScenario.textAccent} shadow-sm`}>
                        <ArrowRight className="w-3 h-3" />
                        {activeScenario.fit}
                      </div>
                    </div>
                    <motion.button
                      onClick={scrollToContact}
                      className={`mt-6 flex items-center gap-2 text-sm font-semibold ${activeScenario.textAccent} hover:underline underline-offset-4`}
                      whileHover={{ x: 4 }}
                    >
                      Falar sobre esse cenário
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Right: visual mockup */}
                  <div className="bg-white border-l border-gray-100 min-h-[320px] relative overflow-hidden">
                    {/* Mockup label */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">
                        visualização ilustrativa
                      </span>
                    </div>
                    {activeScenario.visual}
                  </div>
                </div>
              </div>

              {/* Mobile nav dots */}
              <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
                {scenarios.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      s.id === activeId ? 'w-6 bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA bottom */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 mb-4 text-sm">Identificou o seu cenário?</p>
          <motion.button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero estruturar meus dados
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
