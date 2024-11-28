import '@/styles/globals.scss';
import { Providers } from '@/components/providers';

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>GAMERS NEST</title>
        <meta property='og:type' content='website' />
        <meta property='og:title' content='GAMERS NEST' />
        <meta property='og:description' content='게임을 좋아하는 사람들의 커뮤니티, 정보를 볼 수 있습니다.' />
        <meta property='og:image' content='http://www.mysite.com/article/article1_featured_image.jpg' />
        <meta property='og:url' content='http://www.mysite.com/article/article1.html' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='GAMERS NEST' />
        <meta name='twitter:description' content='GAMERS NEST' />
        <meta name='twitter:image' content='http://www.mysite.com/article/article1.html' />
        <meta name='twitter:domain' content='GAMERS NEST' />
        <link rel='shortcut icon' href='/pattern/favicon_io/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/pattern/favicon_io/favicon-16x16.ico' sizes='16x16' type='image/png' />
        <link rel='icon' href='/pattern/favicon_io/favicon-32x32.ico' sizes='32x32' type='image/png' />
        <link rel='apple-touch-icon' href='/pattern/favicon_io/apple-touch-icon.ico' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'
        />
      </head>
      <body>
        <Providers>
          <div id='skip-nav'>
            <a href='#gnb'>메뉴 바로가기</a>
            <a href='#container'>본문 바로가기</a>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
