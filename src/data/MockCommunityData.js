// mockData/communityData.js

export const mockQuestions = [
  {
    id: 1,
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
  {
    id: 2,
    title: '엘든 링 말리케스의 검 패리 타이밍',
    preview: '말리케스 검 패리 타이밍이 너무 어려워요. 팁 좀 공유해주세요.',
    content:
      '말리케스와 대결할 때 검 패리 타이밍을 못 잡겠어요. 특히 연속 공격할 때 두 번째 공격을 어떻게 막아야 할지 모르겠습니다. 영상에서 보면 쉬워 보이는데 실전에서는 너무 어렵네요. 패리 성공하신 분들 팁 좀 주세요.',
    category: 'action',
    subcategory: 'elden-ring',
    votes: 38,
    views: 203,
    answers: 12,
    tags: ['elden-ring', 'boss-fight', 'parry', 'tips'],
    createdAt: '2024-03-02T10:15:00.000Z',
    username: 'SoulsMaster',
    userAvatar: '/api/placeholder/24/24',
    status: 'hot',
  },
  {
    id: 3,
    title: '스타필드 최적화 설정 공유',
    preview: 'RTX 3070으로 플레이 중인데 프레임이 많이 불안정합니다. 최적화 설정 공유 부탁드립니다.',
    content:
      'CPU: Ryzen 7 5800X\nGPU: RTX 3070\nRAM: 32GB\n\n위 사양으로 플레이 중인데 도시에서 프레임이 많이 떨어집니다. DLSS는 퀄리티로 설정했고, 셰도우는 중간으로 낮췄는데도 불안정하네요. 비슷한 사양으로 안정적으로 플레이하시는 분들 설정 좀 공유해주세요.',
    category: 'tech',
    subcategory: 'performance',
    votes: 56,
    views: 445,
    answers: 8,
    tags: ['starfield', 'optimization', 'performance', 'nvidia'],
    createdAt: '2024-03-02T15:45:00.000Z',
    username: 'TechGamer',
    userAvatar: '/api/placeholder/24/24',
    status: 'solved',
  },
  {
    id: 4,
    title: '롤 14.5 패치 원거리 챔프 티어',
    preview: '14.5 패치 후 원거리 챔피언 티어가 어떻게 바뀌었나요?',
    content:
      '14.5 패치 이후로 원거리 챔피언들 티어가 많이 바뀐 것 같은데, 현재 메타에서 좋은 원거리 챔피언 추천해주세요. 특히 진과 케이틀린 너프 이후 대체할 만한 챔피언이 궁금합니다.',
    category: 'moba',
    subcategory: 'lol',
    votes: 29,
    views: 312,
    answers: 15,
    tags: ['league-of-legends', 'patch-14.5', 'adc', 'tier-list'],
    createdAt: '2024-03-03T09:20:00.000Z',
    username: 'ADCMain',
    userAvatar: '/api/placeholder/24/24',
    status: 'discussion',
  },
  {
    id: 5,
    title: '디아블로 4 시즌 3 바바리안 빌드',
    preview: '시즌 3에서 바바리안으로 쾌속 레벨링하는 빌드 추천해주세요.',
    content:
      '시즌 3 시작하면서 바바리안으로 시작하려고 합니다. 초반에 빠르게 레벨링 할 수 있는 빌드 추천해주세요. 주요 스킬과 장비 우선순위도 알려주시면 감사하겠습니다.',
    category: 'arpg',
    subcategory: 'diablo',
    votes: 45,
    views: 280,
    answers: 6,
    tags: ['diablo-4', 'barbarian', 'build', 'season-3'],
    createdAt: '2024-03-03T11:30:00.000Z',
    username: 'HoradrimUser',
    userAvatar: '/api/placeholder/24/24',
    status: 'trending',
  },
  {
    id: 6,
    title: '팔월드 모드 추천',
    preview: '팔월드 재미있게 즐길 수 있는 모드 추천해주세요.',
    content:
      '팔월드를 50시간 정도 플레이했는데 이제 좀 지루해져서 모드를 설치해보려고 합니다. 게임성을 개선하면서 밸런스도 해치지 않는 모드 추천 부탁드립니다. 특히 건설이나 자동화 관련 모드에 관심이 있습니다.',
    category: 'survival',
    subcategory: 'palworld',
    votes: 33,
    views: 178,
    answers: 9,
    tags: ['palworld', 'mods', 'recommendation'],
    createdAt: '2024-03-03T14:45:00.000Z',
    username: 'PalTamer',
    userAvatar: '/api/placeholder/24/24',
    status: 'new',
  },
];

export const categories = [
  { label: 'RPG', value: 'rpg', count: 234 },
  { label: 'Action', value: 'action', count: 156 },
  { label: 'Strategy', value: 'strategy', count: 98 },
  { label: 'FPS', value: 'fps', count: 145 },
  { label: 'MOBA', value: 'moba', count: 123 },
  { label: 'Survival', value: 'survival', count: 87 },
  { label: 'Technical', value: 'tech', count: 67 },
  { label: 'News', value: 'news', count: 45 },
];

export const tags = [
  { label: '팁과 가이드', value: 'tips-guides', count: 567 },
  { label: '버그 리포트', value: 'bug-report', count: 234 },
  { label: '빌드 공유', value: 'builds', count: 345 },
  { label: '패치노트', value: 'patch-notes', count: 123 },
  { label: '토론', value: 'discussion', count: 789 },
  { label: '질문', value: 'question', count: 456 },
  { label: '공략', value: 'guides', count: 678 },
  { label: '리뷰', value: 'review', count: 234 },
];

export const statuses = [
  { label: '답변 완료', value: 'solved', count: 345 },
  { label: '진행 중', value: 'discussion', count: 234 },
  { label: '인기글', value: 'hot', count: 56 },
  { label: 'New', value: 'new', count: 89 },
  { label: '추천글', value: 'trending', count: 45 },
];

// 유저 활동 관련 목업 데이터
export const userActivities = [
  {
    id: 1,
    type: 'question',
    title: '질문을 작성했습니다.',
    link: '/community/question/1',
    createdAt: '2024-03-03T16:30:00.000Z',
  },
  {
    id: 2,
    type: 'answer',
    title: '답변을 작성했습니다.',
    link: '/community/question/2',
    createdAt: '2024-03-03T16:35:00.000Z',
  },
  {
    id: 3,
    type: 'comment',
    title: '댓글을 작성했습니다.',
    link: '/community/question/3',
    createdAt: '2024-03-03T16:40:00.000Z',
  },
];

// 추천 태그 (사용자 관심사 기반)
export const recommendedTags = [
  { label: '롤', value: 'lol', count: 1234 },
  { label: '엘든링', value: 'elden-ring', count: 567 },
  { label: '디아블로4', value: 'diablo-4', count: 890 },
  { label: '배틀그라운드', value: 'battlegrounds', count: 456 },
];
