import path from 'path';
import fs from 'fs';

export const getAllPostsSlug = (): string[] =>
  fs
    .readdirSync(path.join(process.cwd(), 'pages/blog'))
    // Only include md(x) files
    .filter((p) => /\.mdx?$/.test(p))
    // Remove file extensions for page paths
    .map((p) => p.replace(/\.mdx?$/, ''));

export const getAllPostsData = (): string[] =>
  fs
    .readdirSync(path.join(process.cwd(), 'pages/blog'))
    // Only include md(x) files
    .filter((p) => /\.mdx?$/.test(p))
    // Remove file extensions for page paths
    .map((p) => p.replace(/\.mdx?$/, ''));

export const getSinglePostData = (slug: string): Buffer => fs.readFileSync(path.join(process.cwd(), `pages/blog/${slug}.mdx`));
