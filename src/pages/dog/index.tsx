import type { NextPage } from 'next';
import { DefaultLayout } from 'src/layouts/DefaultLayout';

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Dog">
      <p className="text-xl">Welcome to Dog!</p>
    </DefaultLayout>
  );
};

export default Home;
