'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGameCommunity } from '@/contexts/FilterContext';

const FilterDropdown = ({ title, filterType, options }) => {
  const { filters, updateFilters } = useGameCommunity();
  const [isOpen, setIsOpen] = useState(false);

  // filters 객체의 안전한 접근을 위한 기본값 설정
  const currentCategories = filters.categories || [];
  const currentSortBy = filters.sortBy || 'recent';
  const currentTimePeriod = filters.timePeriod || '';

  const handleSelect = (option) => {
    if (filterType === 'categories') {
      // 카테고리는 다중 선택 가능
      const newCategories = currentCategories.includes(option)
        ? currentCategories.filter((cat) => cat !== option)
        : [...currentCategories, option];
      updateFilters('categories', newCategories);
    } else {
      // 다른 필터들은 단일 선택
      updateFilters(filterType, option);
      setIsOpen(false);
    }
  };

  // 현재 선택된 값(들) 표시를 위한 헬퍼 함수
  const getDisplayValue = () => {
    if (filterType === 'categories' && currentCategories.length > 0) {
      return `${title} (${currentCategories.length})`;
    }
    const selectedOption = options.find((opt) =>
      filterType === 'sortBy'
        ? currentSortBy === opt.value
        : filterType === 'timePeriod'
        ? currentTimePeriod === opt.value
        : false
    );
    return selectedOption ? selectedOption.label : title;
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between px-4 py-2 bg-[#2d2d3a] 
                   text-gray-300 rounded-lg border border-gray-600 hover:border-purple-500'
      >
        <span>{getDisplayValue()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
                         flex items-center gap-2'
              >
                {filterType === 'categories' && (
                  <input
                    type='checkbox'
                    checked={currentCategories.includes(option.value)}
                    readOnly
                    className='rounded border-gray-600 bg-[#1a1b1e]'
                  />
                )}
                <span>{option.label}</span>
                {option.count && <span className='ml-auto text-xs text-gray-500'>{option.count}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
