import Footer from '@/components/layout/Footer';
import MainLayout from '@/components/layout/MainLayout';
import { Providers } from '@/components/providers';
import React from 'react';

const layout = ({ children }) => {
  return (
    <Providers>
      {/* <Headers /> */}
      <MainLayout showAside={false}>{children}</MainLayout>
      <Footer />
    </Providers>
  );
};

export default layout;
