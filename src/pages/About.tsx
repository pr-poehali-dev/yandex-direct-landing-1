import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">DirectPro</Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</Link>
              <Link to="/cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</Link>
              <Link to="/about" className="text-sm font-medium text-primary">О специалисте</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Новости</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
              <Button size="lg" className="ml-4">Получить консультацию</Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Привет! Я Алексей</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Специалист по контекстной рекламе с 7-летним опытом. Работал в агентствах, вёл проекты на 5+ млн₽/мес. 
                  Устал от бюрократии и решил работать напрямую с бизнесом.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Для меня главное — не просто запустить рекламу, а сделать так, чтобы она окупалась и приносила прибыль. 
                  Без воды, без отчётов ради отчётов. Только цифры и результат.
                </p>
                <Button size="lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                  <Icon name="User" size={120} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Опыт</h2>
            
            <div className="space-y-8">
              {[
                {
                  period: "2017-2020",
                  title: "Performance-маркетолог в digital-агентстве",
                  description: "Вёл 20+ проектов одновременно в нишах e-commerce, финансы, недвижимость. Научился работать быстро и эффективно.",
                  icon: "Briefcase"
                },
                {
                  period: "2020-2022",
                  title: "Senior-специалист по контекстной рекламе",
                  description: "Управлял бюджетами до 8 млн₽/мес. Команда из 4 человек. Понял, что лучший результат — когда работаешь сам.",
                  icon: "TrendingUp"
                },
                {
                  period: "2022-сейчас",
                  title: "Фрилансер / Независимый специалист",
                  description: "Работаю напрямую с бизнесом. 15+ успешных проектов. Средний рост ROI — 240%. Никаких посредников и бюрократии.",
                  icon: "Zap"
                }
              ].map((experience, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                          <Icon name={experience.icon} size={32} className="text-primary" />
                        </div>
                        <div className="text-sm font-bold text-primary">{experience.period}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{experience.title}</h3>
                        <p className="text-muted-foreground text-lg">{experience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Сертификаты и компетенции</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Яндекс Директ",
                  subtitle: "Сертифицированный специалист",
                  icon: "Award"
                },
                {
                  title: "Яндекс.Метрика",
                  subtitle: "Аналитика и аудитории",
                  icon: "BarChart"
                },
                {
                  title: "Google Ads",
                  subtitle: "Поисковая реклама",
                  icon: "Search"
                },
                {
                  title: "Google Analytics",
                  subtitle: "Веб-аналитика",
                  icon: "PieChart"
                },
                {
                  title: "A/B тестирование",
                  subtitle: "CRO и оптимизация",
                  icon: "Target"
                },
                {
                  title: "SQL и Excel",
                  subtitle: "Работа с большими данными",
                  icon: "Database"
                }
              ].map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={cert.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Принципы работы</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Честность",
                  description: "Не обещаю космических результатов. Говорю как есть — с цифрами и прогнозами.",
                  icon: "Shield"
                },
                {
                  title: "Прозрачность",
                  description: "Полный доступ к рекламному кабинету и аналитике. Отчёты без воды.",
                  icon: "Eye"
                },
                {
                  title: "Скорость",
                  description: "Отвечаю в течение 2 часов. Запуск кампаний за 24 часа. Без волокиты.",
                  icon: "Zap"
                },
                {
                  title: "Результат",
                  description: "Оплата за работу, а не за красивые презентации. Главное — ваша прибыль.",
                  icon: "TrendingUp"
                }
              ].map((principle, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={principle.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                        <p className="text-muted-foreground">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Давайте работать</h2>
            <p className="text-lg opacity-90 mb-8">
              Если вам нужен специалист, который говорит на языке цифр и делает рекламу, которая окупается — напишите мне
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Telegram
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link to="/" className="text-2xl font-bold text-primary">DirectPro</Link>
            <p className="text-sm opacity-60 mt-4">© 2024 DirectPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
