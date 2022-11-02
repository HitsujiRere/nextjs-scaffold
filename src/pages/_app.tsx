import 'src/styles/globals.css';

import type { AppPropsWithLayout } from 'next/app';

import { AppLayout } from '@/components/layout/AppLayout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
