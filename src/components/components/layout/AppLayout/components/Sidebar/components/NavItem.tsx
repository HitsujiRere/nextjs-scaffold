import { Flex, FlexProps, Icon, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  children: string;
  href: string;
  icon?: IconType;
}

export const NavItem = ({ children, href, icon, ...rest }: NavItemProps) => {
  return (
    <NextLink href={href}>
      <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          cursor="pointer"
          transition="background-color"
          transitionDuration="300ms"
          _hover={{
            bg: 'gray.100',
          }}
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="16" as={icon} />}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};
