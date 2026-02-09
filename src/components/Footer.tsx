import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <Icon name="Zap" size={28} />
              DirectPro
            </div>
            <p className="text-sm opacity-80">
              Контекстная реклама, которая окупается
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services" className="hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/cases" className="hover:text-primary transition-colors">Кейсы</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">О специалисте</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@directpro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                @directpro_telegram
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Мессенджеры</h3>
            <div className="flex gap-3">
              <a href="https://t.me/directpro_telegram" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </a>
              <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
              </a>
              <a href="tel:+79991234567">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
          © 2024 DirectPro. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
