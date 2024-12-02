import { Menu, Filter, Search, ShoppingCart, User } from 'lucide-react';
import { useColorMode } from '@chakra-ui/react';
import { ThemeToggle } from '../ThemeToggle';
import Input from '../common/Input';
import { usePathname } from 'next/navigation';
import DrawerMenu from '../navigation/DrawerMenu';
import { useScroll } from '@/hooks/useScroll';

const Header = ({ onMenuClick, activeMenu = { activeMenu }, setActiveMenu = { setActiveMenu } }) => {
  const { colorMode } = useColorMode();
  const pathname = usePathname();
  const scrolled = useScroll();
  // 경로에 따른 헤더 타입 결정
  const getHeaderType = () => {
    if (pathname === '/') return 'default';
    if (pathname.startsWith('/games/') && pathname.length > 7) return 'detail';
    if (pathname === '/games') return 'list';
    if (pathname === '/community') return 'community';
    return 'default';
  };
  const headerType = getHeaderType(pathname);
  const getHeaderStyle = () => {
    switch (headerType) {
      case 'detail':
        return {
          backgroundColor: scrolled
            ? colorMode === 'dark'
              ? 'rgba(17, 24, 39, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          borderBottom: '1px solid #E5E7EB',
          transition: 'background-color 0.3s ease',
        };
      case 'list':
        return {
          backgroundColor: colorMode === 'dark' ? '#1F2937' : '#F3F4F6',
          borderBottom: '2px solid #3B82F6',
          color: colorMode === 'dark' ? '#FFFFFF' : '#1F2937',
        };
      case 'community':
        return {
          backgroundColor: scrolled
            ? colorMode === 'dark'
              ? 'rgba(23, 25, 35, 1)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'rgba(23, 25, 35, 1)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderBottom: 'none',
          transition: 'background-color 0.3s ease',
        };
      default: // 'default' 헤더 스타일
        return {
          backgroundColor: scrolled
            ? colorMode === 'dark'
              ? 'rgba(17, 24, 39, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          // borderBottom: '1px solid #E5E7EB',
          color: colorMode === 'dark' ? '#D1D5DB' : '#1F2937',
          transition: 'background-color 0.3s ease',
        };
    }
  };
  // 헤더 내용 렌더링
  const renderHeaderContent = () => {
    switch (headerType) {
      case 'list':
        return (
          <>
            <div className='flex items-center justify-between h-16'>
              <DrawerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

              {/* <h1 className='text-xl font-bold mb-2'>Games List</h1> */}
              {/* <div className='flex items-center space-x-2'>
                <input
                  type='search'
                  placeholder='Search games...'
                  className='flex-1 px-4 py-2 bg-gray-800 rounded-lg'
                />
                <button className='p-2 bg-gray-800 rounded-lg'>
                  <Filter className='w-5 h-5' />
                </button>
              </div> */}
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
          </>
        );

      case 'detail':
        return (
          <div className='flex items-center justify-between h-16'>
            {/* 로고 */}
            <DrawerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

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
      case 'community':
        return (
          <div className='flex items-center justify-between h-16 '>
            {/* 로고 */}
            <DrawerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

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
            <DrawerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} className={'lg:hidden'} />
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
      className={`sticky top-0 z-30 px-6 backdrop-blur-sm ${
        headerType === 'default' ? 'flex items-center justify-between p-6' : ''
      } ${headerType === 'detail' && !scrolled ? 'bg-transparent' : ''}
      `}
      style={getHeaderStyle()}
    >
      {renderHeaderContent()}
    </header>
  );
};

export default Header;
