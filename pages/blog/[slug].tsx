import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import Layout from "layouts";

import { getAllPostsSlug, getSinglePostData } from "lib/getBlogPosts";
import { mdxOptions } from "next.config";

export default Layout;

export const getStaticProps = async ({ params: { slug } }) => {
  const { content, data } = matter(getSinglePostData(slug));
  const mdxSource = await renderToString(content.replace(/import\s+.*?\s+from\s+('|"|`)[\w\d\-\/\.]+\1;?/gi, ""), {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      mdxOptions,
    },
    scope: data,
  });

  return {
    props: {
      children: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostsSlug()
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
