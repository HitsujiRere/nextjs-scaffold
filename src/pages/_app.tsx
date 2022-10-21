import '@/styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppPropsWithLayout } from 'next/app';

import { AppLayout } from '@/components/layout/AppLayout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>);

  return <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}

export default MyApp;
