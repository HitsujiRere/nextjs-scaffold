import { Flex, FlexProps, Icon, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  children: string;
  href: string;
  icon: IconType;
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
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};
