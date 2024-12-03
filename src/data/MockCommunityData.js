export const mockQuestions = [
  // 기존 데이터
  {
    id: 1,
    gameId: 3498, // GTA V
    title: "Baldur's Gate 3에서 가장 효율적인 멀티클래스 조합이 뭔가요?",
    preview:
      '현재 팔라딘으로 플레이 중인데, 멀티클래스를 고민하고 있습니다. 워록이나 소서러와의 조합을 생각 중인데 어떤 것이 좋을까요?',
    content:
      '레벨 4까지는 팔라딘으로 플레이했고, 이제 멀티클래스를 고민하고 있습니다. 주로 근접전투와 파티 서포트를 맡고 있는데, 여기에 마법 능력을 추가하고 싶습니다. 워록(The Great Old One)이나 소서러(Wild Magic)를 고려중입니다. 어떤 선택이 더 시너지가 좋을까요?',
    category: 'rpg',
    subcategory: 'baldurs-gate',
    votes: 42,
    views: 156,
    answers: 5,
    tags: ['baldurs-gate-3', 'build', 'multiclass', 'paladin'],
    createdAt: '2024-03-01T08:30:00.000Z',
    username: 'DnDMaster',
    userAvatar: '/api/placeholder/24/24',
    status: 'answered',
  },

  // 추가 데이터
  {
    id: 7,
    gameId: 41494, // Cyberpunk 2077
    title: '사이버펑크 2077 팬텀 리버티 DLC 구매할만 한가요?',
    preview: '패치 2.0 이후 본편은 재미있게 했는데, DLC는 어떤가요?',
    content:
      '본편을 100시간 정도 플레이했고 정말 재미있었습니다. 패치 2.0의 변경사항들도 굉장히 마음에 들었는데, DLC도 그만한 가치가 있을까요? 특히 새로운 사이버웨어와 미션의 퀄리티가 궁금합니다.',
    category: 'rpg',
    subcategory: 'cyberpunk',
    votes: 89,
    views: 342,
    answers: 15,
    tags: ['cyberpunk-2077', 'phantom-liberty', 'dlc', 'review'],
    createdAt: '2024-03-04T11:20:00.000Z',
    username: 'NightCity_V',
    userAvatar: '/api/placeholder/24/24',
    status: 'hot',
  },
  {
    id: 8,
    gameId: 22511, // Elden Ring
    title: '엘든링 DLC 섀도우 오브 더 어드트리 보스 공략',
    preview: '메시머가 너무 어려워요. 특히 2페이즈에서 계속 막히네요.',
    content:
      '레벨 150, 힘/신앙 빌드로 플레이 중입니다. 1페이즈는 어떻게 깼는데 2페이즈에서 광역 공격을 피하기가 너무 어렵네요. 룬레벨을 더 올려야 할까요? 아니면 빌드를 수정해야 할까요?',
    category: 'action',
    subcategory: 'elden-ring',
    votes: 156,
    views: 890,
    answers: 23,
    tags: ['elden-ring', 'dlc', 'boss-guide', 'build'],
    createdAt: '2024-03-04T15:45:00.000Z',
    username: 'TarnishedOne',
    userAvatar: '/api/placeholder/24/24',
    status: 'trending',
  },
  {
    id: 9,
    gameId: 3191, // Portal 2
    title: '포탈2 co-op 퍼즐 해결 도움 필요해요',
    preview: '챔버 6의 마지막 퍼즐을 도저히 못 풀겠어요.',
    content:
      '친구와 co-op을 하고 있는데 챔버 6 마지막 퍼즐에서 막혔습니다. 두 개의 포탈을 동시에 사용해야 하는 것 같은데, 타이밍을 어떻게 맞춰야 할지 모르겠어요. 힌트만 살짝 부탁드립니다!',
    category: 'puzzle',
    subcategory: 'portal',
    votes: 34,
    views: 167,
    answers: 8,
    tags: ['portal-2', 'co-op', 'puzzle', 'help'],
    createdAt: '2024-03-04T16:30:00.000Z',
    username: 'PortalMaster',
    userAvatar: '/api/placeholder/24/24',
    status: 'solved',
  },
  {
    id: 10,
    gameId: 2551, // Dark Souls III
    title: '다크소울3 최적의 PVP 레벨대가 어떻게 되나요?',
    preview: 'PVP를 처음 시작하려고 하는데 추천 레벨대를 알고 싶습니다.',
    content:
      '다크소울3를 처음 깨고 PVP를 시작하려고 합니다. 현재 레벨 95인데 더 올려야 할까요? 주로 어느 지역에서 매칭이 잘 되나요? 빌드는 품질형으로 가고 있습니다.',
    category: 'action',
    subcategory: 'dark-souls',
    votes: 67,
    views: 445,
    answers: 19,
    tags: ['dark-souls-3', 'pvp', 'build', 'meta'],
    createdAt: '2024-03-04T17:15:00.000Z',
    username: 'Ashen_One',
    userAvatar: '/api/placeholder/24/24',
    status: 'discussion',
  },
  {
    id: 11,
    gameId: 41494, // Cyberpunk 2077
    title: '사이버펑크 2077 스텔스 빌드 추천',
    preview: '해킹/스텔스 위주로 플레이하고 싶은데 어떻게 빌드를 짜야 할까요?',
    content:
      '새로운 캐릭터로 시작하려고 하는데, 이번에는 총이나 근접무기 대신 해킹과 스텔스 위주로 해보려고 합니다. 어떤 특성과 사이버웨어를 선택해야 할까요? 초반에 특히 힘든 것 같아서 레벨링 팁도 부탁드립니다.',
    category: 'rpg',
    subcategory: 'cyberpunk',
    votes: 122,
    views: 567,
    answers: 12,
    tags: ['cyberpunk-2077', 'build', 'stealth', 'netrunner'],
    createdAt: '2024-03-04T18:00:00.000Z',
    username: 'NetRunner2077',
    userAvatar: '/api/placeholder/24/24',
    status: 'trending',
  },
  {
    id: 12,
    gameId: 3328, // The Witcher 3
    title: '위쳐3 뉴게임플러스 특화 빌드',
    preview: '뉴게임플러스에서 데스마치 난이도로 도전하려고 합니다. 추천 빌드 있을까요?',
    content:
      '일반 플레이는 막 깼고, 이제 뉴게임플러스를 데스마치 난이도로 도전하려고 합니다. 알케미 빌드가 좋다고 하던데, 구체적으로 어떤 특성과 장비를 갖춰야 할까요? 초반부터 엔딩까지 전체적인 빌드 발전 방향을 알고 싶습니다.',
    category: 'rpg',
    subcategory: 'witcher',
    votes: 234,
    views: 876,
    answers: 34,
    tags: ['witcher-3', 'build', 'new-game-plus', 'death-march'],
    createdAt: '2024-03-04T19:30:00.000Z',
    username: 'Geralt_of_Rivia',
    userAvatar: '/api/placeholder/24/24',
    status: 'hot',
  },
];

