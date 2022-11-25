import Head from 'next/head';
import { ReactNode } from 'react';

import { Header } from '@/components/organisms/header';

export const Layout = ({ title, children }: { title?: string; children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Next.js Template` : 'Next.js Template'}</title>
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto p-4">{children}</main>
    </>
  );
};
