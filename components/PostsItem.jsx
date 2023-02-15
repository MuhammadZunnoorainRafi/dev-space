import Image from 'next/image';
import Link from 'next/link';
import Category from './Category';

const PostsItem = ({ post, compact }) => {
  const { title, date, excerpt, category, cover_image, author, author_image } =
    post.frontMatter;
  return (
    <div>
      <div className="p-5 border border-slate-300 h-full flex flex-col justify-between  rounded-lg shadow-lg ">
        <div>
          <div className=" rounded-lg overflow-hidden">
            <Image
              src={cover_image}
              height={420}
              width={600}
              className="rounded-lg h-auto w-auto hover:scale-[1.1] duration-200 "
              priority
              alt="error"
            />
          </div>
          <div className="flex items-center justify-between py-2">
            <p className="text-slate-600 text-sm ">{date}</p>
            <Category>{category}</Category>
          </div>
          <Link
            href={`/blogs/${post.slug}`}
            className="font-bold  hover:underline  duration-200 text-xl"
          >
            {title}
          </Link>
          <p className="text-slate-600 pt-1 pb-4">{excerpt}</p>
        </div>
        {!compact && (
          <div className="flex items-center justify-between mt-6">
            <Link
              href={`/blogs/${post.slug}`}
              className=" text-blue-500 hover:text-blue-800  "
            >
              Read More
            </Link>
            <picture className="flex items-center justify-center space-x-2">
              <img
                src={author_image}
                alt="error"
                className=" h-7 w-7 object-cover rounded-full"
              />
              <p className="font-semibold text-sm">{author}</p>
            </picture>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsItem;
