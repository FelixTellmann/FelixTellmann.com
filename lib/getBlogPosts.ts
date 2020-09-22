import path from "path";
import fs from "fs";

export const getAllPostsSlug = () =>
  fs
    .readdirSync(path.join(process.cwd(), "pages/blog"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""));

export const getAllPostsData = () =>
  fs
    .readdirSync(path.join(process.cwd(), "pages/blog"))
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""));

export const getSinglePostData = (slug) =>
  fs.readFileSync(path.join(process.cwd(), `pages/blog/${slug}.mdx`));
