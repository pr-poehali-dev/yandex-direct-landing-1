import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface ContactRequest {
  id: number;
  name: string;
  contact: string;
  subject: string;
  message: string;
  source: string;
  status: string;
  createdAt: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  icon: string;
  readTime: string;
  imageUrl?: string;
  date: string;
}

const Admin = () => {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'requests' | 'posts'>('requests');
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    if (adminKey === 'admin123') {
      setIsAuthenticated(true);
      loadData();
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неверный ключ доступа',
        variant: 'destructive',
      });
    }
  };

  const loadData = () => {
    setLoading(true);
    
    fetch('https://functions.poehali.dev/bb8491f5-6b8a-4f45-8dd7-26ec2d03b92c?action=admin-requests', {
      headers: {
        'X-Admin-Key': 'admin123'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.requests) {
          setRequests(data.requests);
        }
      })
      .catch(error => {
        toast({
          title: 'Ошибка',
          description: 'Не удалось загрузить заявки',
          variant: 'destructive',
        });
      });

    fetch('https://functions.poehali.dev/bb8491f5-6b8a-4f45-8dd7-26ec2d03b92c?action=posts')
      .then(res => res.json())
      .then(data => {
        if (data.posts) {
          setPosts(data.posts);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ключ доступа</label>
                <Input
                  type="password"
                  placeholder="Введите ключ"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
              <Button onClick={handleLogin} className="w-full" size="lg">
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Shield" size={28} />
              Админ-панель
            </div>
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="outline">
                  <Icon name="Home" size={18} className="mr-2" />
                  На сайт
                </Button>
              </Link>
              <Button variant="destructive" onClick={() => setIsAuthenticated(false)}>
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <Button
            variant={activeTab === 'requests' ? 'default' : 'outline'}
            onClick={() => setActiveTab('requests')}
          >
            <Icon name="Mail" size={18} className="mr-2" />
            Заявки ({requests.length})
          </Button>
          <Button
            variant={activeTab === 'posts' ? 'default' : 'outline'}
            onClick={() => setActiveTab('posts')}
          >
            <Icon name="FileText" size={18} className="mr-2" />
            Статьи ({posts.length})
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <Icon name="Loader2" size={48} className="animate-spin mx-auto text-primary" />
            <p className="mt-4 text-muted-foreground">Загрузка...</p>
          </div>
        ) : (
          <>
            {activeTab === 'requests' && (
              <div className="space-y-4">
                {requests.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Icon name="Inbox" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Пока нет заявок</p>
                    </CardContent>
                  </Card>
                ) : (
                  requests.map((request) => (
                    <Card key={request.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{request.name}</h3>
                            <p className="text-sm text-muted-foreground">{request.createdAt}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              request.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                            }`}>
                              {request.status === 'new' ? 'Новая' : 'Обработана'}
                            </span>
                            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                              {request.source}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">Контакт</p>
                            <p className="font-medium">{request.contact}</p>
                          </div>
                          {request.subject && (
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">Тема</p>
                              <p className="font-medium">{request.subject}</p>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Сообщение</p>
                          <p className="text-foreground whitespace-pre-wrap">{request.message}</p>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button size="sm">
                            <Icon name="Phone" size={16} className="mr-2" />
                            Позвонить
                          </Button>
                          <Button size="sm" variant="outline">
                            <Icon name="MessageCircle" size={16} className="mr-2" />
                            Написать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="space-y-4">
                {posts.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Icon name="FileText" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Пока нет статей</p>
                    </CardContent>
                  </Card>
                ) : (
                  posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon name={post.icon} size={24} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                                <p className="text-sm text-muted-foreground">{post.date} • {post.readTime}</p>
                              </div>
                              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                                {post.category}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                            <Button size="sm" variant="outline">
                              <Icon name="Edit" size={16} className="mr-2" />
                              Редактировать
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
