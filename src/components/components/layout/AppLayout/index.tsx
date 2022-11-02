import React, { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>{children}</main>
    </div>
  );
};
