import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Contacts = () => {
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
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Новости</Link>
              <Link to="/contacts" className="text-sm font-medium text-primary">Контакты</Link>
              <Button size="lg" className="ml-4">Получить консультацию</Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Отвечаю в течение 2 часов в рабочее время
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Свяжитесь со мной</h2>
              
              <div className="space-y-6 mb-12">
                <Card className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon name="MessageCircle" size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1">Telegram</div>
                        <a href="https://t.me/directpro" className="text-primary hover:underline">
                          @directpro_telegram
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Самый быстрый способ связи</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1">Телефон</div>
                        <a href="tel:+79991234567" className="text-primary hover:underline">
                          +7 (999) 123-45-67
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 10:00 - 19:00 МСК</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1">Email</div>
                        <a href="mailto:info@directpro.ru" className="text-primary hover:underline">
                          info@directpro.ru
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Отвечаю в течение 3 часов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Send" size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1">WhatsApp</div>
                        <a href="https://wa.me/79991234567" className="text-primary hover:underline">
                          +7 (999) 123-45-67
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Удобно для быстрых вопросов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  График работы
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница:</span>
                    <span className="font-medium text-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота:</span>
                    <span className="font-medium text-foreground">11:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье:</span>
                    <span className="font-medium text-foreground">Выходной</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Напишите мне</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Как к вам обращаться?" className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Контакт для связи</label>
                      <Input placeholder="Telegram, WhatsApp, телефон или email" className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Тема обращения</label>
                      <Input placeholder="Кратко о чём хотите поговорить" className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Опишите свой проект или задачу..."
                        rows={6}
                      />
                    </div>

                    <Button size="lg" className="w-full h-14 text-lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-primary" />
                  Важно
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Первая консультация — бесплатно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Отвечаю на все сообщения лично</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Не передаю контакты третьим лицам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Никакого спама и холодных звонков</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Частые вопросы</h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: "Как быстро вы отвечаете?",
                  a: "В рабочее время (Пн-Пт 10:00-19:00) — в течение 2 часов. В выходные могу задержаться до следующего дня."
                },
                {
                  q: "Работаете ли вы с небольшими бюджетами?",
                  a: "Да, минимальный рекламный бюджет — от 50 000₽/мес. Это позволяет получить достаточно данных для оптимизации."
                },
                {
                  q: "Можно ли встретиться лично?",
                  a: "Работаю удалённо, но если проект крупный и вы в Москве — можем встретиться для обсуждения деталей."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
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

export default Contacts;
