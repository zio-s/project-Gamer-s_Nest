'use client';

import React from 'react';
import { useGameCommunity } from '@/contexts/FilterContext';
import FilterDropdown from './FilterDropdown';

const FilterSection = () => {
  const { activeTab, categories, roles, requirements, sortOptions, filters, updateFilters } = useGameCommunity();

  // 탭별 필터 설정
  const getFilterConfig = () => {
    const commonFilters = {
      categories: {
        title: '카테고리',
        options: categories.map((cat) => ({
          label: cat.label,
          value: cat.value,
          count: cat.count,
        })),
      },
      timePeriod: {
        title: '기간',
        options: [
          { label: '오늘', value: 'today', count: 24 },
          { label: '이번 주', value: 'week', count: 145 },
          { label: '이번 달', value: 'month', count: 489 },
          { label: '전체', value: 'all', count: 1234 },
        ],
      },
      sortBy: {
        title: '정렬',
        options: sortOptions,
      },
    };

    // 팀 모집 전용 필터
    const teamFilters = {
      roles: {
        title: '모집 역할',
        options: roles.map((role) => ({
          label: role.label,
          value: role.value,
          count: role.count,
        })),
      },
      requirements: {
        title: '요구사항',
        options: requirements.map((req) => ({
          label: req.label,
          value: req.value,
          count: req.count,
        })),
      },
    };

    return activeTab === 'team-recruit' ? { ...commonFilters, ...teamFilters } : commonFilters;
  };

  const filterConfig = getFilterConfig();

  return (
    <div className='space-y-4'>
      {Object.entries(filterConfig).map(([filterType, config]) => (
        <FilterDropdown
          key={filterType}
          title={config.title}
          filterType={filterType}
          options={config.options}
          value={filters[filterType]}
          onChange={(value) => updateFilters(filterType, value)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
