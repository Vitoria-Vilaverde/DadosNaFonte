import { motion } from 'motion/react';
import { Database, BookOpen, Compass, Wrench } from 'lucide-react';

const differentials = [
  {
    icon: Database,
    title: 'Começa pela estrutura, não pela estética',
    description:
      'Antes de qualquer tela, há um trabalho de entender de onde os dados vêm, o que cada número significa e como garantir que eles sejam confiáveis.',
    contrast: 'Não: "vou fazer um dashboard bonito". Sim: "vou estruturar os dados para que o dashboard funcione."',
    gradient: 'from-blue-400 to-cyan-400',
    glow: 'rgba(59,130,246,0.5)',
  },
  {
    icon: BookOpen,
    title: 'Entrega com contexto e leitura',
    description:
      'Um painel entregue sem explicação é um painel que ninguém usa. A entrega inclui o critério de cada indicador, o que ele mede e como interpretá-lo no dia a dia.',
    contrast: 'Não: planilha com números. Sim: indicadores com contexto, critério e orientação de uso.',
    gradient: 'from-teal-400 to-emerald-400',
    glow: 'rgba(20,184,166,0.5)',
  },
  {
    icon: Compass,
    title: 'Visão de negócio, não só de dados',
    description:
      'O trabalho começa entendendo a operação, as metas e os problemas reais — não as tecnologias disponíveis. A ferramenta é escolhida depois.',
    contrast: 'Não: "uso Power BI porque é o que eu sei". Sim: "uso o que resolve o seu problema."',
    gradient: 'from-amber-400 to-orange-400',
    glow: 'rgba(245,158,11,0.5)',
  },
  {
    icon: Wrench,
    title: 'Personalizado, de verdade',
    description:
      'Nenhum projeto é baseado em template. Os indicadores, a estrutura e a lógica de visualização são construídos a partir da realidade específica de cada empresa.',
    contrast: 'Não: adaptar a empresa ao modelo. Sim: construir o modelo em torno da empresa.',
    gradient: 'from-purple-400 to-violet-400',
    glow: 'rgba(168,85,247,0.5)',
  },
];

const orbs = [
  { size: 300, x: '10%', y: '20%', color: 'rgba(20,184,166,0.07)', duration: 12 },
  { size: 400, x: '70%', y: '60%', color: 'rgba(59,130,246,0.07)', duration: 15 },
  { size: 200, x: '40%', y: '80%', color: 'rgba(245,158,11,0.05)', duration: 10 },
];

export function DifferentialsSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-teal-950">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            O que diferencia essa abordagem
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Estrutura + leitura +{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              decisão
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Dashboard bonito é o resultado. O que garante que ele funcione de verdade é a estrutura que
            vem antes: dados consistentes, indicadores bem definidos e clareza no que cada número
            significa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentials.map((differential, index) => (
            <motion.div
              key={differential.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${differential.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
              />

              <div className="relative bg-white/[0.06] backdrop-blur-xl rounded-2xl p-7 border border-white/10 group-hover:border-white/25 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${differential.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${differential.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    style={{ boxShadow: `0 0 20px ${differential.glow}` }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <differential.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-white text-lg leading-snug pt-1">{differential.title}</h3>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm mb-5 flex-1">{differential.description}</p>

                {/* Contrast line */}
                <div className="border-t border-white/[0.07] pt-4">
                  <p className={`text-xs leading-relaxed bg-gradient-to-r ${differential.gradient} bg-clip-text text-transparent font-medium`}>
                    {differential.contrast}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
