import BackButton from '@/components/BackButton';
import Category from '@/components/Category';
import Layout from '@/components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';
function SinglePost({ frontMatter, content, slug }) {
  const { title, date, excerpt, cover_image, category, author, author_image } =
    frontMatter;

  return (
    <Layout title={slug}>
      <BackButton url="/blogs" />
      <div className="py-5 mt-3 mb-6 space-y-6 px-7 shadow-xl rounded-lg">
        <div className="flex pb-6 items-center justify-between">
          <h1 className="font-bold  text-5xl">{title}</h1>
          <Category>{category}</Category>
        </div>
        <picture>
          <img
            src={cover_image}
            className="w-full h-[700px]  rounded-lg "
            alt="error"
          />
        </picture>
        <div className="flex rounded-md px-4 py-2 items-center justify-between bg-slate-100">
          <picture className="flex items-center justify-center space-x-2">
            <img
              src={author_image}
              className="h-12 rounded-full w-12"
              alt="error"
            />
            <h3 className="font-semibold">{author}</h3>
          </picture>
          <div>{date}</div>
        </div>
        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
}

export default SinglePost;

export async function getStaticPaths() {
  const files = fs.readdirSync('postsMarkdown');

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const files = fs.readFileSync(path.join('postsMarkdown', slug + '.md'));
  console.log(files);

  const { data: frontMatter, content } = matter(files);

  return {
    props: { frontMatter, content, slug },
  };
}
