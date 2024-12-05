import MainLayout from '@/components/layout/MainLayout';
import { Providers } from '@/components/providers';
import React from 'react';

const layout = ({ children }) => {
  return (
    <Providers>
      {/* <Headers /> */}
      <MainLayout showAside={false} videoOff>
        {children}
      </MainLayout>
    </Providers>
  );
};

export default layout;
