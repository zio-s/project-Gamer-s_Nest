import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import Navigation from './Navigation';
import { menuItems } from '@/data/menuItems';
import Image from 'next/image';
import { ThemeToggle } from '../ThemeToggle';
const DrawerMenu = ({ className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        variant='ghost'
        className={`p-2  dark:hover:bg-gray-800 dark:hover:text-white rounded-lg  ${className}`}
        aria-label='Open Menu'
      >
        <Menu className='h-6 w-6' />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='border-b'>
            <div className='flex justify-center items-center ml-[-15px]'>
              <Image src='/pattern/logo2.png' width={75} height={75} priority alt='logo' />
              <h1 className='text-xl flex flex-col font-bold text-left ml-[-10px]'>
                <span className='bg-gradient-to-r mb-[-5px] from-purple-400 to-purple-600 bg-clip-text text-transparent'>
                  GAMER&apos;S
                </span>
                <span className='text-sm '>NEST</span>
              </h1>
            </div>
          </DrawerHeader>

          <DrawerBody className='p-0 flex flex-col'>
            <div className='flex-1'>
              <Navigation menuItems={menuItems} />
            </div>
            <div className='border-t p-4'>
              <div className='flex items-center justify-between'>
                <span className='font-medium'>다크 모드</span>
                <ThemeToggle />
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
