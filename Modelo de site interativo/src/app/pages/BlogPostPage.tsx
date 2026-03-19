import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router';
import { Clock, ArrowLeft, ArrowRight, Tag, TrendingDown, TrendingUp, ChevronRight } from 'lucide-react';
import { getBlogPost, blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 60%, rgba(20,184,166,0.1) 0%, transparent 55%),
                radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.1) 0%, transparent 55%)
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
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-slate-500 text-sm mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="hover:text-teal-400 transition-colors">Início</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-400 truncate max-w-[200px]">{post.category}</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-xs font-bold`}>
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} de leitura
              <span className="text-slate-600">•</span>
              {post.publishedAt}
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          <motion.p
            className="text-xl text-slate-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {post.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.07] border border-white/10 px-3 py-1.5 rounded-full">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KPI comparison bar */}
      <section className="px-6 -mt-8 relative z-10 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="p-7 border-r border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="font-bold text-gray-500 text-sm uppercase tracking-wider">Antes do projeto</span>
                </div>
                <div className="space-y-3">
                  {post.kpiBefore.map((kpi, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-500">{kpi.label}</span>
                      <span className="text-sm font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* After */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-700 text-sm uppercase tracking-wider">Depois do projeto</span>
                </div>
                <div className="space-y-3">
                  {post.kpiAfter.map((kpi, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-500">{kpi.label}</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent bg-green-50 px-3 py-1 rounded-full border border-green-100`}>
                        {kpi.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-gradient-to-b pl-6" style={{ borderImage: 'linear-gradient(to bottom, #2563eb, #14b8a6) 1' }}>
              <span className="relative">
                <span className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-500 rounded-full" />
                {post.content.intro}
              </span>
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">{section.heading}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg pl-12">{section.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            className="mt-14 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient}`} />
              <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-3">Conclusão</div>
              <p className="text-slate-200 leading-relaxed text-lg">{post.content.conclusion}</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Seu negócio tem um desafio parecido?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Vamos conversar sobre como estruturar seus dados e construir um painel que realmente funciona para o seu contexto.
            </p>
            <Link to="/#contato">
              <motion.button
                className={`px-8 py-3.5 rounded-full bg-gradient-to-r ${post.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar diagnóstico gratuito
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Post navigation */}
      {(prevPost || nextPost) && (
        <section className="px-6 pb-20 border-t border-gray-100 pt-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="group">
                  <motion.div
                    className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all bg-white"
                    whileHover={{ x: -4 }}
                  >
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <ArrowLeft className="w-4 h-4" />
                      Anterior
                    </div>
                    <div className={`h-1 w-12 bg-gradient-to-r ${prevPost.gradient} rounded-full mb-3`} />
                    <p className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {prevPost.title}
                    </p>
                  </motion.div>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="group ml-auto w-full">
                  <motion.div
                    className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all bg-white text-right"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center justify-end gap-2 text-gray-400 text-sm mb-3">
                      Próximo
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className={`h-1 w-12 bg-gradient-to-r ${nextPost.gradient} rounded-full mb-3 ml-auto`} />
                    <p className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {nextPost.title}
                    </p>
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
