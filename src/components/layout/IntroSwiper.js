'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const IntroSwiper = () => {
  // 슬라이더에 표시될 데이터
  const introSlides = [
    {
      id: 1,
      title: 'Headphones',
      subtitle: 'W103 Magic tour',
      category: 'headset',
      description: 'Wireless joystick from Microsoft. Ideal for those who are fed up with wires.',
      rating: 4,
      price: '199.99',
      image: '/images/headphones.png',
      badge: '신제품',
    },
    {
      id: 2,
      title: 'Gaming Mouse',
      subtitle: 'G502 HERO',
      category: 'mouse',
      description: 'High-precision gaming mouse for professional gamers.',
      rating: 5,
      price: '89.99',
      image: '/images/mouse.png',
      badge: '베스트셀러',
    },
    // 추가 슬라이드...
  ];

  return (
    <div className='relative'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        navigation={true}
        className='w-full h-[600px] bg-gray-900'
      >
        {introSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-full p-8'>
              {/* 왼쪽: 텍스트 콘텐츠 */}
              <div className='flex flex-col justify-center space-y-6'>
                {/* 별점 */}
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < slide.rating ? 'text-yellow-400' : 'text-gray-400'}>
                      ★
                    </span>
                  ))}
                </div>

                {/* 제목 & 부제목 */}
                <div className='space-y-2'>
                  <h1 className='text-4xl font-bold text-white'>{slide.title}</h1>
                  <p className='text-xl text-gray-400'>{slide.subtitle}</p>
                  <p className='text-xl'>
                    gaming <span className='text-purple-500'>{slide.category}</span>
                  </p>
                </div>

                {/* 설명 */}
                <p className='text-gray-400 max-w-lg'>{slide.description}</p>

                {/* 버튼 그룹 */}
                <div className='flex gap-4'>
                  <button className='px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors'>
                    ORDER NOW
                  </button>
                  <button className='px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'>
                    LEARN MORE
                  </button>
                </div>
              </div>

              {/* 오른쪽: 이미지 */}
              <div className='relative flex items-center justify-center'>
                <img src={slide.image} alt={slide.title} className='max-h-[400px] object-contain' />

                {/* 가격 뱃지 */}
                <div className='absolute top-10 right-10 bg-purple-600 text-white p-4 rounded-lg'>
                  <p className='text-sm'>PRICE</p>
                  <p className='text-xl font-bold'>${slide.price}</p>
                </div>

                {/* 추가 뱃지 */}
                {slide.badge && (
                  <div className='absolute top-10 left-10 bg-yellow-500 text-black px-4 py-2 rounded-full'>
                    {slide.badge}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntroSwiper;
