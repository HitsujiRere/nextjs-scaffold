import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { MobileNav } from './components/MobileNav';
import { SidebarContent } from './components/SidebarContent';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.100" alignItems="stretch" display={{ base: 'block', md: 'flex' }}>
      <SidebarContent
        w="60"
        pos="sticky"
        top="0"
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Box p="4" flexGrow="1">
        {children}
      </Box>
    </Box>
  );
};
