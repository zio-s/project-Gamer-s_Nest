import React, { createContext, useContext, useState, useCallback } from 'react';
import { mockQuestions, categories, tags, statuses } from '@/data/MockCommunityData';
import { fetchGameDetails } from '@/utils/rawg';

const GameCommunityContext = createContext();

export const GameCommunityProvider = ({ children }) => {
  const [posts, setPosts] = useState(mockQuestions);
  const [filteredPosts, setFilteredPosts] = useState(mockQuestions);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    timePeriod: 'all',
    sortBy: 'recent',
    searchQuery: '',
  });

  const updateFilters = useCallback((type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [type]: value };

      // 필터 적용 로직
      let result = [...mockQuestions];

      // 카테고리 필터
      if (newFilters.categories.length > 0) {
        result = result.filter((post) => newFilters.categories.includes(post.category));
      }

      // 검색어 필터
      if (newFilters.searchQuery) {
        const query = newFilters.searchQuery.toLowerCase();
        result = result.filter(
          (post) => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)
        );
      }

      // 정렬
      result.sort((a, b) => {
        switch (newFilters.sortBy) {
          case 'votes':
            return b.votes - a.votes;
          case 'answers':
            return b.answers - a.answers;
          default: // recent
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });

      setFilteredPosts(result);
      return newFilters;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      categories: [],
      timePeriod: 'all',
      sortBy: 'recent',
      searchQuery: '',
    });
    setFilteredPosts(mockQuestions);
  }, []);

  return (
    <GameCommunityContext.Provider
      value={{
        posts: filteredPosts,
        loading,
        filters,
        categories,
        tags,
        statuses,
        updateFilters,
        resetFilters,
        fetchGameDetails,
      }}
    >
      {children}
    </GameCommunityContext.Provider>
  );
};

export const useGameCommunity = () => {
  const context = useContext(GameCommunityContext);
  if (!context) {
    throw new Error('useGameCommunity must be used within a GameCommunityProvider');
  }
  return context;
};
