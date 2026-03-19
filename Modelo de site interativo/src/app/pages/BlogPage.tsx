import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const categoryColors: Record<string, string> = {
  Cases: 'from-blue-500 to-teal-500',
  Análise: 'from-amber-500 to-orange-500',
  Dashboards: 'from-purple-500 to-violet-500',
};

const floatingNumbers = [
  { text: '+32%', x: '6%', y: '18%', delay: 0 },
  { text: 'SQL', x: '88%', y: '12%', delay: 0.6 },
  { text: 'KPI', x: '92%', y: '55%', delay: 1.2 },
  { text: '12h→0', x: '4%', y: '72%', delay: 0.9 },
  { text: 'ETL', x: '50%', y: '90%', delay: 0.4 },
];

export function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 60%, rgba(20,184,166,0.12) 0%, transparent 55%),
                radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.12) 0%, transparent 55%)
              `,
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          {floatingNumbers.map((n, i) => (
            <motion.div
              key={i}
              className="absolute font-bold text-white/[0.05] text-2xl select-none pointer-events-none"
              style={{ left: n.x, top: n.y }}
              animate={{ y: [0, -18, 0], opacity: [0.04, 0.09, 0.04] }}
              transition={{ duration: 6 + i, repeat: Infinity, delay: n.delay }}
            >
              {n.text}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Cases & Análises
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Blog &{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Cases
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Histórias reais de como estruturamos dados, construímos dashboards e transformamos
            relatórios manuais em fluxos analíticos que funcionam de verdade.
          </motion.p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 -mt-12 relative z-10 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to={`/blog/${featured.slug}`} className="block group">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:shadow-[0_30px_80px_rgba(59,130,246,0.15)] transition-all duration-500">
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${featured.gradient}`} />

                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left — content */}
                  <div className="p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${featured.gradient} text-white text-xs font-bold`}>
                          {featured.category}
                        </span>
                        <span className="text-xs text-gray-400 font-medium bg-blue-50 px-3 py-1 rounded-full">
                          Destaque
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors leading-snug">
                        {featured.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">{featured.subtitle}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featured.tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {featured.readTime} de leitura
                        <span className="text-gray-300">•</span>
                        {featured.publishedAt}
                      </div>
                      <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${featured.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                        Ler case
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Right — KPIs visual */}
                  <div className={`bg-gradient-to-br from-slate-900 to-blue-950 p-10 flex flex-col justify-center gap-6`}>
                    <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">Impacto do projeto</p>
                    <div className="space-y-4">
                      {featured.kpiAfter.map((kpi, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between bg-white/[0.06] rounded-xl px-5 py-3 border border-white/10"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <span className="text-slate-400 text-sm">{kpi.label}</span>
                          <span className={`font-bold text-sm bg-gradient-to-r ${featured.gradient} bg-clip-text text-transparent`}>
                            {kpi.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Todos os artigos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* Gradient top bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />

                    {/* Icon header */}
                    <div className={`bg-gradient-to-br ${post.gradient} px-6 py-8 flex items-center justify-between`}>
                      <div className="text-5xl">{post.icon}</div>
                      <span className="text-white/80 text-xs font-bold bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{post.subtitle}</p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                          <span className="text-gray-300">•</span>
                          {post.publishedAt}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
