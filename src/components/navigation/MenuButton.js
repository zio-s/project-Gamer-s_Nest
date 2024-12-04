'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';

const MenuButton = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { colorMode } = useColorMode();

  return (
    <Link
      style={{
        backgroundColor: colorMode === 'dark' ? '#1f2937' : '#FFFFFF',
        color: colorMode === 'dark' ? 'white' : '#444',
      }}
      href={href}
      className={`
        flex items-center w-full px-4 py-2
        relative
        group 
        ${isActive ? 'bg-primary' : ''}
      `}
    >
      <div
        className={`
        absolute inset-0 w-0 bg-primary-dark
        transition-all duration-300 ease-out
        group-hover:w-full
        ${isActive ? 'w-full' : ''}
      `}
      />

      <div className='flex items-center relative z-10'>
        <Icon className='w-5 h-5 mr-3' />
        <span className='text-sm'>{label}</span>
      </div>
    </Link>
  );
};

export default MenuButton;
