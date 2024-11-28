import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MenuButton = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center w-full px-4 py-2
        text-white relative
        group
        ${isActive ? 'bg-purple-600' : ''}
      `}
    >
      <div
        className={`
        absolute inset-0 w-0 bg-purple-600
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
