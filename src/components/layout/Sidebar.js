import { menuItems } from '@/data/menuItems';
import MenuButton from '../navigation/MenuButton';
import { X } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '../ThemeToggle';
import Navigation from '../navigation/Navigation';

export default function Sidebar({ isOpen, activeMenu, setActiveMenu, onClose }) {
  // const [isOpen, setIsOpen] = useState(false); // 반응형 메뉴 상태

  return (
    <aside
      className={`
      w-64 bg-gray-800 h-screen
      lg:relative
      fixed inset-y-0 left-0
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      z-40
    `}
    >
      <div className='h-full overflow-y-auto'>
        <div className='flex justify-between p-4'>
          <div className='flex justify-center items-center ml-[-15px]'>
            <Image src='/pattern/logo2.png' width={75} height={75} alt='logo' />
            <h1 className='text-xl flex flex-col font-bold text-left ml-[-10px]'>
              <span className='bg-gradient-to-r mb-[-5px] from-purple-400 to-purple-600 bg-clip-text text-transparent'>
                GAMER&apos;S
              </span>
              <span className='text-sm text-gray-400'>NEST</span>
            </h1>
          </div>
          <div>
            <button className='lg:hidden p-2 hover:bg-gray-700 rounded-lg' onClick={onClose}>
              <X className='w-6 h-6' />
            </button>
          </div>
        </div>
        <Navigation menuItems={menuItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </aside>
  );
}
