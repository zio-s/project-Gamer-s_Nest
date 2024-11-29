import MainLayout from '@/components/layout/MainLayout';
import { Providers } from '@/components/providers';
import React from 'react';

const layout = ({ children }) => {
  return (
    <Providers>
      <MainLayout>{children}</MainLayout>
    </Providers>
  );
};

export default layout;
