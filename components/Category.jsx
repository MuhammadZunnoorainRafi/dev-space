import Link from 'next/link';
import React from 'react';

const Category = ({ children }) => {
  const colorKey = {
    JavaScript: 'bg-yellow-600',
    Python: 'bg-green-600',
    PHP: 'bg-purple-600',
    CSS: 'bg-blue-600',
    Ruby: 'bg-red-600',
  };

  return (
    <Link
      href={`/blogs/category/${children.toLowerCase()}`}
      className={`px-2  py-1 rounded-lg ${colorKey[children]} font-bold text-slate-100`}
    >
      {children}
    </Link>
  );
};

export default Category;
