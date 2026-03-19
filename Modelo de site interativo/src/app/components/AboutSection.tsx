import { motion } from 'motion/react';
import { Database, Target, Lightbulb, BookOpen } from 'lucide-react';

const highlights = [
  {
    icon: Database,
    title: 'Dados e estrutura',
    description: 'Organização de bases dispersas, modelagem de indicadores e integração de fontes.',
    gradient: 'from-blue-600 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
  },
  {
    icon: Target,
    title: 'Visão de negócio',
    description: 'Entendimento do contexto operacional antes de qualquer solução técnica.',
    gradient: 'from-teal-600 to-emerald-500',
    bg: 'from-teal-50 to-emerald-50',
    border: 'border-teal-200',
  },
  {
    icon: Lightbulb,
    title: 'Clareza na leitura',
    description: 'Indicadores com critério, contexto e orientação — não só gráficos.',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
  },
  {
    icon: BookOpen,
    title: 'Entrega com autonomia',
    description: 'O time aprende a usar o painel. A solução funciona sem dependência contínua.',
    gradient: 'from-purple-600 to-violet-500',
    bg: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
  },
];

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/70 to-teal-100/70 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 rounded-2xl p-10 shadow-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(20,184,166,0.18) 0%, transparent 50%)
                  `,
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-lg flex items-center justify-center mb-6 border border-white/20">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Por trás do Dados na Fonte
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Sou analista de dados com foco em construção de soluções analíticas que fazem sentido
                  para o negócio — não apenas para quem trabalha com dados.
                </p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Minha abordagem começa pelo problema, passa pela estrutura dos dados e termina com
                  um painel que o time realmente usa para tomar decisão.
                </p>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-2xl opacity-40"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Sobre o trabalho
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dados dispersos em{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                visão acionável
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Trabalho com empresas que precisam transformar dados espalhados em planilhas, CRMs,
              APIs e sistemas em fluxos analíticos claros, confiáveis e úteis para o dia a dia.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Não sou apenas analista técnico — entendo o lado do negócio. A estrutura de dados
              que construo é pensada para responder as perguntas que quem decide precisa
              responder. Com método, contexto e sem complicação desnecessária.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br ${item.bg} border ${item.border} hover:shadow-md transition-all`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar sobre meu projeto
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
