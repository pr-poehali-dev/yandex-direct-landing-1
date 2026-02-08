import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">DirectPro</div>
            
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</Link>
              <Link to="/cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О специалисте</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Новости</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
              <Button size="lg" className="ml-4">
                Получить консультацию
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
              <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="block text-sm font-medium hover:text-primary transition-colors">Услуги</Link>
              <Link to="/cases" className="block text-sm font-medium hover:text-primary transition-colors">Кейсы</Link>
              <Link to="/about" className="block text-sm font-medium hover:text-primary transition-colors">О специалисте</Link>
              <Link to="/blog" className="block text-sm font-medium hover:text-primary transition-colors">Новости</Link>
              <Link to="/contacts" className="block text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
              <Button size="lg" className="w-full mt-4">
                Получить консультацию
              </Button>
            </div>
          )}
        </nav>
      </header>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Icon name="TrendingUp" size={16} />
              Прибыль, а не просто клики
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Яндекс Директ,<br />который окупается<br />с первого месяца
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Не сливаю бюджет на показы. Привожу клиентов, которые покупают. Без агентских наценок и долгих согласований.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                <Icon name="FileText" size={20} className="mr-2" />
                Посмотреть кейсы
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Ниш от e-commerce до B2B</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.2x</div>
                <div className="text-sm text-muted-foreground">Средний рост конверсии</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24ч</div>
                <div className="text-sm text-muted-foreground">Запуск первой кампании</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Почему не агентство?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Без лишних людей и переплат. Только вы, я и результат.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Агентство</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-destructive mt-0.5 flex-shrink-0" />
                    <span>Наценка 30-50% на ведение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ваш проект — один из 50</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-destructive mt-0.5 flex-shrink-0" />
                    <span>Джуниор на исполнении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-destructive mt-0.5 flex-shrink-0" />
                    <span>Согласования через менеджера</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg shadow-primary/20">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="User" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Я</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Фиксированная ставка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Полное погружение в ваш проект</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>7 лет в performance-маркетинге</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Прямая связь в Telegram 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Как работаем</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс без сюрпризов
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Анализ ниши и конкурентов",
                description: "Изучаю ваш бизнес, аудиторию и конкурентов. Нахожу слабые места в их кампаниях.",
                icon: "Search"
              },
              {
                step: "02",
                title: "Стратегия и прогноз",
                description: "Составляю медиаплан с прогнозом CPL и ROI. Вы знаете, сколько потратите и что получите.",
                icon: "Target"
              },
              {
                step: "03",
                title: "Запуск за 24 часа",
                description: "Настраиваю кампании, пишу объявления, подключаю аналитику. Первые лиды на следующий день.",
                icon: "Rocket"
              },
              {
                step: "04",
                title: "Оптимизация и масштабирование",
                description: "Каждую неделю анализирую данные, отключаю неэффективное, масштабирую прибыльное.",
                icon: "TrendingUp"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start group hover:bg-muted/30 p-6 rounded-2xl transition-all"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name={item.icon} size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Последние кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Цифры говорят громче слов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                industry: "E-commerce / Мебель",
                problem: "Высокая стоимость клика, низкая конверсия",
                result: "CPA снижена на 67%",
                metrics: [
                  { label: "Было", value: "12 500₽", type: "bad" },
                  { label: "Стало", value: "4 100₽", type: "good" },
                  { label: "ROI", value: "+340%", type: "success" }
                ]
              },
              {
                industry: "B2B / IT-аутсорсинг",
                problem: "Мало заявок от крупного бизнеса",
                result: "Заявок в 4.5 раза больше",
                metrics: [
                  { label: "Было", value: "8 лидов/мес", type: "bad" },
                  { label: "Стало", value: "36 лидов/мес", type: "good" },
                  { label: "Конверсия", value: "12.3%", type: "success" }
                ]
              },
              {
                industry: "Услуги / Ремонт авто",
                problem: "Бюджет уходил в пустую",
                result: "Окупаемость с 1 месяца",
                metrics: [
                  { label: "Было", value: "ROI -20%", type: "bad" },
                  { label: "Стало", value: "ROI +280%", type: "good" },
                  { label: "Средний чек", value: "+45%", type: "success" }
                ]
              }
            ].map((caseItem, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-4">
                    {caseItem.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{caseItem.problem}</h3>
                  <div className="text-2xl font-bold text-primary mb-6">{caseItem.result}</div>
                  
                  <div className="space-y-3">
                    {caseItem.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className={`font-bold ${
                          metric.type === 'good' ? 'text-primary' :
                          metric.type === 'success' ? 'text-secondary' :
                          'text-muted-foreground'
                        }`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-6">
                    Читать кейс полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Смотреть все кейсы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 rounded-3xl text-white shadow-2xl">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">Гарантии</h2>
                <p className="text-lg opacity-90 mb-8">
                  Я уверен в своей работе, поэтому даю конкретные обязательства
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Shield" size={18} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Запуск за 24 часа</div>
                      <div className="text-sm opacity-90">Или бесплатно настрою аналитику и сделаю аудит конкурентов</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="RefreshCw" size={18} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Бесплатная корректировка</div>
                      <div className="text-sm opacity-90">Первые 2 недели — правки без доплат, пока не получим первые результаты</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="TrendingUp" size={18} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Рост конверсии от 30%</div>
                      <div className="text-sm opacity-90">Если текущие кампании уже есть — улучшу их или верну деньги за месяц</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Получить расчёт</h2>
              <p className="text-lg text-muted-foreground">
                Отвечу в течение 2 часов. Без спама и назойливых звонков.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Как к вам обращаться?" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Контакт</label>
                    <Input placeholder="Telegram, WhatsApp или телефон" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ваша ниша</label>
                    <Input placeholder="Например: интернет-магазин обуви" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Бюджет на рекламу в месяц</label>
                    <Input placeholder="От 50 000₽" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                    <Textarea 
                      placeholder="Есть ли действующие кампании? Что хотите улучшить?"
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить расчёт и стратегию
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-primary">DirectPro</div>
              <p className="text-sm opacity-80">
                Специалист по Яндекс Директ с фокусом на результат
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/services" className="hover:text-primary transition-colors">Услуги</Link></li>
                <li><Link to="/cases" className="hover:text-primary transition-colors">Кейсы</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">О специалисте</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Новости</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@directpro.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>@directpro_telegram</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Пользовательское соглашение</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            <p>© 2024 DirectPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;