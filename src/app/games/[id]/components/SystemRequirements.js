import { Cpu, HardDrive, Microchip } from 'lucide-react';

// 시스템 요구사항을 파싱하는 함수
const parseRequirements = (reqString) => {
  if (!reqString) return null;

  // HTML 문자열에서 텍스트만 추출
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = reqString;
  const text = tempDiv.textContent;

  const requirements = {
    os: text.match(/OS:([^\n]*)/i)?.[1]?.trim(),
    processor: text.match(/Processor:([^\n]*)/i)?.[1]?.trim(),
    memory: text.match(/Memory:([^\n]*)/i)?.[1]?.trim(),
    graphics: text.match(/Graphics:([^\n]*)/i)?.[1]?.trim(),
    storage: text.match(/Storage:([^\n]*)/i)?.[1]?.trim(),
  };

  return requirements;
};

export function SystemRequirements({ game }) {
  const pcPlatform = game?.platforms?.find((p) => p.platform.name.toLowerCase().includes('pc'));

  const minimumReqs = parseRequirements(pcPlatform?.requirements?.minimum);
  const recommendedReqs = parseRequirements(pcPlatform?.requirements?.recommended);

  if (!minimumReqs && !recommendedReqs) return null;

  return (
    <div id='system'>
      <h3 className='text-xl font-bold mb-4'>시스템 요구사항</h3>

      <div className='grid md:grid-cols-2 gap-6'>
        {/* 최소 사양 */}
        {minimumReqs && (
          <div className='bg-gray-800 rounded-lg p-6'>
            <h4 className='text-lg font-semibold mb-4'>최소 사양</h4>
            <div className='space-y-4'>
              {minimumReqs.os && (
                <div className='flex items-start gap-3'>
                  <HardDrive className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>운영체제</p>
                    <p className='text-gray-400 text-sm'>{minimumReqs.os}</p>
                  </div>
                </div>
              )}
              {minimumReqs.processor && (
                <div className='flex items-start gap-3'>
                  <Cpu className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>프로세서</p>
                    <p className='text-gray-400 text-sm'>{minimumReqs.processor}</p>
                  </div>
                </div>
              )}
              {minimumReqs.memory && (
                <div className='flex items-start gap-3'>
                  <Microchip className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>메모리</p>
                    <p className='text-gray-400 text-sm'>{minimumReqs.memory}</p>
                  </div>
                </div>
              )}
              {minimumReqs.graphics && (
                <div className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 mt-1 text-gray-400'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M19 6H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2z' />
                    <path d='M6 12h.01M8 12h.01' />
                  </svg>
                  <div>
                    <p className='font-medium text-gray-300'>그래픽</p>
                    <p className='text-gray-400 text-sm'>{minimumReqs.graphics}</p>
                  </div>
                </div>
              )}
              {minimumReqs.storage && (
                <div className='flex items-start gap-3'>
                  <HardDrive className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>저장공간</p>
                    <p className='text-gray-400 text-sm'>{minimumReqs.storage}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 권장 사양 */}
        {recommendedReqs && (
          <div className='bg-gray-800 rounded-lg p-6'>
            <h4 className='text-lg font-semibold mb-4'>권장 사양</h4>
            <div className='space-y-4'>
              {recommendedReqs.os && (
                <div className='flex items-start gap-3'>
                  <HardDrive className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>운영체제</p>
                    <p className='text-gray-400 text-sm'>{recommendedReqs.os}</p>
                  </div>
                </div>
              )}
              {recommendedReqs.processor && (
                <div className='flex items-start gap-3'>
                  <Cpu className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>프로세서</p>
                    <p className='text-gray-400 text-sm'>{recommendedReqs.processor}</p>
                  </div>
                </div>
              )}
              {recommendedReqs.memory && (
                <div className='flex items-start gap-3'>
                  <Microchip className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>메모리</p>
                    <p className='text-gray-400 text-sm'>{recommendedReqs.memory}</p>
                  </div>
                </div>
              )}
              {recommendedReqs.graphics && (
                <div className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 mt-1 text-gray-400'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M19 6H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2z' />
                    <path d='M6 12h.01M8 12h.01' />
                  </svg>
                  <div>
                    <p className='font-medium text-gray-300'>그래픽</p>
                    <p className='text-gray-400 text-sm'>{recommendedReqs.graphics}</p>
                  </div>
                </div>
              )}
              {recommendedReqs.storage && (
                <div className='flex items-start gap-3'>
                  <HardDrive className='w-5 h-5 mt-1 text-gray-400' />
                  <div>
                    <p className='font-medium text-gray-300'>저장공간</p>
                    <p className='text-gray-400 text-sm'>{recommendedReqs.storage}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
