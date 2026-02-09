import json
import os
import psycopg2
from datetime import datetime

def get_db_connection():
    """Создание подключения к базе данных"""
    return psycopg2.connect(os.environ['DATABASE_URL'])

def handler(event: dict, context) -> dict:
    """API для работы с блогом, заявками и настройками сайта"""
    
    method = event.get('httpMethod', 'GET')
    path = event.get('queryStringParameters', {}).get('action', '')
    
    # CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    try:
        # Получение списка постов блога
        if method == 'GET' and path == 'posts':
            conn = get_db_connection()
            cur = conn.cursor()
            
            cur.execute("""
                SELECT id, title, excerpt, content, category, icon, read_time, 
                       image_url, published, created_at
                FROM blog_posts 
                WHERE published = true 
                ORDER BY created_at DESC
            """)
            
            posts = []
            for row in cur.fetchall():
                posts.append({
                    'id': row[0],
                    'title': row[1],
                    'excerpt': row[2],
                    'content': row[3],
                    'category': row[4],
                    'icon': row[5],
                    'readTime': row[6],
                    'imageUrl': row[7],
                    'published': row[8],
                    'date': row[9].strftime('%d %B %Y') if row[9] else ''
                })
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'posts': posts}),
                'isBase64Encoded': False
            }
        
        # Получение одного поста
        if method == 'GET' and path == 'post':
            post_id = event.get('queryStringParameters', {}).get('id')
            if not post_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'Post ID required'}),
                    'isBase64Encoded': False
                }
            
            conn = get_db_connection()
            cur = conn.cursor()
            
            cur.execute("""
                SELECT id, title, excerpt, content, category, icon, read_time,
                       image_url, published, created_at
                FROM blog_posts 
                WHERE id = %s AND published = true
            """, (post_id,))
            
            row = cur.fetchone()
            if not row:
                cur.close()
                conn.close()
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Post not found'}),
                    'isBase64Encoded': False
                }
            
            post = {
                'id': row[0],
                'title': row[1],
                'excerpt': row[2],
                'content': row[3],
                'category': row[4],
                'icon': row[5],
                'readTime': row[6],
                'imageUrl': row[7],
                'published': row[8],
                'date': row[9].strftime('%d %B %Y') if row[9] else ''
            }
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'post': post}),
                'isBase64Encoded': False
            }
        
        # Получение настроек сайта
        if method == 'GET' and path == 'settings':
            conn = get_db_connection()
            cur = conn.cursor()
            
            cur.execute("SELECT key, value FROM site_settings")
            
            settings = {}
            for row in cur.fetchall():
                settings[row[0]] = row[1]
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'settings': settings}),
                'isBase64Encoded': False
            }
        
        # Отправка заявки с формы
        if method == 'POST' and path == 'contact':
            body = json.loads(event.get('body', '{}'))
            
            name = body.get('name', '').strip()
            contact = body.get('contact', '').strip()
            subject = body.get('subject', '').strip()
            message = body.get('message', '').strip()
            source = body.get('source', 'contact_form')
            
            if not name or not contact or not message:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'Заполните все обязательные поля'}),
                    'isBase64Encoded': False
                }
            
            conn = get_db_connection()
            cur = conn.cursor()
            
            cur.execute("""
                INSERT INTO contact_requests (name, contact, subject, message, source)
                VALUES (%s, %s, %s, %s, %s)
                RETURNING id
            """, (name, contact, subject, message, source))
            
            request_id = cur.fetchone()[0]
            
            conn.commit()
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'success': True,
                    'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
                    'requestId': request_id
                }),
                'isBase64Encoded': False
            }
        
        # Получение всех заявок (для админки)
        if method == 'GET' and path == 'admin-requests':
            admin_key = event.get('headers', {}).get('X-Admin-Key', '')
            if admin_key != 'admin123':  # В продакшене использовать безопасный ключ
                return {
                    'statusCode': 401,
                    'headers': headers,
                    'body': json.dumps({'error': 'Unauthorized'}),
                    'isBase64Encoded': False
                }
            
            conn = get_db_connection()
            cur = conn.cursor()
            
            cur.execute("""
                SELECT id, name, contact, subject, message, source, status, created_at
                FROM contact_requests
                ORDER BY created_at DESC
                LIMIT 100
            """)
            
            requests = []
            for row in cur.fetchall():
                requests.append({
                    'id': row[0],
                    'name': row[1],
                    'contact': row[2],
                    'subject': row[3],
                    'message': row[4],
                    'source': row[5],
                    'status': row[6],
                    'createdAt': row[7].strftime('%d.%m.%Y %H:%M') if row[7] else ''
                })
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'requests': requests}),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 404,
            'headers': headers,
            'body': json.dumps({'error': 'Not found'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
