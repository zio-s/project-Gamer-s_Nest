import FilterDropdown from './FilterDropdown';

const FilterSection = () => {
  const handleFilterChange = (filterType, value) => {
    console.log(`Filter ${filterType} changed:`, value);
  };

  const filters = {
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
      { label: 'Most Viewed', value: 'viewed' },
      { label: 'Most Answered', value: 'answered' },
      { label: 'Most Voted', value: 'voted' },
    ],
  };

  return (
    <div className='space-y-4'>
      <FilterDropdown
        title='Categories'
        options={filters.categories}
        onSelect={(value) => handleFilterChange('categories', value)}
        isMulti
      />
      <FilterDropdown
        title='Time Period'
        options={filters.timePeriod}
        onSelect={(value) => handleFilterChange('timePeriod', value)}
      />
      <FilterDropdown
        title='Sort By'
        options={filters.sortBy}
        onSelect={(value) => handleFilterChange('sortBy', value)}
      />
    </div>
  );
};

export default FilterSection;
