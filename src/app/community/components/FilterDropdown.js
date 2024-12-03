'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGameCommunity } from '@/contexts/FilterContext';

const FilterDropdown = ({ title, filterType, options }) => {
  const { filters, updateFilters } = useGameCommunity();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 다중 선택이 가능한 필터 타입 정의
  const isMultiSelect = ['categories', 'roles', 'requirements'].includes(filterType);

  // 현재 선택된 값 가져오기
  const getCurrentValue = () => {
    const value = filters[filterType];
    return value || (isMultiSelect ? [] : '');
  };

  // 클릭 이벤트 핸들러
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

  // 표시될 텍스트 계산
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
        className='w-full flex items-center justify-between px-4 py-2 bg-[#2d2d3a] 
                  text-gray-300 rounded-lg border border-gray-600 hover:border-purple-500
                  transition-colors duration-200'
      >
        <span className='truncate'>{getDisplayValue()}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 
                    ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className='absolute z-50 w-full mt-1 bg-[#2d2d3a] border border-gray-600 
                        rounded-lg shadow-lg overflow-hidden'
        >
          <div className='max-h-60 overflow-y-auto'>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className='px-4 py-2 hover:bg-[#3d3d4a] cursor-pointer text-gray-300
                          flex items-center gap-2 transition-colors duration-150'
              >
                {isMultiSelect && (
                  <input
                    type='checkbox'
                    checked={getCurrentValue().includes(option.value)}
                    readOnly
                    className='rounded border-gray-600 bg-[#1a1b1e]'
                  />
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
