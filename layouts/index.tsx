import hydrate from 'next-mdx-remote/hydrate';
import Box from 'components/Box';

import Link from 'next/link';

export default function PostPage({ children, frontMatter }) {
  const content = process.env.NODE_ENV === 'production' ? hydrate(children, { components: { Box } }) : children;
  
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && <p className="description">{frontMatter.description}</p>}
      </div>
      <main className="mdx">{content}</main>
      
      <style jsx global>{`
        .mdx {
          h1 {
            margin: 0 0 10px 0;
            font-size: var(--h1);
            font-weight: 700;
            line-height: 1.1;
          }

          h2 {
            margin: 0 0 10px 0;
            font-size: var(--h2);
            font-weight: 700;
            line-height: 1.2;
          }

          h3 {
            margin: 0 0 10px 0;
            font-size: var(--h3);
            font-weight: 700;
            line-height: 1.3;
          }

          h4 {
            margin: 0 0 10px 0;
            font-size: var(--h4);
            font-weight: 700;
            line-height: 1.4;
          }

          h5 {
            margin: 0 0 8px 0;
            font-size: var(--h5);
            font-weight: 600;
            line-height: 1.3;
          }

          h6 {
            display: flex;
            align-items: center;
            margin: 0 0 10px 0;
            font-size: var(--h6);
            font-weight: 600;
            line-height: 1.4;
          }

          p {
            margin: 0 0 15px 0;
            color: var(--color-text);
            font-size: var(--p);
            line-height: 1.6;
            word-break: break-word;
          }
        }
      `}</style>
    </>
  );
}
