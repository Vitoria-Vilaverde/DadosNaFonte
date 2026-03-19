import { motion } from 'motion/react';
import { BarChart3, Database, Target, Zap } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    number: '01',
    title: 'Dashboards personalizados',
    problem: 'Sua empresa toma decisões com números espalhados e visões inconsistentes.',
    description:
      'Construção de painéis executivos e operacionais sob medida — com a estrutura, hierarquia e contexto certos para cada perfil de usuário.',
    outcome: 'Um painel que o seu time abre todos os dias porque ele responde as perguntas certas.',
    gradient: 'from-blue-600 to-cyan-500',
    lightGradient: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    outcomeColor: 'text-blue-600',
    outcomeBg: 'bg-blue-50 border-blue-200',
  },
  {
    icon: Database,
    number: '02',
    title: 'Integração e modelagem de dados',
    problem: 'Dados fragmentados entre CRM, planilhas, APIs e sistemas que não se conversam.',
    description:
      'Conexão e centralização das fontes de dados em uma estrutura consistente, com modelagem e dicionário de indicadores para garantir confiabilidade.',
    outcome: 'Uma base única onde todos os números batem — e você sabe exatamente de onde cada um vem.',
    gradient: 'from-purple-600 to-violet-500',
    lightGradient: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    outcomeColor: 'text-purple-600',
    outcomeBg: 'bg-purple-50 border-purple-200',
  },
  {
    icon: Target,
    number: '03',
    title: 'Definição de KPIs e análise',
    problem: 'Você acompanha muitas métricas mas ainda não sabe se o negócio está indo bem.',
    description:
      'Estruturação dos indicadores certos para cada área: comercial, operação, marketing e financeiro. Com critério de cálculo, meta e contexto de leitura.',
    outcome: 'Menos métricas, mais clareza. Decisões orientadas por indicadores que realmente importam.',
    gradient: 'from-emerald-600 to-teal-500',
    lightGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    outcomeColor: 'text-emerald-600',
    outcomeBg: 'bg-emerald-50 border-emerald-200',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Automação de relatórios',
    problem: 'Horas toda semana consolidando planilhas para ter um número que já está desatualizado.',
    description:
      'Substituição de processos manuais por pipelines automatizados de dados: extração, transformação, carga e atualização recorrente dos indicadores.',
    outcome: 'Relatórios que chegam prontos, atualizados e confiáveis — sem ninguém precisar montar.',
    gradient: 'from-amber-500 to-orange-500',
    lightGradient: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    outcomeColor: 'text-amber-600',
    outcomeBg: 'bg-amber-50 border-amber-200',
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-20 px-6 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-50 to-transparent rounded-full blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
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
            Soluções
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que eu{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              entrego
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada serviço resolve um problema concreto de dados, visualização ou processo. Sem entrega
            genérica — com foco no que faz diferença na sua operação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className={`relative bg-gradient-to-br ${service.lightGradient} rounded-2xl p-8 border ${service.borderColor} border-opacity-50 group-hover:border-opacity-100 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                {/* Ghost number */}
                <div className={`absolute top-4 right-5 text-7xl font-bold ${service.textColor} opacity-[0.07] select-none pointer-events-none leading-none`}>
                  {service.number}
                </div>
                {/* Left accent */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b ${service.gradient} rounded-r-full opacity-50 group-hover:opacity-100 group-hover:top-2 group-hover:bottom-2 transition-all duration-300`} />

                <div className="relative z-10 pl-2 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`w-[52px] h-[52px] rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className={`text-xs font-bold ${service.textColor} opacity-60 mb-1 tracking-widest`}>
                        {service.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>

                  {/* Problem statement */}
                  <p className={`text-sm font-medium ${service.textColor} mb-3 italic`}>
                    "{service.problem}"
                  </p>

                  <p className="text-gray-600 leading-relaxed text-sm mb-5 flex-1">{service.description}</p>

                  {/* Outcome */}
                  <div className={`flex items-start gap-2 p-3 rounded-xl border ${service.outcomeBg} mt-auto`}>
                    <span className={`text-xs font-bold ${service.outcomeColor} uppercase tracking-wider flex-shrink-0 mt-0.5`}>Resultado →</span>
                    <p className={`text-xs ${service.outcomeColor} leading-relaxed`}>{service.outcome}</p>
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
            onClick={scrollToContact}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero entender qual solução faz sentido para o meu negócio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
