import { translateESRB, translateGenre, translateTag } from '@/utils/translations';

export const OverviewSection = ({ game }) => {
  console.log(game);
  return (
    <div className='space-y-8 flex flex-col gap-10'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>게임 개요</h2>
        <p className='text-gray-300'>{game?.description_raw}</p>
      </div>

      <div>
        <h3 className='text-xl font-bold mb-3'>게임 모드</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='mb-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex items-center gap-2'>
                <span
                  className={`w-3 h-3 rounded-full ${
                    game?.tags?.some((tag) => tag.name.toLowerCase().includes('singleplayer'))
                      ? 'bg-green-500'
                      : 'bg-gray-500'
                  }`}
                />
                <span>싱글플레이어</span>
              </div>
              <div className='flex items-center gap-2'>
                <span
                  className={`w-3 h-3 rounded-full ${
                    game?.tags?.some((tag) => tag.name.toLowerCase().includes('multiplayer'))
                      ? 'bg-green-500'
                      : 'bg-gray-500'
                  }`}
                />
                <span>멀티플레이어</span>
              </div>
              <div className='flex items-center gap-2'>
                <span
                  className={`w-3 h-3 rounded-full ${
                    game?.tags?.some((tag) => tag.name.toLowerCase().includes('co-op')) ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                />
                <span>협동</span>
              </div>
              <div className='flex items-center gap-2'>
                <span
                  className={`w-3 h-3 rounded-full ${
                    game?.tags?.some((tag) => tag.name.toLowerCase().includes('pvp')) ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                />
                <span>PvP</span>
              </div>
            </div>
          </div>
          {game?.esrb_rating && (
            <div className='mb-4'>
              <h4 className='font-semibold mb-2'>연령 등급</h4>
              <span className='px-3 py-1 bg-gray-700 rounded-full text-sm'>{translateESRB(game.esrb_rating.name)}</span>
            </div>
          )}
        </div>
      </div>

      <div>
        <h4 className='font-semibold mb-2'>주요 특징</h4>
        <div className='flex flex-wrap gap-2'>
          {game?.tags?.slice(0, 8).map((tag) => (
            <span key={tag.id} className='px-3 py-1 bg-gray-700 rounded-full text-sm'>
              {translateTag(tag.name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
