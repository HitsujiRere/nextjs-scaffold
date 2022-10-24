import { IconType } from 'react-icons';
import { MdDynamicForm, MdHome, MdWaves } from 'react-icons/md';

export interface MenuItemProps {
  name: string;
  href: string;
  icon?: IconType;
}

export const MenuItems: MenuItemProps[] = [
  { name: 'Home', href: '/app', icon: MdHome },
  { name: 'Sine wave cat', href: '/app/sine-cat', icon: MdWaves },
  { name: 'Form', href: '/app/form', icon: MdDynamicForm },
];
