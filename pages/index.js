import Layout from '@/components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostsItem from '@/components/PostsItem';
import { sortByDate } from '@/utils/index';
import Link from 'next/link';
import Search from '@/components/Search';

export default function Home({ posts }) {
  return (
    <Layout>
      <Search />
      <h1
        className="text-5xl font-bold pt-2 pb-4 mb-6
    border-b-4 "
      >
        Latest Posts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {posts.map((val, ind) => {
          return <PostsItem key={ind} post={val} />;
        })}
      </div>
      <div className="py-4 max-w-5xl mx-auto">
        <Link href="/blogs" className="btn  btn-block">
          See All
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('postsMarkdown');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markDownWithMeta = fs.readFileSync(
      path.join('postsMarkdown', filename)
    );

    const { data: frontMatter } = matter(markDownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6),
    },
  };
}
