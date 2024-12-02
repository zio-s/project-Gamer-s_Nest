'use client';
import { useFilter } from '@/contexts/FilterContext';
import FilterDropdown from './FilterDropdown';

const FilterSection = () => {
  const { filters, updateFilters } = useFilter();

  const filterOptions = {
    categories: [
      { label: 'Action Games', value: 'action', count: 145 },
      { label: 'RPG', value: 'rpg', count: 89 },
      { label: 'Strategy', value: 'strategy', count: 67 },
      { label: 'Sports', value: 'sports', count: 45 },
      { label: 'Indies', value: 'indies', count: 234 },
    ],
    timePeriod: [
      { label: 'Today', value: 'today', count: 24 },
      { label: 'This Week', value: 'week', count: 145 },
      { label: 'This Month', value: 'month', count: 489 },
      { label: 'All Time', value: 'all', count: 1234 },
    ],
    sortBy: [
      { label: 'Most Recent', value: 'recent' },
      { label: 'Most Voted', value: 'votes' },
      { label: 'Most Answered', value: 'answers' },
    ],
  };

  return (
    <div className='space-y-4'>
      <FilterDropdown
        title='Categories'
        options={filterOptions.categories}
        selected={filters.categories}
        onSelect={(value) => updateFilters('categories', value)}
        isMulti
      />
      <FilterDropdown
        title='Time Period'
        options={filterOptions.timePeriod}
        selected={filters.timePeriod}
        onSelect={(value) => updateFilters('timePeriod', value)}
      />
      <FilterDropdown
        title='Sort By'
        options={filterOptions.sortBy}
        selected={filters.sortBy}
        onSelect={(value) => updateFilters('sortBy', value)}
      />
    </div>
  );
};

export default FilterSection;