export const categories = [
  { label: 'RPG', value: 'rpg', count: 234 },
  { label: 'Action', value: 'action', count: 156 },
  { label: 'Strategy', value: 'strategy', count: 98 },
  { label: 'FPS', value: 'fps', count: 145 },
  { label: 'MOBA', value: 'moba', count: 123 },
  { label: 'Survival', value: 'survival', count: 87 },
  { label: 'Puzzle', value: 'puzzle', count: 45 },
  { label: 'Sports', value: 'sports', count: 67 },
  { label: 'Racing', value: 'racing', count: 34 },
  { label: 'Simulation', value: 'simulation', count: 56 },
];

export const tags = [
  { label: '게임 공략', value: 'guides', count: 678 },
  { label: '빌드 공유', value: 'builds', count: 345 },
  { label: '팁과 노하우', value: 'tips', count: 567 },
  { label: '버그 리포트', value: 'bug-report', count: 234 },
  { label: '토론', value: 'discussion', count: 789 },
  { label: 'DLC/패치', value: 'dlc-patch', count: 123 },
  { label: 'PVP', value: 'pvp', count: 234 },
  { label: '공략집', value: 'walkthrough', count: 456 },
  { label: '밸런스', value: 'balance', count: 345 },
  { label: '커스터마이징', value: 'customization', count: 178 },
];

export const statuses = [
  { label: '해결됨', value: 'solved', count: 345 },
  { label: '토론중', value: 'discussion', count: 234 },
  { label: '인기글', value: 'hot', count: 56 },
  { label: '최신글', value: 'new', count: 89 },
  { label: '추천글', value: 'trending', count: 45 },
];
