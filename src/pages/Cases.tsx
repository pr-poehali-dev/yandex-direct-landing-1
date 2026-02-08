import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">DirectPro</Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</Link>
              <Link to="/cases" className="text-sm font-medium text-primary">Кейсы</Link>
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Кейсы</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты с цифрами до и после. Без приукрашивания.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {[
              {
                industry: "E-commerce / Мебель",
                client: "Интернет-магазин дизайнерской мебели",
                problem: "Высокая стоимость клика из-за конкуренции. Конверсия сайта 0.8%. Средний чек 45 000₽. CPA по 12 500₽ делал рекламу убыточной.",
                solution: [
                  "Пересобрал семантику — убрал информационные запросы",
                  "Разделил кампании по типам мебели",
                  "Настроил ретаргетинг на брошенные корзины",
                  "Запустил РСЯ с look-alike аудиторией"
                ],
                results: {
                  cpa: { before: "12 500₽", after: "4 100₽", change: "-67%" },
                  conversion: { before: "0.8%", after: "2.4%", change: "+200%" },
                  roi: { before: "80%", after: "340%", change: "+260 п.п." },
                  leads: { before: "24 лида/мес", after: "68 лидов/мес", change: "+183%" }
                },
                period: "3 месяца",
                budget: "250 000₽/мес"
              },
              {
                industry: "B2B / IT-аутсорсинг",
                client: "Компания по разработке ПО для бизнеса",
                problem: "Мало заявок от крупного бизнеса. Лиды были, но мелкие. Средний чек проекта 1.2 млн₽, окупать лид за 15 000₽ нереально.",
                solution: [
                  "Перенастроил кампании на корп.сектор",
                  "Добавил минус-слова для отсечения фриланса",
                  "Создал лид-магнит (чек-лист для CTO)",
                  "Настроил цепочку дожима через email"
                ],
                results: {
                  cpa: { before: "15 200₽", after: "8 900₽", change: "-41%" },
                  conversion: { before: "3.2%", after: "12.3%", change: "+285%" },
                  quality: { before: "12% целевых", after: "67% целевых", change: "+458%" },
                  leads: { before: "8 лидов/мес", after: "36 лидов/мес", change: "+350%" }
                },
                period: "4 месяца",
                budget: "180 000₽/мес"
              },
              {
                industry: "Услуги / Ремонт авто",
                client: "Сеть автосервисов (3 точки)",
                problem: "Бюджет уходил впустую — много звонков, мало записей. ROI отрицательный. Клиенты спрашивали цену и пропадали.",
                solution: [
                  "Запустил кампании отдельно под каждую точку",
                  "Добавил быстрые ссылки с ценами",
                  "Настроил коллтрекинг для оценки качества",
                  "Оптимизировал время показа под пики трафика"
                ],
                results: {
                  cpa: { before: "2 800₽", after: "890₽", change: "-68%" },
                  conversion: { before: "4.1%", after: "11.2%", change: "+173%" },
                  roi: { before: "-20%", after: "+280%", change: "+300 п.п." },
                  avgCheck: { before: "8 500₽", after: "12 300₽", change: "+45%" }
                },
                period: "2 месяца",
                budget: "120 000₽/мес"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                <CardContent className="p-8 lg:p-12">
                  <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-6">
                    {caseItem.industry}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{caseItem.client}</h2>
                  
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Icon name="AlertCircle" size={24} className="text-destructive" />
                        Проблема
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.problem}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Icon name="Lightbulb" size={24} className="text-primary" />
                        Что было сделано
                      </h3>
                      <ul className="space-y-2">
                        {caseItem.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-6">
                    <h3 className="text-2xl font-bold mb-6 text-center">Результаты</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {Object.entries(caseItem.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm text-muted-foreground mb-2 uppercase font-medium">
                            {key === 'cpa' && 'Стоимость лида'}
                            {key === 'conversion' && 'Конверсия'}
                            {key === 'roi' && 'ROI'}
                            {key === 'leads' && 'Лидов в месяц'}
                            {key === 'quality' && 'Целевые лиды'}
                            {key === 'avgCheck' && 'Средний чек'}
                          </div>
                          <div className="text-2xl font-bold text-muted-foreground mb-1">{value.before}</div>
                          <Icon name="ArrowDown" size={20} className="text-muted-foreground mx-auto mb-1" />
                          <div className="text-3xl font-bold text-primary mb-2">{value.after}</div>
                          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                            {value.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Срок: {caseItem.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={16} />
                      <span>Бюджет: {caseItem.budget}</span>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Хотите такой же результат?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Каждый проект уникален, но подход один — фокус на цифры, а не на процесс
            </p>
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Обсудить мой проект
            </Button>
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

export default Cases;
