import { FC, useState } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import { FiSearch } from 'react-icons/fi';
import { getAllPostsSlug, getSinglePostData } from '../lib/getBlogPosts';
import matter from 'gray-matter';
import BlogPreview from '../components/BlogPreview';
import Box from '../components/Box';
import IntroText from '../components/IntroText';

export type BlogProps = {
  postData: {
    slug: string;
    frontMatter: {
      published?: boolean
      title?: string
      excerpt?: string
      slug?: string
    };
  }[];
};

export const Blog: FC<BlogProps> = ({ postData }) => {
  
  const [filteredPostData, setFilteredPostData] = useState(postData);
  
  const search = (event) => {
    if (event.currentTarget.value.replace(/\s/gi, '').length <= 2) {
      setFilteredPostData(postData);
      return;
    }
    const sanitize = (str) => str.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/gi, ' ').trim();
    
    const values = sanitize(event.currentTarget.value).split(' ').filter(i => i.length > 2);
    const wordCount = values.length;
    
    const matcher = new RegExp(`(${values.join('|')})`, 'g');
    let totalMatchCount = 0;
    // @ts-ignore
    setFilteredPostData(postData.reduce((acc, item) => {
      acc.push({
        ...item, matchCount: sanitize(item.frontMatter.title).match(matcher)
                             ? sanitize(item.frontMatter.title).match(matcher).length
                             : 0
      });
      if (sanitize(item.frontMatter.title).match(matcher)) {
        totalMatchCount = sanitize(item.frontMatter.title).match(matcher).length > totalMatchCount
                          ? sanitize(item.frontMatter.title).match(matcher).length
                          : totalMatchCount;
      }
      return acc;
    }, []).filter(({ frontMatter: { title }, matchCount }) => {
      if ((matchCount / totalMatchCount < 0.3 && totalMatchCount > 3) || (totalMatchCount / wordCount < 0.75 && wordCount > 6)) return false;
      return sanitize(title).match(matcher);
    }).sort((a, b) => {
      let x = sanitize(a.frontMatter.title).match(matcher) ? sanitize(a.frontMatter.title).match(matcher).length : 0;
      let y = sanitize(b.frontMatter.title).match(matcher) ? sanitize(b.frontMatter.title).match(matcher).length : 0;
      return y - x;
    }));
  };
  
  return <>
    {/*<Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={10}>
      Blog
    </Text>*/}
    <IntroText as="h1" fontSize={[150, 200]}>Blog</IntroText>
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={3}>
      I'm writing mostly about web development, tech news, and the occasional life wisdom.
      Use the search below to filter by title.
    </Text>
    <Box mb={5}>
      <Input placeholder="Search Articles" icon={<FiSearch />} onChange={search} />
    </Box>
    
    <Text as="h2" fontSize={[30, 36]} fontWeight={700} lineHeight={1.25} mb={3}>Recent Posts</Text>
    {
      filteredPostData.map(({ slug, frontMatter: { title, excerpt } }) => (
        <BlogPreview key={slug} slug={slug} title={title} excerpt={excerpt} />)
      )
    }
  </>;
};

export default Blog;

export async function getStaticProps() {
  
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data
    };
  }).filter((item) => item?.frontMatter?.published);
  
  return { props: { postData } };
}
