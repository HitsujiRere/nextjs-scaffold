import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Sidebar } from './components/Sidebar';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box minH="100vh" bg="white">
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
    </Box>
  );
};
