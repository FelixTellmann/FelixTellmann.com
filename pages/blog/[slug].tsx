import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import Layout from 'layouts';
import { getAllPostsSlug, getSinglePostData } from 'lib/getBlogPosts';
import { mdxOptions, extractFrontMatter } from 'lib/mdxOptions';
import { GetStaticProps } from 'next';
import { InfoBlock, Link } from 'components';

export default Layout;

type Props = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params: { slug } }): Promise<{ props }> => {
  const { content, data } = matter(getSinglePostData(typeof slug === 'string' ? slug : ''));
  const extendedFrontMatter = extractFrontMatter(content);

  const mdxSource = await renderToString(content.replace(/import\s+.*?\s+from\s+(['"`])[\w\d\-/.]+\1;?/gi, ''), {
    mdxOptions,
    components: { InfoBlock, Link },
  });
  
  return {
    props: {
      slug,
      children: mdxSource,
      frontMatter: { ...data, ...extendedFrontMatter }
    }
  };
};

export const getStaticPaths = (): { paths; fallback: boolean } => {
  const paths = getAllPostsSlug().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
