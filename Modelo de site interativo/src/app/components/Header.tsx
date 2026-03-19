import { motion } from 'motion/react';
import { Database, BookOpen, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';

interface HeaderProps {
  isBlog?: boolean;
}

export function Header({ isBlog = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
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

  const navLinks = [
    { label: 'Início', action: () => scrollToSection('inicio') },
    { label: 'Serviços', action: () => scrollToSection('servicos') },
    { label: 'Projetos', action: () => scrollToSection('projetos') },
    { label: 'Conteúdo', action: () => scrollToSection('conteudo') },
    { label: 'Sobre', action: () => scrollToSection('sobre') },
    { label: 'Contato', action: () => scrollToSection('contato') },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isBlog
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 flex items-center justify-center shadow-md">
            <Database className="w-5 h-5 text-white" />
          </div>
          <span className={`font-bold text-xl transition-colors ${scrolled || isBlog ? 'text-gray-900' : 'text-white'}`}>
            Dados na Fonte
          </span>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className={`text-sm transition-colors hover:text-blue-600 ${
                scrolled || isBlog ? 'text-gray-700' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Blog link */}
          <Link to="/blog">
            <motion.div
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-3 py-1.5 rounded-full border ${
                location.pathname.startsWith('/blog')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : scrolled || isBlog
                  ? 'text-blue-700 border-blue-200 bg-blue-50 hover:bg-blue-100'
                  : 'text-white border-white/30 bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Cases
            </motion.div>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => scrollToSection('contato')}
            className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar diagnóstico
          </motion.button>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled || isBlog ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-5 space-y-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50 text-sm"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-blue-700 font-medium py-2 text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Blog & Cases
          </Link>
          <button
            onClick={() => scrollToSection('contato')}
            className="w-full mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm"
          >
            Solicitar diagnóstico
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}