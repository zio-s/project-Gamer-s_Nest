'use client';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash/debounce';
import { fetchGames } from '@/utils/rawg';

const FilterContext = createContext();
const STORAGE_KEY = 'community-filters';
const ITEMS_PER_PAGE = 10;

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial state from URL or localStorage
  const getInitialState = () => {
    // Try to get from localStorage first
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      return JSON.parse(stored);
    }

    // Otherwise, get from URL or use defaults
    return {
      categories: searchParams.get('categories')?.split(',').filter(Boolean) || [],
      timePeriod: searchParams.get('time') || '',
      sortBy: searchParams.get('sort') || 'recent',
      search: searchParams.get('q') || '',
      page: parseInt(searchParams.get('page') || '1', 10),
    };
  };

  const [filters, setFilters] = useState(getInitialState);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Save filters to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
  }, [filters]);

  // Update URL with filters
  const updateURL = useCallback(
    debounce((newFilters) => {
      const params = new URLSearchParams();
      if (newFilters.categories.length) params.set('categories', newFilters.categories.join(','));
      if (newFilters.timePeriod) params.set('time', newFilters.timePeriod);
      if (newFilters.sortBy) params.set('sort', newFilters.sortBy);
      if (newFilters.search) params.set('q', newFilters.search);
      if (newFilters.page > 1) params.set('page', newFilters.page.toString());

      // replace 옵션을 사용하여 history 스택에 추가하지 않고 현재 URL만 업데이트
      router.push(`?${params.toString()}`, { scroll: false });
    }, 300),
    [router]
  );

  // Filter and fetch questions
  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchGames(filters);
      setQuestions((prev) => (filters.page === 1 ? data.questions : [...prev, ...data.questions]));
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const updateFilters = useCallback(
    (type, value) => {
      if (type === 'reset') {
        const defaultFilters = {
          categories: [],
          timePeriod: '',
          sortBy: 'recent',
          search: '',
          page: 1,
        };
        setFilters(defaultFilters);
        updateURL(defaultFilters);
        return;
      }

      setFilters((prev) => {
        const newFilters = {
          ...prev,
          [type]: value,
          page: type === 'page' ? value : 1, // Reset page when other filters change
        };
        updateURL(newFilters);
        return newFilters;
      });
    },
    [updateURL]
  );

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      updateFilters('page', filters.page + 1);
    }
  }, [loading, hasMore, filters.page, updateFilters]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        updateFilters,
        questions,
        loading,
        hasMore,
        loadMore,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
