// 장르 번역
export const translateGenre = (genre) => {
  const genreMap = {
    Action: '액션',
    Adventure: '어드벤처',
    RPG: 'RPG',
    Strategy: '전략',
    Shooter: '슈팅',
    Casual: '캐주얼',
    Simulation: '시뮬레이션',
    Puzzle: '퍼즐',
    Arcade: '아케이드',
    Platformer: '플랫폼',
    Racing: '레이싱',
    'Massively Multiplayer': 'MMO',
    Sports: '스포츠',
    Fighting: '격투',
    Family: '가족',
    'Board Games': '보드게임',
    Educational: '교육',
    Card: '카드',
  };
  return genreMap[genre] || genre;
};

// 플랫폼 번역
export const translatePlatform = (platform) => {
  const platformMap = {
    PC: 'PC',
    'PlayStation 5': 'PS5',
    'PlayStation 4': 'PS4',
    'Xbox One': 'Xbox One',
    'Xbox Series S/X': 'Xbox Series',
    'Nintendo Switch': '닌텐도 스위치',
    iOS: 'iOS',
    Android: '안드로이드',
    macOS: 'macOS',
    Linux: '리눅스',
    'Xbox 360': 'Xbox 360',
    'PlayStation 3': 'PS3',
    'PlayStation 2': 'PS2',
    'Nintendo 3DS': '닌텐도 3DS',
    'Nintendo DS': '닌텐도 DS',
    'Nintendo DSi': '닌텐도 DSi',
    Xbox: 'Xbox',
  };
  return platformMap[platform] || platform;
};

// 태그 번역
export const translateTag = (tag) => {
  const tagMap = {
    Singleplayer: '싱글플레이어',
    Multiplayer: '멀티플레이어',
    'Co-op': '협동',
    'Online Co-Op': '온라인 협동',
    'Local Co-Op': '로컬 협동',
    PvP: 'PvP',
    'Online PvP': '온라인 PvP',
    'Local PvP': '로컬 PvP',
    Fantasy: '판타지',
    'Action RPG': '액션 RPG',
    'Open World': '오픈 월드',
    'First-Person': '1인칭',
    'Third-Person': '3인칭',
    'Sci-fi': 'SF',
    FPS: 'FPS',
    Horror: '공포',
    Survival: '생존',
    Stealth: '스텔스',
    'Story Rich': '스토리',
    Atmospheric: '분위기',
    Difficult: '고난이도',
    Casual: '캐주얼',
    Racing: '레이싱',
    Sports: '스포츠',
    Combat: '전투',
    Classic: '클래식',
    Retro: '레트로',
    Indie: '인디',
    Adventure: '어드벤처',
    Strategy: '전략',
    Simulation: '시뮬레이션',
    Puzzle: '퍼즐',
    'Side Scroller': '횡스크롤',
    Platformer: '플랫폼',
    Sandbox: '샌드박스',
    'Early Access': '얼리 액세스',
  };
  return tagMap[tag] || tag;
};

// ESRB 등급 번역
export const translateESRB = (rating) => {
  const esrbMap = {
    Everyone: '전체이용가',
    'Everyone 10+': '10세 이상',
    Teen: '청소년',
    Mature: '성인',
    'Adults Only': '성인전용',
    'Rating Pending': '등급 보류',
  };
  return esrbMap[rating] || rating;
};

// 운영체제 번역
export const translateOS = (os) => {
  return os
    .replace('Windows', '윈도우')
    .replace('Requires a 64-bit processor and operating system', '64비트 프로세서 및 운영체제 필요');
};

// 시스템 요구사항 레이블 번역
export const translateRequirementLabel = (label) => {
  const labelMap = {
    Minimum: '최소',
    Recommended: '권장',
    OS: '운영체제',
    Processor: '프로세서',
    Memory: '메모리',
    Graphics: '그래픽',
    Storage: '저장공간',
    'Additional Notes': '추가 사항',
  };
  return labelMap[label] || label;
};
