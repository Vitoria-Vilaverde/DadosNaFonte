import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, BarChart3 } from 'lucide-react';

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-teal-600 to-blue-800">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.07) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 40%)
            `,
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Próximo passo
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Seus dados já existem.{' '}
            <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              Falta estrutura
            </span>{' '}
            para usá-los bem.
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Se você precisa de um dashboard que funciona de verdade, de dados que se conversam, ou
            de indicadores que orientam decisão — esse é o trabalho que eu faço. Vamos conversar
            sobre o seu cenário.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.button
              onClick={scrollToContact}
              className="group px-8 py-4 rounded-full bg-white text-blue-700 font-medium shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar diagnóstico
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg text-white font-medium border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero um dashboard
              <BarChart3 className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg text-white font-medium border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar sobre meu projeto
              <MessageCircle className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Trust line */}
          <motion.p
            className="text-blue-200/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Sem compromisso. O primeiro contato é uma conversa sobre o seu cenário.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
