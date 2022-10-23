import { Layout } from 'antd';
import React, { ReactNode } from 'react';

import { Sidebar } from './components/Sidebar';

const { Content, Sider } = Layout;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout className="min-h-screen">
      <Sider theme="light" width={300}>
        <Sidebar />
      </Sider>
      <Content className="p-4">{children}</Content>
    </Layout>
  );
};
