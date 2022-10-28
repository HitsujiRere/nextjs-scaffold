import { FlexProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { MdDynamicForm, MdHome, MdWaves } from 'react-icons/md';

export interface MenuItemProps extends Omit<FlexProps, 'children'> {
  children?: MenuItemProps[];
  href?: string;
  icon?: IconType;
  key: string;
  label: string;
}

export const MenuItems: MenuItemProps[] = [
  { href: '/nextjs', icon: MdHome, key: 'home', label: 'Home' },
  { href: '/nextjs/sine-cat', icon: MdWaves, key: 'sine-cat', label: 'Sine wave cat' },
  { href: '/nextjs/form', icon: MdDynamicForm, key: 'form', label: 'Form' },
  { key: 'nav1', label: 'Nav 1' },
  {
    children: [
      { key: 'nav2-1', label: 'Sub 1' },
      { key: 'nav2-2', label: 'Sub 2' },
    ],
    key: 'nav2',
    label: 'Nav 2',
  },
];
