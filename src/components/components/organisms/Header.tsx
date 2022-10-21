import Link from 'next/link';

export const Header = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl border-b-2 border-gray-100 px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-xl font-bold text-gray-600">Next.js</a>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/dog">
              <a className="font-medium  text-gray-600">Dog</a>
            </Link>
            <Link href="/cat">
              <a className="font-medium  text-gray-600">Cat</a>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/">
              <a className="font-medium  text-gray-600">Sign in</a>
            </Link>
            <Link href="/">
              <a className="rounded-md border bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
