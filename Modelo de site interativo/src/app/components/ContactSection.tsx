import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, Send, CheckCircle, AlertCircle, Loader2,
  MessageCircle, Star, Briefcase, Users, ArrowRight,
  Linkedin, MapPin,
} from 'lucide-react';
import { useState } from 'react';
import profilePhoto from 'figma:asset/213d34ee4c4acef2f453166ebb7338292a16e03c.png';

// ─── Config ───────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '5511999999999';

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string; company: string; email: string; whatsapp: string;
  demandType: string; challenge: string; sources: string; urgency: string; need: string;
}
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildWhatsAppMessage(data: FormData): string {
  const lines = [
    `Olá! Vim pelo site *Dados na Fonte* e tenho interesse em um projeto.`,
    ``,
    `*Sobre mim:*`,
    `👤 Nome: ${data.name}`,
    `🏢 Empresa: ${data.company}`,
    `📧 E-mail: ${data.email}`,
    data.whatsapp ? `📱 WhatsApp: ${data.whatsapp}` : null,
    ``,
    `*Sobre o projeto:*`,
    `🎯 Tipo de demanda: ${data.demandType || 'Não informado'}`,
    `⚡ Urgência: ${data.urgency || 'Não informado'}`,
    `🔧 Principal desafio: ${data.challenge || 'Não informado'}`,
    data.sources ? `📊 Fontes de dados: ${data.sources}` : null,
    data.need ? `💬 Mais detalhes: ${data.need}` : null,
  ].filter(Boolean).join('\n');
  return encodeURIComponent(lines);
}

