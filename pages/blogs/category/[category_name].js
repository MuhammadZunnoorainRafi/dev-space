import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/components/Layout';

import CategoryList from '@/components/CategoryList';
import matter from 'gray-matter';
import { getPosts } from '@/lib/posts';
import PostsItem from '@/components/PostsItem';

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">
            Posts in {categoryName}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <PostsItem key={index} post={post} />
            ))}
          </div>
        </div>

        <div className="md:w-1/4 ">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('postsMarkdown'));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('postsMarkdown', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return frontMatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('postsMarkdown'));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontMatter.category);

  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontMatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
