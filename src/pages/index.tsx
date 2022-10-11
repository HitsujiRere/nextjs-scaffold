import type { NextPage } from 'next';
import Link from 'next/link';
import { DefaultLayout } from 'src/layouts/DefaultLayout';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <p className="text-xl">Welcome to Next.js!</p>
      <Link href="/dog">
        <a>Link to Dog</a>
      </Link>
    </DefaultLayout>
  );
};

export default Home;
