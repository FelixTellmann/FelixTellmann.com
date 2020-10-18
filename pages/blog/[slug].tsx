import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import Layout from 'layouts';
import { getAllPostsSlug, getSinglePostData } from 'lib/getBlogPosts';
import { mdxOptions, extractFrontMatter } from 'lib/mdxOptions';
import { GetStaticProps } from 'next';
import * as components from 'components';

export default ({children, slug, frontMatter}) => {
  return <Layout slug={slug} frontMatter={frontMatter}>{children}</Layout>
};

type Props = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params: { slug } }): Promise<{ props }> => {
  const { content, data } = matter(getSinglePostData(typeof slug === 'string' ? slug : ''));
  const extendedFrontMatter = extractFrontMatter(content);
  
  const mdxSource = await renderToString(content.replace(/(```)(.|\n)*(import\s+.*?\s+from\s+(['"`])[\w\d\-/.]+\4;?)(.|\n)*(\1)|import\s+.*?\s+from\s+(['"`])[\w\d\-/.]+\7;?/gi, (find) => {
    if ((/(```)(.|\n)*(import\s+.*?\s+from\s+(['"`])[\w\d\-/.]+\4;?)(.|\n)*(\1)/gi).exec(find) && (/(```)(.|\n)*(import\s+.*?\s+from\s+(['"`])[\w\d\-/.]+\4;?)(.|\n)*(\1)/gi).exec(find)[1] === "```") {
      return find
    }
    return '';
  }), {
    components,
    mdxOptions,
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
