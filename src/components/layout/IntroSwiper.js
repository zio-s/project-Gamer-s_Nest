'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const IntroSwiper = () => {
  // 슬라이더에 표시될 데이터
  const introSlides = [
    {
      id: 1,
      title: '사이버펑크',
      subtitle: '2077',
      category: 'xbox pc',
      description:
        '사이버펑크의 세계로 뛰어드십시오. 사이버펑크 2077의 오리지널 스토리라인과 흥미진진한 스파이 스릴러 확장팩 팬텀 리버티에서부터 수상 경력에 빛나는 애니메이션 시리즈 사이버펑크: 엣지러너에 이르기까지, 이 치명적인 거대 도시 나이트 시티에는 수많은 이야기가 여러분을 기다리고 있습니다.',
      rating: 4,
      price: '199.99',
      image: '/pattern/main/swiper-1.jpg',
      badge: '신제품',
    },
    {
      id: 2,
      title: '사이버펑크',
      subtitle: '팬텀 리버티',
      category: 'xbox pc',
      description:
        '팬텀 리버티는 사이버펑크 2077의 새로운 첩보 스릴러 어드벤처입니다. 사이버웨어로 강화된 용병 V가 되어 위험한 첩보 임무와 NUSA 대통령 구출 작전에 뛰어드세요. 도그타운의 위험 구역에서 짓밟힌 충성심과 비열한 정치적 음모로 얽힌 그물을 풀어내기 위해 동맹과 힘을 합쳐야 합니다. 당신은 살아남을 수 있습니까?',
      rating: 5,
      price: '89.99',
      image: '/pattern/main/swiper-2.jpg',
      badge: '베스트셀러',
    },
    // 추가 슬라이드...
  ];

  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={'auto'}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        // navigation={true}
        className='!w-full h-[600px] bg-gray-900'
      >
        {introSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-full gap-5'>
              <div className='flex flex-col justify-center space-y-6'>
                {/* 별점 */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <span aria-hidden='true' key={i} className={i < slide.rating ? 'text-yellow-400' : 'text-gray-400'}>
                      ★
                    </span>
                  ))}
                </div>

                {/* 제목 & 부제목 */}
                <div className='space-y-2'>
                  <h1 className='text-4xl font-bold text-white'>{slide.title}</h1>
                  <p className='text-base lg:text-xl text-gray-400'>{slide.subtitle}</p>
                  <p className='text-base lg:text-xl'>
                    <span className='text-purple-500'>{slide.category}</span>
                  </p>
                </div>

                {/* 설명 */}
                <p className='text-gray-400 max-w-lg'>{slide.description}</p>

                {/* 버튼 그룹 */}
                <div className='flex gap-4 lg:flex-row gap-4'>
                  <button className='px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors'>
                    COMMUNITY
                  </button>
                  <button className='px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'>
                    GAMES
                  </button>
                </div>
              </div>

              <div className='relative flex items-center justify-center  aspect-auto'>
                <Image
                  src={slide.image}
                  width={1400}
                  height={700}
                  objectFit='cover'
                  alt={'title'}
                  className='object-center'
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntroSwiper;
