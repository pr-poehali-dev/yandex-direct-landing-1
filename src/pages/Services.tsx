import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">DirectPro</Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="text-sm font-medium text-primary">Услуги</Link>
              <Link to="/cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О специалисте</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Новости</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
              <Button size="lg" className="ml-4">Получить консультацию</Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Услуги по Яндекс Директ</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работы с контекстной рекламой — от стратегии до масштабирования
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                title: "Настройка и запуск кампаний",
                price: "от 25 000₽",
                description: "Полная настройка рекламных кампаний с нуля за 24 часа",
                features: [
                  "Глубокий анализ ниши и конкурентов",
                  "Сбор и кластеризация семантики",
                  "Написание продающих объявлений",
                  "Настройка UTM-меток и целей",
                  "Подключение Яндекс.Метрики и коллтрекинга",
                  "Запуск тестовых кампаний"
                ],
                icon: "Rocket",
                tag: "Старт"
              },
              {
                title: "Ведение и оптимизация",
                price: "от 30 000₽/мес",
                description: "Постоянная работа над снижением CPL и ростом конверсии",
                features: [
                  "Еженедельная оптимизация ставок",
                  "A/B тесты объявлений и посадочных",
                  "Отключение неэффективных связок",
                  "Работа с минус-словами",
                  "Анализ поведения пользователей",
                  "Ежемесячные отчёты с выводами"
                ],
                icon: "TrendingUp",
                tag: "Популярное"
              },
              {
                title: "Аудит текущих кампаний",
                price: "от 15 000₽",
                description: "Детальный разбор ваших кампаний с планом улучшений",
                features: [
                  "Проверка структуры кампаний",
                  "Анализ качества трафика",
                  "Оценка релевантности объявлений",
                  "Проверка настройки целей",
                  "План оптимизации на 3 месяца",
                  "Консультация 1 час"
                ],
                icon: "Search",
                tag: "Аудит"
              },
              {
                title: "Масштабирование результатов",
                price: "от 40 000₽/мес",
                description: "Рост объёма заявок без потери качества и ROI",
                features: [
                  "Расширение семантического ядра",
                  "Запуск новых форматов (РСЯ, видео)",
                  "Тестирование гипотез",
                  "Работа с ретаргетингом",
                  "Интеграция с CRM",
                  "Еженедельные созвоны"
                ],
                icon: "BarChart",
                tag: "Рост"
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                        <Icon name={service.icon} size={36} className="text-primary" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                        {service.tag}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <h3 className="text-2xl font-bold mb-2 lg:mb-0">{service.title}</h3>
                        <div className="text-3xl font-bold text-primary">{service.price}</div>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button size="lg" className="w-full lg:w-auto">
                        <Icon name="MessageCircle" size={20} className="mr-2" />
                        Обсудить проект
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Как формируется стоимость</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Размер рекламного бюджета</h3>
                      <p className="text-muted-foreground">Чем больше бюджет — тем больше работы по оптимизации и анализу данных</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Layers" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Количество кампаний</h3>
                      <p className="text-muted-foreground">Регионы, сегменты аудитории, типы кампаний влияют на объём работы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Сложность ниши</h3>
                      <p className="text-muted-foreground">B2B, высокая конкуренция, длинный цикл сделки требуют больше экспертизы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Нужна точная оценка?</h3>
              <p className="mb-6 opacity-90">Опишите проект — рассчитаю стоимость и сроки в течение 2 часов</p>
              <Button size="lg" variant="secondary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Получить расчёт
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

export default Services;
