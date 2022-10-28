import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react';

import { Link } from '@/components/atoms/Link';

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
        <Link href="/nextjs" _focus={{ boxShadow: 'none' }}>
          <Text fontSize="2xl" fontWeight="bold">
            Logo
          </Text>
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <NavList items={MenuItems} />
    </Box>
  );
};
