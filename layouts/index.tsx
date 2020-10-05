import hydrate from 'next-mdx-remote/hydrate';
import Box from 'components/Box';
import { FC } from 'react';
import ArticleHeading from '../components/ArticleHeading';
import ArticleSidebar from '../components/ArticleSidebar';
import NewsletterSignup from '../components/NewsletterSignup';
import { NextSeo, ArticleJsonLd } from 'next-seo';

type LayoutProps = {
  slug: string
  frontMatter: {
    title: string
    author?: string
    authorUrl?: string
    authorAvatarUrl?: string
    excerpt?: string
    publishedAt?: string
    readingTime?: {
      text: string;
      time: number;
      words: number;
      minutes: number;
    }
    views?: string
    image?: string
    headings?: { level: number; heading: string; slug: string, subheading: any[] }[]
    showHeadings?: 0 | 1 | 2
    showHeadingsExpanded?: boolean
  }
}

export const Layout: FC<LayoutProps> = ({ children, slug, frontMatter: { title, author = '', authorUrl, authorAvatarUrl, publishedAt = Date.now(), views, readingTime, excerpt, image, headings, showHeadings = 0, showHeadingsExpanded = false, ...rest } }) => {
  const content = process.env.NODE_ENV === 'production' ? hydrate(children, { components: { Box } }) : children;
  return (
    <>
      <NextSeo
        title={`${title} – Felix Tellmann`}
        description={excerpt}
        canonical={`https://felixtellmann.com/blog/${slug}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: new Date(publishedAt).toISOString()
          },
          url:`https://felixtellmann.com/blog/${slug}`,
          title,
          description: excerpt,
          images: [{
            url: `https://felixtellmann.com${image}`,
            alt: title
          }]
        }}
      />
      <ArticleJsonLd
        authorName="Felix Tellmann"
        dateModified={new Date(publishedAt).toISOString()}
        datePublished={new Date(publishedAt).toISOString()}
        description={excerpt}
        images={[`https://felixtellmann.com${image}`]}
        publisherLogo="/favicons/android-icon-192x192.png"
        publisherName="Felix Tellmann"
        title={title}
        url={`https://felixtellmann.com/blog/${slug}`}
      />
      {/*================ HEADING ================*/}
      <ArticleHeading title={title}
                      authorAvatarUrl={authorAvatarUrl}
                      author={author}
                      publishedAt={new Date(publishedAt).toISOString()}
                      readingTime={readingTime}
                      views={views} />
      
      {/*================ CONTENT ================*/}
      <article id="mdx-content" className="mdx">{content}</article>
      
      {/*================ SIDEBAR ================*/}
      {showHeadings > 0 && headings
       ? <ArticleSidebar showHeadings={showHeadings} headings={headings} showHeadingsExpanded={showHeadingsExpanded} />
       : null}
      
      {/*================ NEWSLETTER SIGNUP ================*/}
      <NewsletterSignup />
      
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
            scroll-margin-top: 160px;
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

          a.autolink-heading {
            position: relative;
            color: inherit;

            &:after {
              position: absolute;
              content: '#';
              font-size: 1em;
              height: 100%;
              top: 0;
              left: 100%;
              display: flex;
              align-items: center;
              margin-left: 1.6rem;
              color: #60b3fb;
              opacity: 0;
              transition: opacity 0.25s;
            }

            &:hover, &:focus, &:active {
              text-decoration: none;

              &:after {
                opacity: 1;
              }
            }

          }

        }

        code {
          white-space: pre;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          width: 100%;
          background: none;
          color: var(--color-header);
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 1.5rem;
          line-height: inherit;
          word-spacing: normal;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          overflow-wrap: normal;
          tab-size: 4;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*='language-'] {
          min-width: 100%;
          overflow: auto;
          margin: 2.4rem 0;
          padding-top: 1.6rem;
          padding-right: 1.6rem;
          padding-bottom: 1.6rem;
          padding-left: 1.6rem;
          font-size: 1.5rem;
          white-space: nowrap;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          border: 1px solid var(--color-remark-code-title-bg);
          border-radius: 0.8rem;
          background: var(--color-remark-code-bg);
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .token.namespace {
          opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #905;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #690;
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #9a6e3a;
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #109bd6;
        }

        .token.function,
        .token.class-name {
          color: #dd4a68;
        }

        .token.regex,
        .token.important,
        .token.variable {
          color: #e90;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }

        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }

        .mdx-marker {
          min-width: fit-content;
          display: block;
          margin-right: -1.6rem;
          margin-left: -1.6rem;
          padding-right: 1.6rem;
          padding-left: 1.6rem;
          background-color: var(--color-button);
          box-shadow: inset 3px 0 0 0 #2a69ac;
        }

        .remark-code-title {
          width: 100%;
          margin-bottom: 0;
          padding: 0.8rem 1.6rem;
          border: 1px solid var(--color-remark-code-title-bg);
          border-top-left-radius: 0.8rem;
          border-top-right-radius: 0.8rem;
          background: var(--color-remark-code-title-bg);
          color: var(--color-header);
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 1.5rem;

          + pre {
            margin-top: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
        }

        .dark-theme {

          :not(pre) > code[class*='language-'] {
            background: #011627;
          }

          .token.attr-name {
            color: rgb(173, 219, 103);
            font-style: italic;
          }

          .token.comment {
            color: rgb(128, 147, 147);
          }

          .token.string,
          .token.url {
            color: rgb(173, 219, 103);
          }

          .token.variable {
            color: rgb(214, 222, 235);
          }

          .token.number {
            color: rgb(247, 140, 108);
          }

          .token.builtin,
          .token.char,
          .token.constant,
          .token.function {
            color: rgb(130, 170, 255);
          }

          .token.punctuation {
            color: rgb(199, 146, 234);
          }

          .token.selector,
          .token.doctype {
            color: rgb(199, 146, 234);
          }

          .token.class-name {
            color: rgb(255, 203, 139);
          }

          .token.tag,
          .token.operator,
          .token.keyword {
            color: #ffa7c4;
          }

          .token.boolean {
            color: rgb(255, 88, 116);
          }

          .token.property {
            color: rgb(128, 203, 196);
          }

          .token.namespace {
            color: rgb(178, 204, 214);
          }
        }

      `}</style>
    </>
  );
};

export default Layout;

export const getStaticProps = async ({ params: { slug } }) => {
  
  return {
    props: {
      slug
    }
  };
};