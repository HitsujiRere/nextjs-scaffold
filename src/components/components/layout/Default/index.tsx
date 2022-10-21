import { ReactNode } from 'react';

import { Header } from '@/components/components/organisms/Header';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  console.log('Render DefaultLayout!');

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>{children}</main>
    </div>
  );
};
