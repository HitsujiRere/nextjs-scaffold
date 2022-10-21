import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiTrendingUp } from 'react-icons/fi';

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

export const LinkItems: LinkItemProps[] = [
  { name: 'Home', href: '/app', icon: FiHome },
  { name: 'Dog', href: '/app/dog', icon: FiTrendingUp },
  { name: 'Cat', href: '/app/cat', icon: FiCompass },
];
