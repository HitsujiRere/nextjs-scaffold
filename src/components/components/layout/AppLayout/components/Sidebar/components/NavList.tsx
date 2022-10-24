import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

import { MenuItemProps } from '../assets/MenuItems';
import { NavItem } from './NavItem';

export interface NavListProps {
  items: MenuItemProps[];
}

export const NavList = ({ items }: NavListProps) => {
  return (
    <Accordion allowMultiple>
      {items.map((menuItem) => {
        const { children, key, ...item } = menuItem;
        return children ? (
          <AccordionItem key={key} border="none">
            <AccordionButton
              pl="0"
              py="0"
              transition="color"
              transitionDuration="300ms"
              color="gray.700"
              _hover={{
                background: 'none',
                color: 'cyan.500',
              }}
            >
              <NavItem flex="1" {...item} />
              <AccordionIcon />
            </AccordionButton>

            {children.map((menuItem) => {
              const { children, key, ...item } = menuItem;
              console.log(children);
              return (
                <AccordionPanel key={key} p="0" pl={6} background="gray.50">
                  <NavItem {...item} />
                </AccordionPanel>
              );
            })}
          </AccordionItem>
        ) : (
          <NavItem key={key} {...item} />
        );
      })}
    </Accordion>
  );
};
