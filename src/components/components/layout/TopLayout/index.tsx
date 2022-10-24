import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from './components/Header';

export const TopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box minHeight="100vh" bg="white">
      <Header />

      <main>{children}</main>
    </Box>
  );
};
