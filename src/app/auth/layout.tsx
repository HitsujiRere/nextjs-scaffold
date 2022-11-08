'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <main className="max-w-5xl mx-auto p-4">{children}</main>
    </SessionProvider>
  );
}
