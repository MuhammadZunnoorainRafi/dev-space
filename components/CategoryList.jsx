import Link from 'next/link';

export default function CategoryList({ categories }) {
  return (
    <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-2xl bg-gray-800 text-white p-3 rounded">
        Blog Categories
      </h3>
      <div className="divide-y divide-gray-700">
        {categories.map((category, index) => (
          <Link key={index} href={`/blogs/category/${category.toLowerCase()}`}>
            <div className="p-4   cursor-pointer rounded-md  hover:bg-gray-200">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
