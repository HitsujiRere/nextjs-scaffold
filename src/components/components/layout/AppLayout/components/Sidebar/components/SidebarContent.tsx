import { Box, BoxProps, CloseButton, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { MenuItems } from '../assets/MenuItems';
import { NavList } from './NavList';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg="white"
      borderRight="1px"
      borderRightColor="gray.300"
      w={{ base: 'full', md: 60 }}
      h="100vh"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <NextLink href="/app">
          <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Text fontSize="2xl" fontWeight="bold">
              Logo
            </Text>
          </Link>
        </NextLink>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <NavList items={MenuItems} />
    </Box>
  );
};
