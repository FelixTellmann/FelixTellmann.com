import hydrate from 'next-mdx-remote/hydrate';
import Box from 'components/Box';
import Text from '../components/Text';
import { FC } from 'react';
import Avatar from '../components/Avatar';

type LayoutProps = {
  frontMatter: {
    title: string
    author?: string
    author_url?: string
    author_avatar_url?: string
    published_at?: string
    reading_time?: string
    views?: string
    image?: string
  }
}

export const Layout: FC<LayoutProps> = ({ children, frontMatter: { title, author = '', author_url, author_avatar_url, published_at, views, reading_time, image } }) => {
  const content = process.env.NODE_ENV === 'production' ? hydrate(children, { components: { Box } }) : children;
  
  return (
    <>
      {title && <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={3}>{title}</Text>}
      <Box d={'flex'} direction={['column', 'row']} mb={5}>
        <Box d={'flex'} align={'center'}>
          {author_avatar_url && <Avatar src={author_avatar_url} alt={author ? author : ''} size={24} />}
          {(author || published_at) &&
          <Text as="p" fontSize={1} color={'--color-text'} ml={2} lineHeight={1.6}>
            {author}{author && published_at ? ' / ' : ''}{published_at}
          </Text>}
        </Box>
        <Box d={'flex'} align={'center'} justify={['flex-start', 'flex-end']} flex={1}>
          <Text as="p" fontSize={1} color={'--color-subdued'} ml={2} lineHeight={1.6}>
            {reading_time ? reading_time : ''}{views ? views : ''}
          </Text>
        </Box>
      </Box>
      <article className="mdx">{content}</article>
      <style jsx global>{`
        .mdx {
          --h1: 3.6rem;
          --h2: 2rem;
          --h3: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin: 0 auto 6.4rem auto;
          line-height: 1.5;
          @media screen and (min-width: 600px) {
            --h1: 4.8rem;
            --h2: 2.4rem;
            --h3: 2rem;
          }

          p {
            margin-top: 1.6rem;
            margin-bottom: 3.2rem;
            font-size: 1.6rem;
            line-height: 1.625;
          }

          h1 {
            margin-bottom: 1em;
            font-size: var(--h1);
            font-weight: 700;
            line-height: 1.25;
            letter-spacing: -0.025em;
          }

          h2 {
            margin-top: 2em;
            margin-bottom: 1em;
            font-size: var(--h2);
            font-weight: 700;
            line-height: 1.25;
            scroll-margin-top: 100px;
          }

          h3 {
            margin-top: 2em;
            margin-bottom: 1em;
            font-size: var(--h3);
            font-weight: 700;
            line-height: 1.25;
            scroll-margin-top: 100px;
          }

          a {
            outline: none;
            color: var(--color-mdx-link);
            line-height: 1.5;
            text-decoration: none;

            &:hover, &:focus, &:active {
              text-decoration: underline;
            }
          }

          ul {
            margin-bottom: 3.2rem;
            margin-left: 0.8rem;
            padding-top: 0.8rem;
            padding-left: 1.6rem;
            list-style-type: disc;
          }

          li {
            padding-bottom: 0.25rem;
          }

          strong {
            font-weight: 700;
          }

        }
      `}</style>
    </>
  );
};

export default Layout;

export const getStaticProps = async ({ params: { slug } }) => {
  
  console.log(slug);
  return {
    props: {
      slug
    }
  };
};