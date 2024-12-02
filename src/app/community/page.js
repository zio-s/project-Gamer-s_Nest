'use client';
import React, { useState } from 'react';
import FilterSection from './components/FilterSection';
import QuestionCard from './components/QuestionCard';
import QuestionList from './components/QuestionList';
import { Clock, MessageSquare, Search, Star, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('newest');
  const questions = [
    {
      id: 1,
      title: 'How to defeat the final boss in Elden Ring?',
      preview: 'Ive been trying to defeat the final boss but keep failing...',
      votes: 42,
      answers: 5,
      tags: ['strategy', 'boss-fight', 'elden-ring'],
      username: 'user123',
      timeAgo: '2 hours ago',
      userAvatar: '/api/placeholder/24/24',
    },
    {
      id: 2,
      title: 'How to defeat the final boss in Elden Ring?',
      preview: 'Ive been trying to defeat the final boss but keep failing...',
      votes: 42,
      answers: 5,
      tags: ['strategy', 'boss-fight', 'elden-ring'],
      username: 'user123',
      timeAgo: '2 hours ago',
      userAvatar: '/api/placeholder/24/24',
    },
    // ... more questions
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-[#1a1b1e] min-h-screen'>
      <div id='hero' className='relative bg-[#7e3af2] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-bold mb-4'>Game Community</h1>
            <p className='text-xl text-purple-100 mb-8'>
              Join the discussion, share your gaming experience, and learn from fellow gamers
            </p>
            {/* Search Bar */}
            <div className='relative max-w-2xl'>
              <input
                type='text'
                placeholder='Search questions, reviews, or guides...'
                className='w-full px-4 py-3 pl-12 rounded-lg bg-[#2d2d3a]/80 backdrop-blur-sm 
                          border border-purple-500/20 placeholder-purple-200/60 text-white
                          focus:outline-none focus:ring-2 focus:ring-purple-500/50'
              />
              <Search className='absolute left-4 top-3.5 w-5 h-5 text-purple-200' />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#1a1b1e]' />
      </div>

      <nav
        className={`sticky top-0 z-30 border-b border-[#2d2d3a] bg-[#1a1b1e] ${
          scrolled ? 'shadow-lg shadow-black/30' : ''
        }`}
      >
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center h-14 -mb-px'>
            {[
              { id: 'newest', label: 'Newest', icon: Clock },
              { id: 'trending', label: 'Trending', icon: TrendingUp },
              { id: 'featured', label: 'Featured', icon: Star },
              { id: 'discussions', label: 'Discussions', icon: MessageSquare },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center px-4 h-full border-b-2 text-sm font-medium ${
                  activeTab === id
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
              >
                <Icon className='w-4 h-4 mr-2' />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className='max-w-7xl mx-auto px-4 py-6'>
        <div className='flex gap-6'>
          {/* Sidebar */}
          <aside className='w-64 flex-shrink-0'>
            <div className='sticky top-20 bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20 p-4'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='font-bold text-white'>Filters</h2>
                <button className='text-sm text-purple-400 hover:text-purple-300'>Reset</button>
              </div>
              <FilterSection />
            </div>
          </aside>

          {/* Main Content */}
          <main className='flex-1'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-xl font-bold text-white'>All Questions</h2>
              <button className='px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg'>
                Ask Question
              </button>
            </div>
            <div className='space-y-4'>
              {questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
