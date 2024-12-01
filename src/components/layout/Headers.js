import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';

const Headers = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* 로고 */}
          <Link href='/' className='text-xl font-bold'>
            GameStore
          </Link>

          {/* 네비게이션 */}
          <nav className='hidden md:flex items-center gap-6'>
            <Link href='/games' className='hover:text-blue-400 transition-colors'>
              스토어
            </Link>
            <Link href='/library' className='hover:text-blue-400 transition-colors'>
              라이브러리
            </Link>
            <Link href='/news' className='hover:text-blue-400 transition-colors'>
              새소식
            </Link>
          </nav>

          {/* 우측 아이콘들 */}
          <div className='flex items-center gap-4'>
            <button className='p-2 hover:bg-gray-800 rounded-full'>
              <Search className='w-5 h-5' />
            </button>
            <button className='p-2 hover:bg-gray-800 rounded-full'>
              <ShoppingCart className='w-5 h-5' />
            </button>
            <button className='p-2 hover:bg-gray-800 rounded-full'>
              <User className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
