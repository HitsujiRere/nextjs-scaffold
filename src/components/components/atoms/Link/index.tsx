import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { UrlObject } from 'url';

type Url = string | UrlObject;

export interface LinkProps extends Omit<ChakraLinkProps, 'href'> {
  href: Url;
}

export const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink {...props} style={{ textDecoration: 'none' }}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
