import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ConsultationModal from './ConsultationModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/services', label: 'Услуги' },
    { to: '/cases', label: 'Кейсы' },
    { to: '/about', label: 'О специалисте' },
    { to: '/blog', label: 'Блог' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Zap" size={28} />
              DirectPro
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.to) ? 'text-primary' : 'hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                size="lg" 
                className="ml-4 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setConsultationOpen(true)}
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Консультация
              </Button>
            </div>

            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-medium ${
                    isActive(link.to) ? 'text-primary' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                size="lg" 
                className="w-full mt-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
              >
                Консультация
              </Button>
            </div>
          )}
        </nav>
      </header>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
};

export default Header;
