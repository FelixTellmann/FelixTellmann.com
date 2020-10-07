import hydrate from 'next-mdx-remote/hydrate'
import Box from 'components/Box'
import { FC } from 'react'
import ArticleHeading from '../components/ArticleHeading'
import ArticleSidebar from '../components/ArticleSidebar'
import NewsletterSignup from '../components/NewsletterSignup'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

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
      text: string
      time: number
      words: number
      minutes: number
    }
    views?: string
    image?: string
    headings?: {
      level: number
      heading: string
      slug: string
      subheading: any[]
    }[]
    showHeadings?: 0 | 1 | 2
    showHeadingsExpanded?: boolean
  }
}

export const Layout: FC<LayoutProps> = ({
  children,
  slug,
  frontMatter: {
    title,
    author = '',
    authorUrl,
    authorAvatarUrl,
    publishedAt = Date.now().toString(),
    views,
    readingTime,
    excerpt,
    image,
    headings,
    showHeadings = 0,
    showHeadingsExpanded = false,
    ...rest
  }
}) => {
  const router = useRouter()
  let canonical = `https://felixtellmann.com/blog/${slug}`
  if (!slug) {
    canonical = `https://felixtellmann.com${router.pathname}`
  }

  const content = process.env.NODE_ENV === 'production' ? hydrate(children, { components: { Box } }) : children
  return (
    <>
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
      {/*================ HEADING ================*/}
      <ArticleHeading
        title={title}
        authorAvatarUrl={authorAvatarUrl}
        author={author}
        publishedAt={publishedAt}
        readingTime={readingTime}
        views={views}
      />

      {/*================ CONTENT ================*/}
      <article id="mdx-content" className="mdx">
        {content}
      </article>

      {/*================ SIDEBAR ================*/}
      {showHeadings > 0 && headings ? (
        <ArticleSidebar showHeadings={showHeadings} headings={headings} showHeadingsExpanded={showHeadingsExpanded} />
      ) : null}

      {/*================ NEWSLETTER SIGNUP ================*/}
      <NewsletterSignup />
    </>
  )
}

export default Layout

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug
    }
  }
}
