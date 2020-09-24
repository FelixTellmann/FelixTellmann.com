import { FC, useEffect, useState } from 'react';
import Box from './Box';
import scrollTo from '../lib/scrollTo';
import { use } from 'ast-types';

type ArticleSidebarProps = {
  showHeadings: number
  headings: { level: number; heading: string; slug: string, subheading: any[] }[]
};

export const ArticleSidebar: FC<ArticleSidebarProps> = ({ showHeadings, headings }) => {
  
  const focusHeading = (event, slug) => {
    event.preventDefault();
    headings.forEach(({ slug, subheading }) => {
      observerA.unobserve(document.getElementById(slug));
    });
    scrollTo(200, document.getElementById(slug).offsetTop - 120);
    setActiveHeading(slug);
    setTimeout(() => {
      headings.forEach(({ slug, subheading }) => {
        observerA.observe(document.getElementById(slug));
      });
      setTimeout(() => {
        setActiveHeading(slug);
      }, 50);
    }, 240);
  };
  
  const focusSubHeading = (event, slug) => {
    event.preventDefault();
    headings.forEach(({ slug, subheading }) => {
      observerA.unobserve(document.getElementById(slug));
      subheading.length > 0 && subheading.forEach(({ slug }) => {
        observerB.unobserve(document.getElementById(slug));
      });
    });
    scrollTo(200, document.getElementById(slug).offsetTop - 120);
    setActiveSubheading(slug);
    setTimeout(() => {
      headings.forEach(({ slug, subheading }) => {
        observerA.observe(document.getElementById(slug));
        subheading.length > 0 && subheading.forEach(({ slug }) => {
          observerB.observe(document.getElementById(slug));
        });
      });
      setTimeout(() => {
        setActiveSubheading(slug);
      }, 50);
    }, 240);
  };
  
  const [activeHeading, setActiveHeading] = useState(``);
  const [activeSubheading, setActiveSubheading] = useState(``);
  const [observerA, setObserverA] = useState<any>();
  const [observerB, setObserverB] = useState<any>();
  
  useEffect(() => {
    setObserverA(new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: `0% 0% -50% 0%`,
        threshold: 1.0
      }
    ));
    setObserverB(new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSubheading(entry.target.id);
          }
        });
      },
      {
        rootMargin: `0% 0% -70% 0%`,
        threshold: 1.0
      }
    ));
  }, []);
  
  useEffect(() => {
    if (observerA && observerB) {
      headings.forEach(({ slug, subheading }) => {
        observerA.observe(document.getElementById(slug));
        subheading.length > 0 && subheading.forEach(({ slug }) => {
          observerB.observe(document.getElementById(slug));
        });
      });
      return () => {
        headings.forEach(({ slug, subheading }) => {
          observerA.unobserve(document.getElementById(slug));
          subheading.length > 0 && subheading.forEach(({ slug }) => {
            observerB.unobserve(document.getElementById(slug));
          });
        });
      };
    }
  }, [observerA, observerB]);
  
  return <>
    <aside>
      <Box position={'sticky'} w={220} top={200} h={600} p={3}>
        <ul>
          {
            headings.map(({ level, heading, slug, subheading }) => (
                <li key={slug} className={`heading`}>
                  <a className={slug === activeHeading ? 'active' : ''}
                     aria-label={heading}
                     onClick={(e) => focusHeading(e, slug)}>{heading}</a>
                  {showHeadings > 1 && subheading.length > 0
                   ? <ul className={`subheading`}>
                     {
                       subheading.map(({ level, heading, slug, subheading }) => (
                         <li key={slug} className={`heading-${level}`}>
                           <a className={slug === activeSubheading ? 'active' : ''}
                              aria-label={heading}
                              onClick={(e) => focusSubHeading(e, slug)}>{heading}</a>
                         </li>
                       ))
                     }
                   </ul>
                   : ''}
                </li>
              )
            )
          }
        </ul>
      </Box>
    </aside>
    <style jsx>{`
      aside {
        display: none;
        position: absolute;
        right: calc((100% - 764px) / 2 + 744px);
        top: 2.6rem;
        height: calc(100% - 20vh);

        @media screen and (min-width: 1200px) {
          display: block;
        }
      }

      .heading {
        display: flex;
        flex-direction: column;
        min-height: 4.2rem;
        cursor: pointer;
        position: relative;

        > a {
          display: flex;
          position: relative;
          align-items: center;
          font-size: 1.5rem;
          text-decoration: none;
          outline: none;
          cursor: pointer;
          margin-left: 1.6rem;
          user-select: none;
          appearance: none;
          color: var(--color-link);
          font-weight: 600;

          &:before {
            content: '';
            position: absolute;
            left: -2.4rem;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background-color: var(--color-button);
            transition: background-color 0.2s;
          }

          &:hover, &:focus, &:active, &.active {

            color: var(--color-green);

            &:before {
              background-color: var(--color-green)
            }

          }
        }

        &:before {
          content: '';
          position: absolute;
          left: -3.5px;
          top: 19px;
          width: 1px;
          height: calc(100% - 2.4rem);
          background-color: var(--color-button);
          transition: background-color 0.2s;
        }

        &:last-child:before {
          display: none;
        }
      }

      .heading > a.active + .subheading {
        max-height: 350px;
      }

      .subheading {
        padding-left: 1.6rem;
        margin-top: 4px;
        margin-bottom: 8px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s;

        .heading-3 {
          min-height: 4.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          > a {
            font-size: 14px;
            margin-left: 1.6rem;
            white-space: nowrap;
            position: relative;
            display: flex;
            align-items: center;

            &:before {
              content: '';
              position: absolute;
              left: -1.8rem;
              width: 8px;
              height: 8px;
              border: 2px solid var(--color-button);
              border-radius: 100%;
              transition: border 0.2s;
            }

            &:hover, &:focus, &:active, &.active {

              color: var(--color-green);

              &:before {
                border-color: var(--color-green)
              }

            }
          }
        }
      }
    `}</style>
  </>;
};

export default ArticleSidebar;