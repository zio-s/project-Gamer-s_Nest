import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useColorMode } from '@chakra-ui/react';

const FilterDropdown = ({ label, options, value, onChange, isMulti = false }) => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSelected = (optionValue) => {
    if (value === 'all') return false;
    if (Array.isArray(value)) {
      return JSON.stringify(value) === JSON.stringify(optionValue);
    }
    return value === optionValue;
  };

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    if (!isMulti) {
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    onChange('all');
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) =>
    Array.isArray(opt.value) ? JSON.stringify(opt.value) === JSON.stringify(value) : opt.value === value
  );

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        type='button'
        className='px-4 py-2 hover:bg-gray-700 rounded-lg  flex items-center gap-2 transition-colors'
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: colorMode === 'dark' ? '#1f2937' : '#e5e7eb',
        }}
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className='absolute z-50 mt-2 w-56 rounded-lg shadow-lg overflow-hidden left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0'
          style={{
            backgroundColor: colorMode === 'dark' ? '#1f2937' : '#e5e7eb',
            maxWidth: 'calc(100vw - 2rem)',
          }}
        >
          <div className='p-3 border-b border-gray-700 flex justify-between items-center'>
            <span className='font-semibold '>{label}</span>
            {value !== 'all' && (
              <button onClick={handleClear} className='text-sm text-gray-400 hover:text-white transition-colors'>
                Clear
              </button>
            )}
          </div>
          <div className='max-h-64 overflow-y-auto'>
            {options.map((option) => (
              <button
                key={option.label}
                className={`w-full px-3 py-2 text-left hover:bg-gray-500 hover:text-white transition-colors flex items-center justify-between ${
                  isSelected(option.value) ? 'bg-gray-700' : ''
                }`}
                onClick={() => handleSelect(option.value)}
              >
                <span className=''>{option.label}</span>
                {isSelected(option.value) && <X className='w-4 h-4 text-gray-400' />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default FilterDropdown;
