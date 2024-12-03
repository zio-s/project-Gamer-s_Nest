'use client';
import React from 'react';

import { useGameCommunity } from '@/contexts/FilterContext';
import DiscussionsContent from './tabcontent/DiscussionsContent';
import ScreenshotsContent from './tabcontent/ScreenshotsContent';
import NewestContent from './tabcontent/NewestContent';
import TrendingContent from './tabcontent/TrendingContent';
import TeamRecruitContent from './tabcontent/TeamRecruitContent';

const CommunityContent = () => {
  const { activeTab, posts, loading } = useGameCommunity();

  const renderContent = () => {
    switch (activeTab) {
      case 'discussions':
        return <DiscussionsContent />;
      case 'screenshots':
        return <ScreenshotsContent />;
      case 'team-recruit':
        return <TeamRecruitContent />;

      case 'newest':
        return <NewestContent />;
      case 'trending':
        return <TrendingContent />;
      default:
        return <DiscussionsContent />;
    }
  };

  return <div className='max-w-7xl mx-auto px-4 py-6'>{renderContent()}</div>;
};

export default CommunityContent;
