import React from 'react';
import FilterSection from '../FilterSection';
import ResetButton from '../ResetButton';
import SearchBar from '../SearchBar';
import { useGameCommunity } from '@/contexts/FilterContext';
const dummyPosts = [
  {
    id: 1,
    title: '디아블로4 시즌2 신규 고유 아이템 정보',
    author: '게임마스터',
    createdAt: '2024-12-03',
    likes: 2543,
    comments: 325,
    views: 12500,
    tags: ['디아블로4', '공략'],
    category: '게임 정보',
  },
  {
    id: 2,
    title: '발더스 게이트3 히든 엔딩 발견',
    author: 'RPG킹',
    createdAt: '2024-12-03',
    likes: 1876,
    comments: 234,
    views: 9800,
    tags: ['발더스게이트3', '정보'],
    category: '공략',
  },
  {
    id: 3,
    title: 'WOW 신규 레이드 공략법 공유',
    author: '와우매니아',
    createdAt: '2024-12-02',
    likes: 1654,
    comments: 198,
    views: 8900,
    tags: ['WOW', '공략'],
    category: '공략',
  },
  {
    id: 4,
    title: '스타필드 새로운 모드 추천',
    author: '모드제작자',
    createdAt: '2024-12-02',
    likes: 1432,
    comments: 167,
    views: 7600,
    tags: ['스타필드', '모드'],
    category: '게임 정보',
  },
  {
    id: 5,
    title: '롤 신규 챔피언 티저 분석',
    author: '롤전문가',
    createdAt: '2024-12-01',
    likes: 1298,
    comments: 145,
    views: 6900,
    tags: ['리그오브레전드', '정보'],
    category: '게임 정보',
  },
  {
    id: 6,
    title: '젤다의 전설: 티어즈 오브 더 킹덤 숨겨진 보물 찾기',
    author: '링크모험가',
    createdAt: '2024-12-01',
    likes: 1045,
    comments: 112,
    views: 5200,
    tags: ['젤다', '공략', '숨겨진 보물'],
    category: '공략',
  },
  {
    id: 7,
    title: '콜 오브 듀티 MW3 멀티플레이 전략 가이드',
    author: 'FPS고수',
    createdAt: '2024-12-03',
    likes: 1587,
    comments: 213,
    views: 8900,
    tags: ['콜오브듀티', '멀티플레이', '공략'],
    category: '공략',
  },
  {
    id: 8,
    title: '파이널 판타지 16 초반 골드 파밍 방법',
    author: 'RPG전문가',
    createdAt: '2024-12-02',
    likes: 1342,
    comments: 187,
    views: 7200,
    tags: ['파판16', '골드', '팁'],
    category: '게임 정보',
  },
  {
    id: 9,
    title: '레드 데드 리뎀션 2 진엔딩 조건',
    author: '서부개척자',
    createdAt: '2024-12-03',
    likes: 1678,
    comments: 254,
    views: 9300,
    tags: ['레드데드', '스토리', '진엔딩'],
    category: '스토리 정보',
  },
  {
    id: 10,
    title: '피파 24: 최강 포메이션 추천',
    author: '축구마스터',
    createdAt: '2024-12-02',
    likes: 1450,
    comments: 188,
    views: 8600,
    tags: ['피파24', '포메이션', '공략'],
    category: '게임 정보',
  },
  {
    id: 11,
    title: '호그와트 레거시 모든 마법 주문 위치 정리',
    author: '해리포터팬',
    createdAt: '2024-12-01',
    likes: 1764,
    comments: 209,
    views: 9700,
    tags: ['호그와트', '마법', '위치'],
    category: '공략',
  },
  {
    id: 12,
    title: '리그 오브 레전드 티어 올리는 심리전 스킬',
    author: '솔랭장인',
    createdAt: '2024-12-02',
    likes: 1423,
    comments: 164,
    views: 7500,
    tags: ['리그오브레전드', '티어', '심리전'],
    category: '게임 정보',
  },
  {
    id: 13,
    title: '엘든 링 속성 무기 효율 분석',
    author: '빙룡사냥꾼',
    createdAt: '2024-12-03',
    likes: 1854,
    comments: 231,
    views: 8900,
    tags: ['엘든링', '속성무기', '팁'],
    category: '공략',
  },
  {
    id: 14,
    title: '디아블로4 새로운 클래스 예고 분석',
    author: '헬게이머',
    createdAt: '2024-12-01',
    likes: 1975,
    comments: 274,
    views: 10100,
    tags: ['디아블로4', '클래스', '정보'],
    category: '게임 정보',
  },
  {
    id: 15,
    title: '스타크래프트2 기본 빌드 초보자 가이드',
    author: '스타초보',
    createdAt: '2024-12-02',
    likes: 1234,
    comments: 145,
    views: 6900,
    tags: ['스타크래프트2', '빌드', '초보자'],
    category: '공략',
  },
  {
    id: 16,
    title: '발더스 게이트3 전설 무기 수집 방법',
    author: '던전탐험가',
    createdAt: '2024-12-03',
    likes: 2098,
    comments: 298,
    views: 12000,
    tags: ['발더스게이트3', '무기', '공략'],
    category: '공략',
  },
  {
    id: 17,
    title: '포켓몬 스칼렛&바이올렛 레전더리 위치 정리',
    author: '포덕',
    createdAt: '2024-12-01',
    likes: 1534,
    comments: 177,
    views: 8200,
    tags: ['포켓몬', '레전더리', '위치'],
    category: '게임 정보',
  },
  {
    id: 18,
    title: '어쌔신 크리드 미라지 암살 루트 추천',
    author: '은신고수',
    createdAt: '2024-12-02',
    likes: 1389,
    comments: 165,
    views: 7500,
    tags: ['어쌔신크리드', '루트', '팁'],
    category: '공략',
  },
  {
    id: 19,
    title: '사이버펑크 2077: 최고의 퀘스트 추천',
    author: '나이트시티사람',
    createdAt: '2024-12-02',
    likes: 1897,
    comments: 236,
    views: 9600,
    tags: ['사이버펑크', '퀘스트', '추천'],
    category: '스토리 정보',
  },
  {
    id: 20,
    title: '오버워치2 새로운 메타 분석',
    author: '탱커장인',
    createdAt: '2024-12-03',
    likes: 1654,
    comments: 204,
    views: 8700,
    tags: ['오버워치', '메타', '정보'],
    category: '게임 정보',
  },
];
const PostCard = ({ post }) => (
  <div className='bg-[#333348] rounded-lg p-4 hover:bg-[#3d3d4a] transition-colors cursor-pointer'>
    <div className='flex justify-between items-start mb-2'>
      <h3 className='text-white font-medium text-lg'>{post.title}</h3>
      <div className='flex gap-2 text-sm text-gray-400'>
        {post.tags.map((tag) => (
          <span key={tag} className='bg-[#1a1b1e] px-2 py-1 rounded-full'>
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className='flex justify-between items-center text-sm'>
      <div className='flex items-center gap-2 text-gray-400'>
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.createdAt}</span>
        <span>•</span>
        <span>{post.category}</span>
      </div>
      <div className='flex items-center gap-4 text-gray-400'>
        <span>👍 {post.likes.toLocaleString()}</span>
        <span>💬 {post.comments.toLocaleString()}</span>
        <span>👁 {post.views.toLocaleString()}</span>
      </div>
    </div>
  </div>
);

const TrendingContent = () => {
  const { resetFilters } = useGameCommunity();
  const sortedPosts = [...dummyPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <div className='bg-[#1a1b1e] min-h-screen'>
      <SearchBar />

      <div className='flex flex-col md:flex-row gap-6 mt-6 '>
        <div className='w-full md:w-64'>
          <div className='bg-[#2d2d3a] rounded-lg shadow-lg shadow-black/20 p-4 md:sticky md:top-36'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='font-bold text-white'>필터</h2>
              <ResetButton resetFilters={resetFilters} />
            </div>
            <FilterSection />
          </div>
        </div>

        {/* Main Content */}
        <main className='flex-1 flex flex-col gap-4'>
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default TrendingContent;
