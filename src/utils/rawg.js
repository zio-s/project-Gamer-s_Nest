// utils/rawg.js
const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

const ITEMS_PER_PAGE = 10;
export const fetchGames = async (filters) => {
  try {
    const params = new URLSearchParams({
      key: RAWG_API_KEY,
      page_size: ITEMS_PER_PAGE,
      page: filters.page,
      search: filters.search,
      ordering: filters.sortBy === 'recent' ? '-released' : '-rating',
      // genres: filters.categories.join(','), // 카테고리 필터 추가
    });

    const response = await fetch(`${BASE_URL}/games?${params}`);
    const data = await response.json();

    // RAWG 데이터를 커뮤니티 형식으로 변환
    const questions = data.results.map((game) => ({
      id: game.id,
      title: game.name,
      preview: game.description_raw?.slice(0, 200) || '',
      category: game.genres[0]?.name.toLowerCase() || 'uncategorized',
      votes: Math.floor(game.rating * 20), // 5점 만점을 100점 만점으로 변환
      views: game.ratings_count,
      answers: Math.floor(Math.random() * 20), // 임시 데이터
      tags: game.tags.slice(0, 3).map((tag) => tag.name),
      createdAt: game.released,
      username: 'RAWG User',
      userAvatar: game.background_image,
      gameImage: game.background_image,
      platforms: game.platforms.map((p) => p.platform.name),
    }));

    return {
      questions,
      hasMore: data.next !== null,
    };
  } catch (error) {
    console.error('Failed to fetch RAWG data:', error);
    return { questions: [], hasMore: false };
  }
};
export async function fetchGamesByCategory(category) {
  if (!RAWG_API_KEY) {
    console.error('RAWG API key is missing');
    return { results: [] };
  }

  let queryParams = '';
  let size = '';
  switch (category) {
    case 'popular':
      queryParams = '&ordering=-rating&metacritic=80,100&clips=true';
      size = 'page_size=100';
      break;
    case 'free':
      queryParams = '&tags=free-to-play';
      break;
    case 'genres':
      queryParams = '&genres';
      break;
    case 'trending':
      queryParams = '&ordering=-added&dates=2022-01-01,2025-12-31';
      size = 'page_size=100';
      break;
    case 'all':
      queryParams = '&ordering=-relevance'; // 전체 게임
      size = 'page_size=100';
      break;
    case 'new':
      queryParams = '&ordering=-released&dates=2024-01-01,2024-12-31'; // 신규 게임
      break;
    case 'upcoming':
      queryParams = '&dates=2024-03-01,2025-12-31&ordering=released'; // 출시 예정
      break;
    case 'action':
      queryParams = '&genres=action&ordering=-rating'; // 액션 게임
      break;
    case 'multiplayer':
      queryParams = '&tags=multiplayer&ordering=-rating'; // 멀티플레이어
      break;
    case 'sale':
      queryParams = '&tags=steam-deals&ordering=-rating'; // 할인 중인 게임
      break;
    case 'indie':
      queryParams = '&genres=indie&ordering=-rating'; // 인디 게임
      break;
    case 'rpg':
      queryParams = '&genres=role-playing-games-rpg&ordering=-rating'; // RPG 게임
      break;
    default:
      queryParams = '&ordering=-rating';
      size = 'page_size=30';
  }

  try {
    const response = await fetch(`${BASE_URL}/games?key=${RAWG_API_KEY}&${size}${queryParams}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results; // results 배열만 반환
  } catch (error) {
    console.error(`Error fetching ${category} games:`, error);
    return [];
  }
}

export async function fetchGameDetails(id) {
  try {
    // 기본 게임 정보 가져오기
    const gameResponse = await fetch(`${BASE_URL}/games/${id}?key=${RAWG_API_KEY}`);
    const gameData = await gameResponse.json();

    // 스크린샷 가져오기
    const screenshotsResponse = await fetch(`${BASE_URL}/games/${id}/screenshots?key=${RAWG_API_KEY}`);
    const screenshotsData = await screenshotsResponse.json();
    // 리뷰 데이터 가져오기
    const reviewsResponse = await fetch(`${BASE_URL}/games/${id}/reviews?key=${RAWG_API_KEY}`);
    const reviewsData = await reviewsResponse.json();
    // 게임 데이터와 스크린샷 데이터 합치기
    return {
      ...gameData,
      screenshots: screenshotsData.results,
      reviews: reviewsData.results,
    };
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
}

export async function searchGames({ page = 1, pageSize = 20, searchTerm = '' }) {
  try {
    const searchParams = new URLSearchParams({
      key: RAWG_API_KEY,
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    // 검색어가 있으면 search 파라미터 추가, 없으면 정렬 기준 추가
    if (searchTerm) {
      searchParams.append('search', searchTerm);
      searchParams.append('search_precise', 'true');
    } else {
      searchParams.append('ordering', '-rating');
    }

    const response = await fetch(`${BASE_URL}/games?${searchParams.toString()}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}
