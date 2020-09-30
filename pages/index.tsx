import { FC, useState } from 'react';
import Text from '../components/Text';
import { FiHexagon } from 'react-icons/fi';
import Timeline from '../components/Timeline';
import { getAllPostsSlug, getSinglePostData } from '../lib/getBlogPosts';
import matter from 'gray-matter';
import { BlogProps } from './blog';
import BlogPreview from '../components/BlogPreview';
import Box from '../components/Box';
import LinkBlock from '../components/LinkBlock';
import Card from '../components/Card';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import Hr from '../components/Hr';

export const Index: FC<BlogProps> = ({ postData }) => {
    const [filteredPostData, setFilteredPostData] = useState(postData);
    const TIMELINE_CURRENT = [
      {
        title: `2020`,
        items: [
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          }
        ]
      }, {
        title: `2019`,
        items: [
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          }
        ]
      }
    ];
    const TIMELINE_PAST = [
      {
        title: `2018`,
        items: [
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          }
        ]
      },
      {
        title: `2017`,
        items: [
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          },
          {
            headline: `Moved to Cape Town`,
            description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
          }
        ]
      }
    ];
    
    return <>
      {/*================ INTRO ================*/}
      <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={10}>
        Hi, i'm Felix Tellmann
      </Text>
      <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'}>
        I'm a freelancing web developer, writer and entrepreneur living in Cape Town.
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
        My goal is to always build products that provide real value to its users.
      </Text>
      <Hr invisible />
      
      {/*================ BLOG POSTS ================*/}
      <Text as="h2" fontSize={[30, 36]} fontWeight={700} lineHeight={1.25} mb={3}>Recent Posts</Text>
      {
        filteredPostData.map(({ slug, frontMatter: { title, excerpt } }) => (
          <BlogPreview key={slug} slug={slug} title={title} excerpt={excerpt} />)
        )
      }
      <Hr invisible />
      
      {/*================ PROJECTS ================*/}
      <Text as="h2" fontSize={[30, 36]} fontWeight={700} lineHeight={1.25} mb={3}>Projects</Text>
      <LinkBlock href="https://github.com/FelixTellmann/use-styled-system" target="_blank">
        <Card icon={<FiHexagon />}
              title="use-styled-system"
              description={<>A custom React Hook to help you implement <em>styled system</em> props in combination with styled-jsx for your
                application.</>}
              hover />
      </LinkBlock>
      <LinkBlock href="https://github.com/FelixTellmann/use-color-theme" target="_blank">
        <Card icon={<HiOutlineColorSwatch />}
              title="use-color-theme"
              description={<>A custom React Hook to help you implement a "theming" classes for your application. The hook allows you to add as many color themes as you wish.</>}
              hover />
      </LinkBlock>
      <Hr invisible />
      
      {/*================ TIMELINE ================*/}
      <Timeline title="Timeline" preview={TIMELINE_CURRENT} data={[...TIMELINE_CURRENT, ...TIMELINE_PAST]} />
      
      {/*================ NEWSLETTER SIGNUP ================*/}
    </>;
    
  }
;

export default Index;

export async function getStaticProps() {
  
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data
    };
  });
  
  return { props: { postData } };
}
