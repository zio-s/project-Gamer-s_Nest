import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Filter, X } from 'lucide-react';
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

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        type='button'
        className='px-3 py-1.5 hover:bg-gray-700 rounded-lg flex items-center gap-1.5 transition-colors text-sm whitespace-nowrap'
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: colorMode === 'dark' ? '#1f2937' : '#e5e7eb',
        }}
      >
        <span>{value === 'all' ? label : options.find((opt) => opt.value === value)?.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className='absolute z-50 mt-2 w-48 rounded-lg shadow-lg overflow-hidden left-0 sm:left-auto sm:-right-0'
          style={{
            backgroundColor: colorMode === 'dark' ? '#1f2937' : '#e5e7eb',
          }}
        >
          <div className='p-2 border-b border-gray-700 flex justify-between items-center'>
            <span className='font-medium text-sm'>{label}</span>
            {value !== 'all' && (
              <button
                onClick={() => onChange('all')}
                className='text-xs text-gray-400 hover:text-white transition-colors'
              >
                초기화
              </button>
            )}
          </div>
          <div className='max-h-60 overflow-y-auto'>
            {options.map((option) => (
              <button
                key={option.label}
                className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-500 hover:text-white transition-colors flex items-center justify-between ${
                  value === option.value ? 'bg-gray-700' : ''
                }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                <span>{option.label}</span>
                {value === option.value && <X className='w-3.5 h-3.5 text-gray-400' />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
