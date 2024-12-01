'use client';
import { Container } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-12 mt-auto'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* 회사 정보 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>GameStore</h3>
            <p className='text-gray-400 text-sm'>최고의 게임을 최상의 경험으로 제공합니다.</p>
          </div>

          {/* 링크 섹션들 */}
          <div>
            <h4 className='font-medium mb-4'>스토어</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  인기 게임
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  새로운 게임
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  할인 게임
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-medium mb-4'>정보</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  회사 소개
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  채용 정보
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-medium mb-4'>고객지원</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  환불 정책
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400'>
          <p>© 2024 GameStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
