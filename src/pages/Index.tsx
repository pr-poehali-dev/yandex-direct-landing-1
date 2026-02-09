import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import ConsultationModal from '@/components/ConsultationModal';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Zap" size={28} />
              DirectPro
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-primary">Главная</Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</Link>
              <Link to="/cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О специалисте</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
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
              <Link to="/" className="block text-sm font-medium">Главная</Link>
              <Link to="/services" className="block text-sm font-medium">Услуги</Link>
              <Link to="/cases" className="block text-sm font-medium">Кейсы</Link>
              <Link to="/about" className="block text-sm font-medium">О специалисте</Link>
              <Link to="/blog" className="block text-sm font-medium">Блог</Link>
              <Link to="/contacts" className="block text-sm font-medium">Контакты</Link>
              <Button 
                size="lg" 
                className="w-full mt-4"
                onClick={() => setConsultationOpen(true)}
              >
                Консультация
              </Button>
            </div>
          )}
        </nav>
      </header>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/122b9c99-f21f-4c19-afbd-51883f3f9fc8/files/3bb1970c-614c-4c8d-8f9d-097e85add181.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-bold text-primary mb-8 shadow-lg animate-bounce-slow">
              <Icon name="TrendingUp" size={20} />
              ROI +240% в среднем за 3 месяца
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              Контекстная реклама,<br />которая ОКУПАЕТСЯ
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Настройка Яндекс Директ под ключ. <span className="text-primary font-bold">Без переплат за клики.</span><br />
              Только целевые лиды. <span className="text-secondary font-bold">Гарантия результата.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="text-xl px-10 py-8 h-auto shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
                onClick={() => setConsultationOpen(true)}
              >
                <Icon name="Rocket" size={24} className="mr-3" />
                Получить расчёт
              </Button>
              <Link to="/cases">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-xl px-10 py-8 h-auto border-2 hover:border-primary hover:scale-105 transition-all"
                >
                  <Icon name="BarChart3" size={24} className="mr-3" />
                  Кейсы с цифрами
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '50+', label: 'Успешных проектов', icon: 'Award' },
                { value: '-67%', label: 'Снижение CPA', icon: 'TrendingDown' },
                { value: '24ч', label: 'До запуска рекламы', icon: 'Clock' }
              ].map((stat, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon name={stat.icon} size={32} className="text-primary group-hover:text-white" />
                    </div>
                    <div className="text-5xl font-extrabold text-primary mb-3">{stat.value}</div>
                    <div className="text-lg font-medium text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Почему не агентство?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Работа напрямую = меньше посредников = больше внимания вашему проекту
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Агентство',
                items: [
                  { text: 'Менеджер → специалист → менеджер', bad: true },
                  { text: 'Ответ 2-3 дня, через тикеты', bad: true },
                  { text: 'Работают 3-5 человек одновременно', bad: true },
                  { text: 'Наценка 30-50% на услуги', bad: true },
                  { text: 'Шаблонные решения под всех', bad: true }
                ]
              },
              {
                title: 'Я',
                items: [
                  { text: 'Прямой контакт со специалистом', bad: false },
                  { text: 'Ответ в течение 2 часов', bad: false },
                  { text: 'Работаю лично над проектом', bad: false },
                  { text: 'Честная цена без накруток', bad: false },
                  { text: 'Индивидуальная стратегия', bad: false }
                ]
              }
            ].map((column, index) => (
              <Card key={index} className={`border-2 ${index === 1 ? 'border-primary shadow-xl' : ''}`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-6 ${index === 1 ? 'text-primary' : ''}`}>
                    {column.title}
                  </h3>
                  <ul className="space-y-4">
                    {column.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon 
                          name={item.bad ? "X" : "Check"} 
                          size={20} 
                          className={`mt-0.5 flex-shrink-0 ${item.bad ? 'text-destructive' : 'text-primary'}`} 
                        />
                        <span className={item.bad ? 'text-muted-foreground line-through' : 'font-medium'}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Что входит в работу</h2>
            <p className="text-xl text-muted-foreground">От аудита до масштабирования</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Search', title: 'Аудит текущей рекламы', desc: 'Анализ конкурентов и поиск точек роста' },
              { icon: 'Target', title: 'Сбор семантики', desc: 'Только целевые запросы, никакой воды' },
              { icon: 'FileText', title: 'Написание объявлений', desc: 'Тестирую 3-5 вариантов каждого' },
              { icon: 'Settings', title: 'Настройка кампаний', desc: 'Поиск + РСЯ + ретаргетинг' },
              { icon: 'BarChart', title: 'Аналитика и цели', desc: 'Метрика, коллтрекинг, отчёты' },
              { icon: 'TrendingUp', title: 'Оптимизация', desc: 'Еженедельно снижаю CPA' }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Все услуги и цены
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/122b9c99-f21f-4c19-afbd-51883f3f9fc8/files/0b43c3c1-59c4-4f16-82f0-cd8efa5002d5.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Хватит сливать бюджет впустую
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Бесплатный аудит вашей рекламы + план оптимизации за 24 часа
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-xl px-10 py-8 h-auto shadow-2xl hover:scale-105 transition-all"
                onClick={() => setConsultationOpen(true)}
              >
                <Icon name="Gift" size={24} className="mr-3" />
                Получить аудит бесплатно
              </Button>
              <Link to="/cases">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-xl px-10 py-8 h-auto bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20 hover:scale-105 transition-all"
                >
                  <Icon name="Eye" size={24} className="mr-3" />
                  Смотреть кейсы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2024 DirectPro. Все права защищены.
          </div>
        </div>
      </footer>

      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </div>
  );
};

export default Index;
