import { Menu, MenuProps } from 'antd';

import { LinkItems } from './assets/LinkItems';

export const Sidebar = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <div className="sticky top-0">
      <div className="py-4 text-2xl font-bold text-black text-center">Next.js</div>
      <Menu
        items={LinkItems}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        onClick={onClick}
      />
    </div>
  );
};
