import hydrate from 'next-mdx-remote/hydrate';
import React, { FC } from 'react';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ArticleHeading, ArticleSidebar, NewsletterSignup, Headings, Box } from 'components';

type LayoutProps = {
  slug: string;
  frontMatter: {
    title: string;
    author?: string;
    authorUrl?: string;
    authorAvatarUrl?: string;
    excerpt?: string;
    publishedAt?: string;
    readingTime?: {
      text: string;
      time: number;
      words: number;
      minutes: number;
    };
    views?: string;
    image?: string;
    headings?: Headings;
    showHeadings?: 0 | 1 | 2;
    showHeadingsExpanded?: boolean;
  };
};

export const Layout: FC<LayoutProps> = ({
  children,
  slug,
  frontMatter: {
    title,
    author = '',
    authorAvatarUrl,
    publishedAt = Date.now().toString(),
    views,
    readingTime,
    excerpt,
    image,
    headings,
    showHeadings = 0,
    showHeadingsExpanded = false
  }
}) => {
  const router = useRouter();
  let canonical = `https://felixtellmann.com/blog/${slug}`;
  if (!slug) {
    canonical = `https://felixtellmann.com${router.pathname}`;
  }

  const content = process.env.NODE_ENV === 'production' ? hydrate(children, { components: { Box } }) : children;
  return (
    <>
      <style jsx global>{`
        code {
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--color-remark-code-title-bg);
          border-radius: 0.4rem;
          background: var(--color-remark-code-bg);
          white-space: pre;
        }

        .line {
          border-left: 3px solid transparent;
          border-collapse: collapse;
          .line {
            border: 0;
          }
          &:hover {
            background-color: rgba(111, 126, 150, 0.07);
          }
          &.line-highlight {
            background: rgba(111, 126, 150, 0.07);
            border-color: var(--color-mdx-link);
            &:hover {
              background-color: rgba(111, 126, 150, 0.1);
            }
          }
        }

        .line-number {
          width: 45px;
          opacity: 0.5;
          display: inline-flex;
          padding: 0 1.2rem;
          user-select: none;
          color: var(--color-header);
        }

        pre code {
          padding: 0;
          border: 0;
          background: transparent;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          width: 100%;
          background: none;
          color: var(--color-header);
          font-family: 'Fira Code', SFMono-Regular, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 1.4rem;
          line-height: 2.6rem;
          word-spacing: normal;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          tab-size: 4;
          hyphens: none;
          overflow-wrap: normal;
        }

        /* Code blocks */
        pre[class*='language-'] {
          min-width: 100%;
          overflow: auto;
          margin: 2.4rem 0;
          padding-top: 1.6rem;
          padding-bottom: 1.6rem;
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
          color: #708090;
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
          border-top-left-radius: 0.4rem;
          border-top-right-radius: 0.4rem;
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
      <NextSeo
        title={`${title} – Felix Tellmann`}
        description={excerpt}
        canonical={canonical}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: new Date(publishedAt).toISOString()
          },
          url: canonical,
          title,
          description: excerpt,
          images: [
            {
              url: `https://felixtellmann.com${image}`,
              alt: title
            }
          ]
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
        url={canonical}
      />
      {/*= =============== HEADING ================ */}
      <ArticleHeading
        title={title}
        authorAvatarUrl={authorAvatarUrl}
        author={author}
        publishedAt={publishedAt}
        readingTime={readingTime}
        views={views}
      />

      {/*= =============== CONTENT ================ */}
      <article id="mdx-content" className="mdx">
        {content}
      </article>

      {/*= =============== SIDEBAR ================ */}
      {showHeadings > 0 && headings ? (
        <ArticleSidebar showHeadings={showHeadings} headings={headings} showHeadingsExpanded={showHeadingsExpanded} />
      ) : null}

      {/*= =============== NEWSLETTER SIGNUP ================ */}
      <NewsletterSignup />
    </>
  );
};

export default Layout;

export const getStaticProps = ({ params: { slug } }: { params: { slug: string } }): { props: { slug: string } } => {
  return {
    props: {
      slug
    }
  };
};
