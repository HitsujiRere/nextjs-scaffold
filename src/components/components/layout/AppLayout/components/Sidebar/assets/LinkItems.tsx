import { MenuProps } from 'antd';
import Link from 'next/link';
import { MdHome, MdMail, MdSettings, MdStore } from 'react-icons/md';

export const LinkItems: MenuProps['items'] = [
  {
    icon: <MdHome />,
    key: 'home',
    label: (
      <Link href="/app">
        <a>Home</a>
      </Link>
    ),
  },
  {
    icon: <MdStore />,
    key: 'sine-cat',
    label: (
      <Link href="/app/sine-cat">
        <a>Sine Cat</a>
      </Link>
    ),
  },
  {
    icon: <MdSettings />,
    key: 'form',
    label: (
      <Link href="/app/form">
        <a>Form</a>
      </Link>
    ),
  },
  {
    icon: <MdMail />,
    key: 'mail',
    label: 'Navigation One',
  },
  {
    disabled: true,
    icon: <MdStore />,
    key: 'app',
    label: 'Navigation Two',
  },
  {
    children: [
      {
        icon: <MdSettings />,
        key: 'setting:1',
        label: 'Option 1',
      },
      {
        children: [
          {
            key: 'setting:2',
            label: 'Option 2',
          },
          {
            key: 'setting:3',
            label: 'Option 3',
          },
        ],
        label: 'Item 1',
        type: 'group',
      },
    ],
    icon: <MdSettings />,
    key: 'SubMenu',
    label: 'Navigation Three - Submenu',
  },
];
