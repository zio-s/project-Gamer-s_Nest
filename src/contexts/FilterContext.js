// contexts/FilterContext.js
'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import {
  mockQuestions,
  mockTeamRecruits,
  discussionCategories,
  recruitCategories,
  rolesTags,
  requirementTags,
  screenshotCategories,
  mockScreenshots,
} from '@/data/MockCommunityData';
// import { fetchGameDetails } from '@/utils/rawg';

const GameCommunityContext = createContext();

export const GameCommunityProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [filters, setFilters] = useState({
    categories: [],
    roles: [],
    requirements: [],
    sortBy: 'recent',
    searchQuery: '',
  });

  // 각 탭별 원본 데이터
  const originalData = {
    discussions: mockQuestions,
    'team-recruit': mockTeamRecruits,
  };

  // 필터링된 데이터 계산
  const filteredPosts = useMemo(() => {
    let result = [...(originalData[activeTab] || [])];

    // 검색어 필터링
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter((post) => {
        if (activeTab === 'discussions') {
          return post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query);
        }
        if (activeTab === 'team-recruit') {
          return post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query);
        }
        return true;
      });
    }

    // 카테고리 필터링
    if (filters.categories.length > 0) {
      result = result.filter((post) => filters.categories.includes(post.category));
    }

    // 팀 모집 전용 필터
    if (activeTab === 'team-recruit') {
      // 역할 필터링
      if (filters.roles.length > 0) {
        result = result.filter((post) => post.roles.some((role) => filters.roles.includes(role)));
      }

      // 요구사항 필터링
      if (filters.requirements.length > 0) {
        result = result.filter((post) => post.requirements.some((req) => filters.requirements.includes(req)));
      }
    }

    // 정렬
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'votes':
          return (b.votes || 0) - (a.votes || 0);
        case 'views':
          return (b.views || 0) - (a.views || 0);
        case 'applications':
          return (b.applications || 0) - (a.applications || 0);
        case 'recent':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return result;
  }, [activeTab, filters, originalData]);

  // 현재 탭에 따른 정렬 옵션
  const getSortOptions = () => {
    const commonOptions = [
      { value: 'recent', label: '최신순' },
      { value: 'views', label: '조회순' },
    ];

    switch (activeTab) {
      case 'team-recruit':
        return [...commonOptions, { value: 'applications', label: '신청자순' }];
      case 'discussions':
        return [...commonOptions, { value: 'votes', label: '추천순' }];
      default:
        return commonOptions;
    }
  };

  const updateFilters = useCallback((type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      categories: [],
      roles: [],
      requirements: [],
      sortBy: 'recent',
      searchQuery: '',
    });
  }, []);

  // 검색 기능
  const handleSearch = useCallback(
    (query) => {
      updateFilters('searchQuery', query);
    },
    [updateFilters]
  );

  return (
    <GameCommunityContext.Provider
      value={{
        activeTab,
        setActiveTab,
        filters,
        updateFilters,
        resetFilters,
        handleSearch,
        posts: filteredPosts,
        categories: activeTab === 'team-recruit' ? recruitCategories : discussionCategories,
        roles: rolesTags,
        requirements: requirementTags,
        sortOptions: getSortOptions(),
        mockScreenshots,
        screenshotCategories,
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
