'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGameCommunity } from '@/contexts/FilterContext';
import { useColorMode } from '@chakra-ui/react';

const FilterDropdown = ({ title, filterType, options }) => {
  const { filters, updateFilters } = useGameCommunity();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { colorMode } = useColorMode();

  const isMultiSelect = ['categories', 'roles', 'requirements'].includes(filterType);

  const getCurrentValue = () => {
    const value = filters[filterType];
    return value || (isMultiSelect ? [] : '');
  };

  const handleSelect = (option) => {
    const currentValue = getCurrentValue();

    if (isMultiSelect) {
      const newValue = currentValue.includes(option)
        ? currentValue.filter((item) => item !== option)
        : [...currentValue, option];
      updateFilters(filterType, newValue);
    } else {
      updateFilters(filterType, option);
      setIsOpen(false);
    }
  };

  const getDisplayValue = () => {
    const currentValue = getCurrentValue();

    if (isMultiSelect && Array.isArray(currentValue) && currentValue.length > 0) {
      return `${title} (${currentValue.length})`;
    }

    if (!isMultiSelect && currentValue) {
      const selectedOption = options.find((opt) => opt.value === currentValue);
      return selectedOption ? selectedOption.label : title;
    }

    return title;
  };

  // 외부 클릭 감지
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
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg 
              transition-colors duration-200 ${
                colorMode === 'dark'
                  ? 'bg-[#1e1f24] text-gray-300 border border-gray-600 hover:border-purple-500'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-500'
              }`}
      >
        <span className='truncate'>{getDisplayValue()}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 
              ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 w-full mt-1 rounded-lg shadow-lg overflow-hidden
                ${colorMode === 'dark' ? 'bg-[#1e1f24] border border-gray-600' : 'bg-white border border-gray-200'}`}
        >
          <div className='max-h-60 overflow-y-auto'>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-4 py-2 cursor-pointer flex items-center gap-2 
                      transition-colors duration-150 ${
                        colorMode === 'dark' ? 'text-gray-300 hover:bg-[#2d2d3a]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
              >
                {isMultiSelect && (
                  <form>
                    <label htmlFor='search' className='blind'>
                      필터
                    </label>
                    <input
                      id='filter'
                      name='filter'
                      type='checkbox'
                      checked={getCurrentValue().includes(option.value)}
                      readOnly
                      className={`rounded ${
                        colorMode === 'dark' ? 'border-gray-600 bg-[#171923]' : 'border-gray-300 bg-gray-50'
                      }`}
                    />
                  </form>
                )}
                <span className='flex-1'>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
