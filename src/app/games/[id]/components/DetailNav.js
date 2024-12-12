import { useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const DetailNav = () => {
  const { colorMode } = useColorMode();
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 124; // 네비게이션 높이(4rem)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'media', 'editions', 'reviews', 'system'];
      const navHeight = 124;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: '정보' },
    { id: 'media', label: '미디어' },
    { id: 'reviews', label: '리뷰' },
    { id: 'editions', label: '구매' },
    { id: 'system', label: '시스템 사양' },
  ];

  return (
    <nav
      className='bg-gray-800 sticky top-16 z-40'
      style={{
        backgroundColor: colorMode === 'dark' ? '#1f2937' : '#e9e9e9',
      }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <ul className='flex gap-8 text-sm'>
          {navItems.map(({ id, label }) => (
            <li key={id} className='py-4'>
              <button
                onClick={() => scrollToSection(id)}
                className={`hover:text-blue-400 transition-colors ${activeSection === id ? 'text-blue-400' : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DetailNav;
