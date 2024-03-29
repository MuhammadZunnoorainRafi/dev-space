import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === 'production') {
    // Fetch from cache
    posts = require('../../cache/data').posts;
  } else {
    const files = fs.readdirSync(path.join('postsMarkdown'));

    posts = files.map((filename) => {
      const slug = filename.replace('.md', '');

      const markdownWithMeta = fs.readFileSync(
        path.join('postsMarkdown', filename),
        'utf-8'
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        slug,
        frontMatter,
      };
    });
  }

  const results = posts.filter(
    ({ frontMatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1
  );

  res.status(200).json(results);
}
