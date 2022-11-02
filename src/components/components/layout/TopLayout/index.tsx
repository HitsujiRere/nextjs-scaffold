import { ReactNode } from 'react';

import { Header } from './components/Header';

export const TopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>{children}</main>
    </div>
  );
};
