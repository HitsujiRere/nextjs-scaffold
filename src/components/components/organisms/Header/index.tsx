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
            <Link href="/app">
              <a className="font-medium  text-gray-600">Application</a>
            </Link>
            <Link href="/app/form">
              <a className="font-medium  text-gray-600">Form</a>
            </Link>
            <Link href="/app/sine-cat">
              <a className="font-medium  text-gray-600">Sin wave cat</a>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/app">
              <a className="font-medium  text-gray-600">Sign in</a>
            </Link>
            <Link href="/app">
              <a className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
