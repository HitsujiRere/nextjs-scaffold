import React, { ReactNode } from 'react';

import { Sidebar } from '@/components/organisms/Sidebar';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
    </div>
  );
};
