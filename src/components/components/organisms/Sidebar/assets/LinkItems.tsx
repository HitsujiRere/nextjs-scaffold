import { IconType } from 'react-icons';
import { MdDynamicForm, MdHome, MdWaves } from 'react-icons/md';

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

export const LinkItems: LinkItemProps[] = [
  { name: 'Home', href: '/app', icon: MdHome },
  { name: 'Sine wave cat', href: '/app/sine-cat', icon: MdWaves },
  { name: 'Form', href: '/app/form', icon: MdDynamicForm },
];
