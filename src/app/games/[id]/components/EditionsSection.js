export function EditionsSection({ game }) {
  return (
    <div id='editions' className=''>
      <h2 className='text-2xl font-bold mb-4'>구매 옵션</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {game?.stores?.map((store) => (
          <div key={store.id} className='p-6 bg-gray-800 rounded-lg'>
            <h3 className='font-semibold mb-4'>{store.store.name}</h3>
            <button
              onClick={() => window.open(`https://${store.store.domain}`, '_blank')}
              className='text-blue-400 hover:underline'
            >
              스토어 방문하기 →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
