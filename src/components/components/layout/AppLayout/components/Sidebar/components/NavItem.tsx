import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { Link } from '@/components/atoms/Link';

export interface NavItemProps extends FlexProps {
  href?: string;
  icon?: IconType;
  label: string;
}

export const NavItem = ({ href, icon, label, ...rest }: NavItemProps) => {
  const inner = (
    <Flex
      align="center"
      p="4"
      cursor="pointer"
      transition="color"
      transitionDuration="300ms"
      color="gray.600"
      _hover={{
        color: 'blue.400',
      }}
      {...rest}
    >
      {icon && <Icon mr="4" fontSize="16" as={icon} />}
      {label}
    </Flex>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
};