// ─── Profile panel ────────────────────────────────────────────────────────────
function ProfilePanel() {
  const stats = [
    { icon: Briefcase, value: '50+', label: 'Projetos entregues' },
    { icon: Users, value: '30+', label: 'Empresas atendidas' },
    { icon: Star, value: '8+', label: 'Anos de experiência' },
  ];

  const tags = ['Power BI', 'Looker Studio', 'BigQuery', 'Python', 'SQL', 'ETL'];

  return (
    <div className="relative h-full flex flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 lg:p-10 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 flex flex-col h-full gap-7">
        {/* Photo + name */}
        <motion.div
          className="flex flex-col items-start gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Photo frame */}
          <div className="relative">
            <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white/10 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Fundador Dados na Fonte"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg border-2 border-slate-900">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-1">Fundador & Consultor</h3>
            <p className="text-blue-300 font-medium text-sm mb-2">Dados na Fonte</p>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <MapPin className="w-3 h-3" />
              Brasil · Remoto
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-slate-300 text-sm leading-relaxed">
            Ajudo empresas a transformar dados espalhados em decisões melhores. Trabalho desde a
            estruturação da base até o painel que o gestor abre toda manhã — com foco em clareza,
            confiabilidade e adoção real.
          </p>
        </motion.div>

        {/* Stack tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-slate-300 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-white/5 border border-white/8 rounded-xl p-3 text-center"
            >
              <s.icon className="w-4 h-4 text-teal-400 mx-auto mb-1.5" />
              <p className="text-lg font-bold text-white">{s.value}</p>
              <p className="text-[10px] text-slate-400 leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Trust quote */}
        <motion.blockquote
          className="border-l-2 border-teal-500 pl-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-400 text-sm italic leading-relaxed">
            "Não vendo software. Entrego clareza sobre o que os seus números estão dizendo — e o que
            você deve fazer com eles."
          </p>
        </motion.blockquote>

        {/* Links */}
        <motion.div
          className="mt-auto flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="mailto:contato@dadosnafonte.com"
            className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
              <Mail className="w-4 h-4 text-teal-400" />
            </div>
            contato@dadosnafonte.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
              <Linkedin className="w-4 h-4 text-blue-400" />
            </div>
            LinkedIn
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '', company: '', email: '', whatsapp: '',
    demandType: '', challenge: '', sources: '', urgency: '', need: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 800));
      const message = buildWhatsAppMessage(formData);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', company: '', email: '', whatsapp: '', demandType: '', challenge: '', sources: '', urgency: '', need: '' });
    setStatus('idle');
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400 bg-white text-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <section id="contato" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            <MessageCircle className="w-3.5 h-3.5" />
            Vamos conversar
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Fale com quem vai{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              cuidar do seu projeto
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário e a conversa começa pelo WhatsApp — direto, sem intermediários e
            sem enrolação.
          </p>
        </motion.div>

        {/* Split card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* ── Left: Profile ── */}
            <ProfilePanel />

            {/* ── Right: Form ── */}
            <div className="relative">
              {/* Top gradient stripe */}
              <div className="h-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500" />

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {/* Success */}
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      className="text-center py-16"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp aberto!</h3>
                      <p className="text-gray-600 mb-2 max-w-md mx-auto">
                        Sua mensagem já está formatada. Basta enviar pelo WhatsApp para iniciarmos a
                        conversa.
                      </p>
                      <p className="text-sm text-gray-400 mb-8">
                        Se a janela não abriu, verifique se o pop-up foi bloqueado pelo navegador.
                      </p>
                      <motion.button
                        onClick={resetForm}
                        className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all font-medium"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      >
                        Enviar nova mensagem
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Error */}
                  {status === 'error' && (
                    <motion.div
                      key="error"
                      className="text-center py-16"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <AlertCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Algo deu errado</h3>
                      <p className="text-gray-600 mb-8">
                        Não foi possível abrir o WhatsApp automaticamente. Tente novamente ou entre em
                        contato diretamente pelo e-mail.
                      </p>
                      <motion.button
                        onClick={() => setStatus('idle')}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      >
                        Tentar novamente
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Form */}
                  {(status === 'idle' || status === 'sending') && (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Row 1 */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className={labelClass}>Nome *</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Seu nome completo" />
                        </div>
                        <div>
                          <label htmlFor="company" className={labelClass}>Empresa *</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className={inputClass} placeholder="Nome da empresa" />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className={labelClass}>E-mail *</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="seu@email.com" />
                        </div>
                        <div>
                          <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
                          <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClass} placeholder="(11) 99999-9999" />
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="demandType" className={labelClass}>Tipo de demanda *</label>
                          <select id="demandType" name="demandType" value={formData.demandType} onChange={handleChange} required className={inputClass}>
                            <option value="">Selecione</option>
                            <option>Dashboard personalizado</option>
                            <option>Integração de fontes de dados</option>
                            <option>Definição e estruturação de KPIs</option>
                            <option>Automação de relatórios</option>
                            <option>Diagnóstico analítico</option>
                            <option>Ainda não sei — quero conversar</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="urgency" className={labelClass}>Urgência do projeto</label>
                          <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className={inputClass}>
                            <option value="">Selecione</option>
                            <option>Imediato — preciso resolver agora</option>
                            <option>Em breve — próximas semanas</option>
                            <option>Planejado — próximos 1-3 meses</option>
                            <option>Explorando — ainda estou avaliando</option>
                          </select>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div>
                        <label htmlFor="challenge" className={labelClass}>Principal desafio hoje *</label>
                        <select id="challenge" name="challenge" value={formData.challenge} onChange={handleChange} required className={inputClass}>
                          <option value="">Selecione</option>
                          <option>Não temos dashboard ou visão consolidada</option>
                          <option>Temos dashboard, mas não confiamos nos números</option>
                          <option>Os dados estão espalhados em sistemas e planilhas</option>
                          <option>Perdemos muito tempo em relatórios manuais</option>
                          <option>Não sabemos quais indicadores realmente importam</option>
                          <option>Precisamos integrar fontes de dados diferentes</option>
                        </select>
                      </div>

                      {/* Sources */}
                      <div>
                        <label htmlFor="sources" className={labelClass}>Quais ferramentas/fontes você usa hoje?</label>
                        <input type="text" id="sources" name="sources" value={formData.sources} onChange={handleChange} className={inputClass} placeholder="Ex: CRM, Google Sheets, Excel, Ads, ERP..." />
                      </div>

                      {/* Need */}
                      <div>
                        <label htmlFor="need" className={labelClass}>Contexto adicional</label>
                        <textarea id="need" name="need" value={formData.need} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="Descreva brevemente o seu cenário, o que você quer monitorar ou qualquer detalhe relevante..." />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                        whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      >
                        {status === 'sending' ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Preparando mensagem...</>
                        ) : (
                          <><MessageCircle className="w-5 h-5" /> Continuar no WhatsApp</>
                        )}
                      </motion.button>

                      <div className="flex items-center justify-center gap-2 pt-1">
                        <Send className="w-3.5 h-3.5 text-gray-400" />
                        <p className="text-xs text-gray-400 text-center">
                          Você será redirecionado ao WhatsApp com as informações formatadas. Retorno em até 24h.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom email link */}
        <motion.p
          className="text-center mt-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Prefere e-mail?{' '}
          <a href="mailto:contato@dadosnafonte.com" className="text-blue-600 hover:text-teal-600 transition-colors font-medium underline underline-offset-2">
            contato@dadosnafonte.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
