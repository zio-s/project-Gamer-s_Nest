import { Menu, Filter, ChevronLeft } from 'lucide-react';
import Input from '../common/Input';

const Header = ({ type, onMenuClick }) => {
  const headers = {
    default: (
      <div className='w-full flex items-center justify-between p-4 gap-4'>
        <button className='lg:hidden' onClick={onMenuClick}>
          <Menu className='w-6 h-6' />
        </button>
        <div className='w-full max-w-md '>
          <Input placeholder='Search...' />
        </div>
        <div className='w-8 h-8 rounded-full bg-gray-700 flex-shrink-0' />
      </div>
    ),
    list: (
      <div className='w-full p-4'>
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
      </div>
    ),
    detail: (
      <div className='w-full p-4'>
        <div className='flex items-center space-x-4'>
          <button className='lg:hidden' onClick={onMenuClick}>
            <ChevronLeft className='w-6 h-6' />
          </button>
          <h1 className='text-xl font-bold'>Game Detail</h1>
        </div>
      </div>
    ),
  };

  return <header className='bg-gray-900 sticky top-0 z-30'>{headers[type] || headers.default}</header>;
};

export default Header;
