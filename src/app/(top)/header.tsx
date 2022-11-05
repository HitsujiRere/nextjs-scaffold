import Link from 'next/link';
import { MdExpandMore, MdSearch } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="sticky top-0 bg-base-200">
      <div className="navbar p-2 justify-between max-w-6xl mx-auto">
        <div>
          <Link href="/" className="text-xl font-bold p-2">
            Next.js
          </Link>
        </div>
        <div>
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/cat">Cat</Link>
            </li>
            <li tabIndex={0}>
              <Link href="/">
                Parent
                <MdExpandMore />
              </Link>
              <ul className="p-2 bg-base-200 shadow-xl">
                <li>
                  <Link href="/">Submenu 1</Link>
                </li>
                <li>
                  <Link href="/">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Item 3</Link>
            </li>
          </ul>
        </div>
        <form className="form-control hidden md:flex">
          <div className="input-group">
            <button className="btn btn-square">
              <MdSearch className="w-4 h-4" />
            </button>
            <input
              type="seach"
              placeholder="Search…"
              className="input input-bordered bg-base-200"
            />
          </div>
        </form>
      </div>
    </header>
  );
};
