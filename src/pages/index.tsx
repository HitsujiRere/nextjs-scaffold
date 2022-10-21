import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="py-4 text-2xl font-bold text-black">Welcome to Next.js!</h1>
      <h2 className="py-2 text-xl font-medium text-black">
        This is a Next.js project bootstrapped with{' '}
        <span className="rounded-md bg-gray-600 px-2 py-1 text-white">create-next-app</span>.
      </h2>
      <p className="text-gray-600">Path: {router.asPath}</p>
    </div>
  );
};

export default Home;
