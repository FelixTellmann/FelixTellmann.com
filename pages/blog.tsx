import { FC } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import { FiSearch } from 'react-icons/fi';
import { getAllPostsSlug, getSinglePostData } from '../lib/getBlogPosts';
import matter from 'gray-matter';

type BlogProps = {
  postData: {
    slug: string;
    frontMatter: {
      title?: string
      excerpt?: string
      slug?: string
    };
  }[];
};

export const Blog: FC<BlogProps> = ({ postData }) => {
  const INTRO = {
    title: `Blog`,
    description: `I've been writing online since 2015, mostly about web development and tech careers. In total, I've written 63 articles on this site. Use the search below to filter by title.`
  };
  
  return <>
    <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={10}>{INTRO.title}</Text>
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={[3, 4]}>{INTRO.description}</Text>
    <Input placeholder="Search Articles" icon={<FiSearch />} />
    
    
  </>;
};

export default Blog;

export async function getStaticProps() {
  
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data
    };
  });
  
  return { props: { postData } };
}
