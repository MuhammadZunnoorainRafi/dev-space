import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="py-7 px-10 text-slate-100 bg-slate-800">
      <div className="flex items-center justify-between">
        {/* logo */}
        <picture className="flex items-center space-x-2">
          <img src="/images/logo.png" className="h-10 w-10" alt="noimage" />
          <Link href="/" className="font-bold text-2xl">
            DEV SPACE
          </Link>
        </picture>

        {/* content */}
        <div className="space-x-6 flex items-center justify-center">
          <Link
            className="  font-semibold text-xl hover:text-indigo-300 duration-150"
            href="/blogs"
          >
            Blog
          </Link>
          <Link
            className="  hover:text-indigo-300  font-semibold text-xl  duration-150 "
            href="/about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
