import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen, ArrowRight, Clock, TrendingUp, BarChart2, Database,
  Target, Zap, Link2, ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router';
import { blogPosts, type BlogPost } from '../data/blogPosts';

// ─── Category config ─────────────────────────────────────────────────────────
const categoryConfig: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  Cases: {
    label: 'Cases',
    color: 'text-blue-700',
    bg: 'bg-blue-100',
    icon: BarChart2,
  },
  Análise: {
    label: 'Análise',
    color: 'text-amber-700',
    bg: 'bg-amber-100',
    icon: TrendingUp,
  },
};

const tabs = ['Todos', 'Cases', 'Análise'];

// ─── Impact tag: pick the most striking kpiAfter item ────────────────────────
function getImpact(post: BlogPost) {
  return post.kpiAfter[post.kpiAfter.length - 1] ?? post.kpiAfter[0];
}

// ─── Category pill ───────────────────────────────────────────────────────────
function CategoryPill({ category }: { category: string }) {
  const cfg = categoryConfig[category] ?? { label: category, color: 'text-gray-700', bg: 'bg-gray-100', icon: BookOpen };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color}`}>
      <cfg.icon className="w-3 h-3" />
      {cfg.label}
    </span>
  );
}

// ─── Featured card (first / largest) ─────────────────────────────────────────
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} className="block group h-full">
      <motion.article
        className="relative h-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -4 }}
      >
        {/* Gradient header */}
        <div className={`bg-gradient-to-br ${post.gradient} p-7 relative overflow-hidden`}>
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{post.icon}</span>
              <CategoryPill category={post.category} />
              <span className="flex items-center gap-1 text-white/70 text-xs">
                <Clock className="w-3 h-3" />
                {post.readTime} de leitura
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:underline underline-offset-4 decoration-white/50">
              {post.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
              {post.subtitle}
            </p>
          </div>
        </div>

        {/* Before/After KPIs */}
        <div className="bg-white p-5 flex flex-col gap-3 flex-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Antes × Depois</p>
          <div className="grid grid-cols-2 gap-2">
            {post.kpiAfter.slice(0, 2).map((kpi, i) => (
              <div key={kpi.label} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100">
                <p className="text-[10px] text-gray-400 mb-1 leading-tight">{kpi.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-gray-400 line-through">{post.kpiBefore[i]?.value}</span>
                  <span className="mx-0.5 text-gray-300">→</span>
                  <span className="text-sm font-bold text-emerald-600">{kpi.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 mt-auto group-hover:gap-2.5 transition-all">
            Ler case completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

// ─── Regular card ─────────────────────────────────────────────────────────────
function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const impact = getImpact(post);
  const excerpt = post.content.intro.slice(0, 120) + '…';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link to={`/blog/${post.slug}`} className="block group h-full">
        <motion.article
          className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          whileHover={{ y: -4 }}
        >
          {/* Top gradient stripe */}
          <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />

          <div className="p-6 flex flex-col flex-1">
            {/* Meta */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <CategoryPill category={post.category} />
              <span className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock className="w-3 h-3" />
                {post.readTime} de leitura
              </span>
              <span className="ml-auto text-lg">{post.icon}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
              {excerpt}
            </p>

            {/* Impact chip + CTA */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Resultado</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {impact.value}
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
                Ler artigo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

// ─── Topics mini-bar ──────────────────────────────────────────────────────────
const topics = [
  { icon: BarChart2, label: 'Dashboards na prática', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, label: 'Análise de métricas', color: 'from-amber-500 to-orange-500' },
  { icon: Database, label: 'Estrutura de dados', color: 'from-emerald-500 to-teal-500' },
  { icon: Target, label: 'KPIs e indicadores', color: 'from-purple-500 to-violet-500' },
  { icon: Zap, label: 'Automação', color: 'from-green-500 to-emerald-600' },
  { icon: Link2, label: 'Integração de fontes', color: 'from-blue-700 to-teal-600' },
];

// ─── Main section ─────────────────────────────────────────────────────────────
export function ContentSection() {
  const [activeTab, setActiveTab] = useState('Todos');

  const filtered = activeTab === 'Todos'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeTab);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section id="conteudo" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle bg blobs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-100/40 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge + title */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-medium mb-5 border border-blue-200/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Conteúdo
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Cases e análises para{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  decisões mais inteligentes
                </span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                Projetos reais, estrutura de dados e leitura de indicadores — para quem quer entender
                o que está por trás de um painel que funciona de verdade.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-2 bg-white rounded-full p-1.5 border border-gray-200 shadow-sm self-start md:self-auto flex-shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-600"
                      layoutId="activeTabBg"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Topics bar */}
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-gray-300 transition-colors cursor-default"
              >
                <div className={`w-4 h-4 rounded bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <t.icon className="w-2.5 h-2.5 text-white" />
                </div>
                {t.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Content grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">Nenhum artigo encontrado.</div>
            ) : (
              <>
                {/* Featured + 2 side cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Featured */}
                  <div className="md:col-span-2">
                    {featured && <FeaturedCard post={featured} />}
                  </div>
                  {/* 2 stacked side cards */}
                  <div className="flex flex-col gap-6">
                    {rest.slice(0, 2).map((post, i) => (
                      <PostCard key={post.slug} post={post} index={i} />
                    ))}
                  </div>
                </div>

                {/* Remaining posts — 3 col grid */}
                {rest.length > 2 && (
                  <div className="grid md:grid-cols-3 gap-6">
                    {rest.slice(2).map((post, i) => (
                      <PostCard key={post.slug} post={post} index={i + 2} />
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA ── */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/blog">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Acessar todo o conteúdo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            Cases aplicados, análises práticas e guias de estrutura de dados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
