import { Menu, Filter, ChevronLeft, CircleUserRound, Search, ShoppingCart, User } from 'lucide-react';
import { useColorMode } from '@chakra-ui/react';
import { ThemeToggle } from '../ThemeToggle';
import Input from '../common/Input';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = ({ onMenuClick }) => {
  const { colorMode } = useColorMode();
  const pathname = usePathname();

  // 경로에 따른 헤더 타입 결정
  const getHeaderType = () => {
    if (pathname === '/') return 'default';
    if (pathname.startsWith('/games/') && pathname.length > 7) return 'detail';
    if (pathname === '/games') return 'list';
    return 'default';
  };

  const headerType = getHeaderType();

  // 헤더 내용 렌더링
  const renderHeaderContent = () => {
    switch (headerType) {
      case 'list':
        return (
          <>
            <button className='lg:hidden mb-4' onClick={onMenuClick}>
              <Menu className='w-6 h-6' />
            </button>
            <h1 className='text-xl font-bold mb-2'>Games List</h1>
            <div className='flex items-center space-x-2'>
              <input type='search' placeholder='Search games...' className='flex-1 px-4 py-2 bg-gray-800 rounded-lg' />
              <button className='p-2 bg-gray-800 rounded-lg'>
                <Filter className='w-5 h-5' />
              </button>
            </div>
          </>
        );

      case 'detail':
        return (
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
        );

      default:
        return (
          <>
            <button className='lg:hidden' onClick={onMenuClick}>
              <Menu className='w-6 h-6' />
            </button>
            <div className='w-full max-w-md'>
              <Input placeholder='Search...' />
            </div>
            <div className='flex gap-5 items-center'>
              <button
                onClick={() => {
                  alert('기능 구현중입니다...');
                }}
                className='p-2 hover:bg-gray-800 rounded-full'
              >
                <User className='w-5 h-5' />
              </button>
              <ThemeToggle />
            </div>
          </>
        );
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm ${
        headerType === 'default' ? 'flex items-center justify-between' : ''
      }`}
      style={{
        backgroundColor: colorMode === 'dark' ? 'inherit' : '#FFFFFF', //#111827
        borderRight: colorMode === 'dark' ? '1px solid #2D2D2D' : '1px solid #E2E8F0',
        color: colorMode === 'dark' ? 'gray' : '#444',
        padding: '1rem',
      }}
    >
      {renderHeaderContent()}
    </header>
  );
};

export default Header;
