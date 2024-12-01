// utils/rawg.js
const RAWG_API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export async function fetchGames(page = 1, pageSize = 20) {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${RAWG_API_KEY}&page=${page}&page_size=${pageSize}&ordering=-rating`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}

export async function fetchGamesByCategory(category) {
  if (!RAWG_API_KEY) {
    console.error('RAWG API key is missing');
    return { results: [] };
  }

  let queryParams = '';
  let size = '';
  switch (category) {
    case 'popular':
      queryParams = '&ordering=-rating&metacritic=80,100';
      size = 'page_size=100';
      break;
    case 'free':
      queryParams = '&tags=free-to-play';
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
      size = 'page_size=20';
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
    const response = await fetch(`${BASE_URL}/games/${id}?key=${RAWG_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
}

export async function searchGames(searchTerm) {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${RAWG_API_KEY}&search=${searchTerm}&page_size=10`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching games:', error);
    throw error;
  }
}
