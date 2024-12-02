'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FilterDropdown = ({ title, options, onSelect, isMulti = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(isMulti ? [] : '');

  const handleSelect = (option) => {
    if (isMulti) {
      const newSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
      setSelected(newSelected);
      onSelect(newSelected);
    } else {
      setSelected(option);
      onSelect(option);
      setIsOpen(false);
    }
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center justify-between px-4 py-2 bg-[#2d2d3a] 
                   text-gray-300 rounded-lg border border-gray-600 hover:border-purple-500'
      >
        <span>{title}</span>
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
                {isMulti && (
                  <input
                    type='checkbox'
                    checked={selected.includes(option.value)}
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
