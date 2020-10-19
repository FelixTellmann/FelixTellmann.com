import { FC, useEffect, useState } from "react";
import { Box } from "./Box";
import scrollTo from "../lib/scrollTo";

export type Headings = {
  level: number;
  title: string;
  slug: string;
  subheading: {
    subLevel: number;
    subSlug: string;
    subTitle: string;
  }[];
}[];

export type ArticleSidebarProps = {
  showHeadings: number;
  headings: Headings;
  showHeadingsExpanded?: boolean;
};

export const ArticleSidebar: FC<ArticleSidebarProps> = ({ showHeadings, headings, showHeadingsExpanded }) => {
  const [activeHeading, setActiveHeading] = useState(``);
  const [activeSubheading, setActiveSubheading] = useState(``);
  const [showSidebar, setShowSidebar] = useState(false);
  
  const focusHeading = (event: React.MouseEvent<HTMLAnchorElement>, slug) => {
    event.preventDefault();
    scrollTo(200, document.getElementById(slug).offsetTop - 120);
    setActiveHeading(slug);
    setActiveSubheading("");
  };
  
  const focusSubHeading = (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>, slug) => {
    event.preventDefault();
    scrollTo(200, document.getElementById(slug).offsetTop - 120);
    setActiveSubheading(slug);
  };
  
  useEffect(() => {
    const ac = new AbortController();
    let loaded = false;
    const observerA = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHeading(entry.target.id);
            }
          });
        },
        {
          rootMargin: `0% 0% -60% 0%`,
          threshold: 1.0
        }
    );
    
    const observerB = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio === 0) {
              setActiveSubheading("");
            }
            if (entry.isIntersecting) {
              setActiveSubheading(entry.target.id);
            }
          });
        },
        {
          rootMargin: `0% 0% -70% 0%`,
          threshold: [0, 1]
        }
    );
    headings?.forEach(({ slug, subheading }) => {
      observerA.observe(document.getElementById(slug));
      if (subheading.length > 0) {
        subheading.forEach(({ subSlug }) => {
          observerB.observe(document.getElementById(subSlug));
        });
      }
    });
    
    setShowSidebar(window.scrollY > 400);
    
    window.addEventListener(
        "load",
        () => {
          if (!loaded) {
            loaded = true;
            headings?.forEach(({ slug, subheading }) => {
              observerA.observe(document.getElementById(slug));
              if (subheading.length > 0) {
                subheading.forEach(({ subSlug }) => {
                  if (document.getElementById(subSlug)) {
                    observerB.observe(document.getElementById(subSlug));
                  }
                });
              }
            });
          }
        },
        { once: true }
    );
    
    const scrollHandler = () => {
      if (document.getElementById("mdx-content") === null) return;
      const { offsetHeight, offsetTop } = document.getElementById("mdx-content");
      setShowSidebar(window.scrollY > 400 && offsetHeight + offsetTop - window.innerHeight * 0.65 > window.scrollY);
      if (!loaded) {
        loaded = true;
        headings?.forEach(({ slug, subheading }) => {
          observerA.observe(document.getElementById(slug));
          if (subheading.length > 0) {
            subheading.forEach(({ subSlug }) => {
              observerB.observe(document.getElementById(subSlug));
            });
          }
        });
      }
    };
    
    window.addEventListener("scroll", scrollHandler);
    
    return () => {
      observerA.disconnect();
      observerB.disconnect();
      window.removeEventListener("scroll", scrollHandler);
      ac.abort();
    };
  }, [headings]);
  
  return (
      <>
        {showHeadings > 0 && headings.length > 0 ? (
            <aside className={showSidebar ? "active" : ""}>
              <Box position="sticky" w={220} top={200} minH={600} p={3}>
                <ul>
                  {headings.map(({ title, slug, subheading }) => (
                      <li key={slug} className="heading">
                        <a
                            tabIndex={0}
                            role="button"
                            className={slug === activeHeading ? "active" : ""}
                            aria-label={title}
                            onClick={(e) => focusHeading(e, slug)}
                            onKeyDown={(e) => focusSubHeading(e, slug)}>
                          {title}
                        </a>
                        {showHeadings > 1 && subheading.length > 0 ? (
                            <ul className={`subheading ${showHeadingsExpanded ? "expanded" : ""}`}>
                              {subheading.map(({ subLevel, subTitle, subSlug }) => (
                                  <li key={subSlug} className={`heading-${subLevel}`}>
                                    <a
                                        tabIndex={0}
                                        role="button"
                                        className={`${subSlug === activeSubheading ? "active" : ""}`}
                                        aria-label={subTitle}
                                        onClick={(e) => focusSubHeading(e, subSlug)}
                                        onKeyDown={(e) => focusSubHeading(e, subSlug)}>
                                      {subTitle}
                                    </a>
                                  </li>
                              ))}
                            </ul>
                        ) : (
                            ""
                        )}
                      </li>
                  ))}
                </ul>
              </Box>
            </aside>
        ) : null}
        <style jsx>{`
          aside {
            position: absolute;
            top: 2.6rem;
            right: calc((100% - 764px) / 2 + 764px);
            height: calc(100% - 20vh);
            opacity: 0;
            display: none;
            transition: opacity 0.25s;

            &.active {
              opacity: 1;
            }

            @media screen and (min-width: 1200px) {
              display: block;
            }
          }

          .heading {
            position: relative;
            min-height: 4.2rem;
            display: flex;
            flex-direction: column;
            cursor: pointer;

            > a {
              position: relative;
              display: flex;
              align-items: center;
              margin-left: 1.6rem;
              outline: none;
              cursor: pointer;
              user-select: none;
              color: var(--color-link);
              font-size: 1.5rem;
              font-weight: 600;
              text-decoration: none;
              appearance: none;

              &:before {
                position: absolute;
                content: '';
                left: -2.4rem;
                width: 8px;
                height: 8px;
                border-radius: 100%;
                background-color: var(--color-button);
                transition: background-color 0.2s;
              }

              &:hover, &:focus, &:active, &.active {
                color: var(--color-pro);

                &:before {
                  background-color: var(--color-pro);
                }
              }
            }

            &:before {
              position: absolute;
              content: '';
              top: 19px;
              left: -3.5px;
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
            max-height: 0;
            overflow: hidden;
            margin-top: 4px;
            margin-bottom: 8px;
            padding-left: 1.6rem;
            transition: max-height 0.3s;

            &.expanded {
              max-height: 350px;
            }

            .heading-3 {
              min-height: 4.2rem;
              display: flex;
              flex-direction: column;
              justify-content: center;

              > a {
                position: relative;
                display: flex;
                align-items: center;
                margin-left: 1.6rem;
                font-size: 14px;
                white-space: nowrap;

                &:before {
                  position: absolute;
                  content: '';
                  left: -1.8rem;
                  width: 8px;
                  height: 8px;
                  border: 2px solid var(--color-button);
                  border-radius: 100%;
                  transition: border 0.2s;
                }

                &:hover, &:focus, &:active, &.active {
                  color: var(--color-pro);

                  &:before {
                    border-color: var(--color-pro);
                  }
                }
              }
            }
          }
        `}</style>
      </>
  );
};
