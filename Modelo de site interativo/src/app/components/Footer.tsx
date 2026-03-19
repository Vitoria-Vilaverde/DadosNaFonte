import { motion } from 'motion/react';
import { Database, Mail, Linkedin, Instagram, BookOpen, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl">Dados na Fonte</span>
            </motion.div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Estrutura de dados, dashboards personalizados e indicadores que orientam decisão.
              Para empresas que precisam sair do escuro nos números.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <motion.a
                href="mailto:contato@dadosnafonte.com"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="E-mail"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
            {/* CTA shortcut */}
            <motion.button
              onClick={() => scrollToSection('contato')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar diagnóstico
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Navegação</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Projetos', id: 'projetos' },
                { label: 'Conteúdo', id: 'conteudo' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Contato', id: 'contato' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium text-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Cases & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Soluções</h3>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>Dashboards personalizados</li>
              <li>Integração de fontes</li>
              <li>Definição de KPIs</li>
              <li>Automação de relatórios</li>
              <li>Diagnóstico analítico</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} Dados na Fonte. Todos os direitos reservados.</p>
            <p>Estrutura + leitura + decisão.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}