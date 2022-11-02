import { Link } from '@/components/atoms/Link';

export const Header = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto border-b-2 border-b-gray-300 px-4 py-7">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-xl font-medium text-gray-600">
              Application
            </Link>
          </div>
          <div className="flex gap-x-10 items-center">
            <div>
              <Link href="/nextjs" className="text-xl font-medium text-gray-600">
                Application
              </Link>
            </div>
            <Link href="/nextjs/form" className="text-xl font-medium text-gray-600">
              Form
            </Link>
            <Link href="/nextjs/sine-cat" className="text-xl font-medium text-gray-600">
              Sine cat wave
            </Link>
          </div>
          <div className="flex gap-x-10 items-center">
            <Link href="/nextjs" className="text-xl font-medium text-gray-600">
              Sign in
            </Link>
            <Link
              href="/nextjs"
              className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-400"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
