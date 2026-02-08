import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Blog = () => {
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
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О специалисте</Link>
              <Link to="/blog" className="text-sm font-medium text-primary">Новости</Link>
              <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link>
              <Button size="lg" className="ml-4">Получить консультацию</Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Блог</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Практические советы по Яндекс Директ без воды
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {[
                  {
                    title: "5 ошибок в Яндекс Директ, которые сливают бюджет",
                    excerpt: "Разбираю самые частые проблемы, с которыми сталкиваюсь в аудитах. Каждая из них стоит вам минимум 30% бюджета.",
                    date: "15 января 2025",
                    readTime: "7 мин",
                    category: "Ошибки",
                    icon: "AlertTriangle"
                  },
                  {
                    title: "Как снизить CPA на 40% за неделю: чек-лист из 12 пунктов",
                    excerpt: "Конкретные действия, которые можно выполнить прямо сейчас. Без сложных настроек и технических знаний.",
                    date: "8 января 2025",
                    readTime: "10 мин",
                    category: "Оптимизация",
                    icon: "TrendingDown"
                  },
                  {
                    title: "РСЯ в 2025: работает или нет? Мой опыт на 50+ проектах",
                    excerpt: "Честный разбор Рекламной сети Яндекса. В каких нишах РСЯ даёт результат, а где лучше не тратить деньги.",
                    date: "28 декабря 2024",
                    readTime: "12 мин",
                    category: "Стратегия",
                    icon: "Target"
                  },
                  {
                    title: "Автостратегии Директа: когда включать и как не слить бюджет",
                    excerpt: "Подробный гайд по автоматическим стратегиям. Когда они работают лучше ручных ставок, а когда — категорически нет.",
                    date: "20 декабря 2024",
                    readTime: "8 мин",
                    category: "Настройка",
                    icon: "Settings"
                  },
                  {
                    title: "Минус-слова: как собрать список за 30 минут",
                    excerpt: "Простой метод, который использую сам. Экономит до 25% бюджета на неэффективных показах.",
                    date: "12 декабря 2024",
                    readTime: "5 мин",
                    category: "Оптимизация",
                    icon: "Filter"
                  },
                  {
                    title: "Конверсионные объявления: формула и 20 примеров",
                    excerpt: "Показываю структуру объявлений, которые получают CTR выше 10%. С реальными примерами из разных ниш.",
                    date: "3 декабря 2024",
                    readTime: "15 мин",
                    category: "Объявления",
                    icon: "FileText"
                  }
                ].map((post, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-all group cursor-pointer">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                          <Icon name={post.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                              {post.category}
                            </span>
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {post.readTime}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          
                          <Button variant="link" className="p-0 h-auto text-primary">
                            Читать полностью
                            <Icon name="ArrowRight" size={16} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-8">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Популярные темы</h3>
                    <div className="space-y-2">
                      {[
                        { name: "Оптимизация", count: 12 },
                        { name: "Ошибки", count: 8 },
                        { name: "Стратегия", count: 7 },
                        { name: "Настройка", count: 6 },
                        { name: "Аналитика", count: 5 },
                        { name: "Кейсы", count: 4 }
                      ].map((topic, index) => (
                        <button
                          key={index}
                          className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <span className="font-medium">{topic.name}</span>
                          <span className="text-sm text-muted-foreground">{topic.count}</span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Подписаться на обновления</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Новые статьи раз в неделю. Только практика, никакой теории.
                    </p>
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder:text-white/60 text-white mb-3"
                    />
                    <Button size="lg" variant="secondary" className="w-full">
                      Подписаться
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Нужна помощь?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Если не нашли ответ в статьях — напишите мне напрямую
                    </p>
                    <Button className="w-full">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Задать вопрос
                    </Button>
                  </CardContent>
                </Card>
              </div>
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

export default Blog;
