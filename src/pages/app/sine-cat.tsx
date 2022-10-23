import { Space } from 'antd';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Space direction="vertical">
      <h1 className="py-4 text-2xl font-bold text-black">Welcome to Sine wave cat!</h1>
      {[...Array(50)].map((_, i) => (
        <p key={i} className="text-gray-600">
          にゃ{'～'.repeat((Math.sin(i / 3) + 1) * 8)}ん ฅ•ω•ฅ
        </p>
      ))}
    </Space>
  );
};

export default Home;
