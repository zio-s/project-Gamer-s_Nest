'use client';

import { useGameCommunity } from '@/contexts/FilterContext';
import FilterDropdown from './FilterDropdown';

export default function FilterSection() {
  const { categories, tags, statuses } = useGameCommunity();

  const filterOptions = {
    categories: categories.map((cat) => ({
      label: cat.label,
      value: cat.value,
      count: cat.count,
    })),
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
      <FilterDropdown title='Categories' filterType='categories' options={filterOptions.categories} />
      <FilterDropdown title='Time Period' filterType='timePeriod' options={filterOptions.timePeriod} />
      <FilterDropdown title='Sort By' filterType='sortBy' options={filterOptions.sortBy} />
    </div>
  );
}
