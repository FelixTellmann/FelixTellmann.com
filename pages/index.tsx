import { FC, useState } from 'react';
import Text from '../components/Text';
import { FiHexagon } from 'react-icons/fi';
import Timeline from '../components/Timeline';
import { getAllPostsSlug, getSinglePostData } from '../lib/getBlogPosts';
import matter from 'gray-matter';
import { BlogProps } from './blog';
import BlogPreview from '../components/BlogPreview';
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
          }
        
        ]
      }
    ];
    
    const TIMELINE_PAST = [
      {
        title: `2018`,
        items: [
          {
            headline: <>Opened <em>The Burger Exchange</em></>,
            description: <>Its always been a dream, or said jokingly. Now we took the steps to Make it a Reality. A 200 seater
              Restaurant with our own Concept of a trendy upmarket Burger Joint.</>
          },
          {
            headline: <>Getting Start-up Funding</>,
            description: <>The first experience acquiring start-up funding. <em>You gotta move early and fast, as everyone else will slow you
              down.</em> </>
          },
          {
            headline: <>Sold our House & moved to Knysna</>,
            description: <>Made the decision to move to Knysna on the Garden Route to open a Restaurant.</>
          }
        ]
      },
      {
        title: `2017`,
        items: [
          {
            headline: <>Liquix.io</>,
            description: <>Partnered up to start a small Shopify E-commerce web design studio.</>
          },
          {
            headline: <>Full-time Web Development</>,
            description: <>Found my first clients to work on the side, and quickly grew to a full time freelancing occupation, where I got hooked on React.js</>
          },
          {
            headline: <>Almost started a Food Truck 🚚</>,
            description: <>My Wife an I were both getting excited to start our own Food Truck and planned out many details. Unfortunately, the
              stars weren't aligned then. <em>We shall get back to it!!</em></>
          }
        ]
      },
      {
        title: `2016`,
        items: [
          {
            headline: <>Building Smart-up</>,
            description: <>I took some time to work on the marriage of my passions: Tech & Restaurants. Smart-up
              is a training platform & SaaS application for restaurant owners & managers to train their staff.</>
          },
          {
            headline: <>Opened a Restaurant (not my own yet)</>,
            description: <>After graduation, I got straight back to work. This time as General Manager, opening a brand new Restaurant in the
              CBD of Cape Town.
              I opened Raya Kitchen over the course of 2 Months including construction and building up a new team from scratch.</>
          }
        ]
      },
      {
        title: `2015`,
        items: [
          {
            headline: <>Completed my Post Graduate Studies at UCT</>,
            description: <>If this Year wasn't enough. I went back to University in 2015 to advance with a Postgraduate Diploma in Business
              Management & Entrepreneurship.📚👓 </>
          },
          {
            headline: <>Got Married 💒</>,
            description: <>Liz and I decided to have a small ceremony with the closes friends & family at a
              beautiful wine farm in Cape Town.</>
          },
          {
            headline: <>Co-Founded Simply Stuck</>,
            description: <>Started a Laptop Vinyl sticker business, while exploring the very interesting customer segment of students 👨‍🎓 It
              was part study, part real business, but somehow eventually faded & failed as we had a team of 6 co-founders. <em>Stick to 1 or 2
                if
                you can. </em>😉</>
          },
          
          {
            headline: <>New Role as a Restaurant Consultant</>,
            description: <>I left my full-time position early in 2015 to focus on my Postgraduate studies. Luckily, I was offered to continue
              in a Consulting Role.</>
          },
          {
            headline: <>Got Engaged 💍</>,
            description: <>I asked my now fiancee, Elizabeth, to marry me. She said yes! I took her out for a super romantic dinner and popped
              the question in a full restaurant.</>
          }
        ]
      },
      {
        title: `2014`,
        items: [
          {
            headline: <>First <em>Personal </em>&nbsp;Website</>,
            description: <>I got back to my old passion in Tech 👨‍💻💻😄. While I build a couple of websites for other people & companies in
              the past, I decided to build my first own site
              with Wordpress with couple of Blog posts. Unfortunately I didn't use Git yet and lost the source code in a old HDD.</>
          }
        ]
      },
      {
        title: `2013`,
        items: [
          {
            headline: <>Joined Kitima Restaurant</>,
            description: <>Joined the Best Asian Restaurant in South Africa as a Restaurant Manager overseeing a team of 50 employees. I
              quickly learned the value of empowering & training people to reach their full potential.</>
          }
        ]
      },
      {
        title: `2012`,
        items: [
          {
            headline: <>Got my first Management Job</>,
            description: <>Started as a waiter and got promoted shortly after to Assistant Restaurant Manager at Salt Restaurant - at the
              Ambassador Hotel in Cape Town</>
          },
          {
            headline: <>Graduated College</>,
            description: <>Completed my college after 3 years with three higher national diplomas graduating Summa Cum Laude, covering all
              aspects I needed to know to one day open my own restaurant</>
          }
        ]
      },
      {
        title: `2011`,
        items: [
          {
            headline: <>Working on a 6* Cruise Line</>,
            description: <>Spend 4 months travelling the seas onboard of the Yachts of Seabourn. Visited many countries in North America & the
              Caribbean while working as a Waiter.</>
          }
        ]
      },
      {
        title: `2007`,
        items: [
          {
            headline: <>Started my journey as a Chef & Waiter</>
          },
          {
            headline: <>Learned English 0 - 100 in 3 months</>,
            description: <>My first exciting endeavour in South Africa was a three months English course to find my feet. I went from hating
              english (<em>"I will Never Learn English"</em> - 15y old Me) in high school to acing any test & starting to think in
              English. Changing your environment, makes changing your habits muuuch easier.</>
          },
          {
            headline: <>Move to South Africa</>,
            description: <>This was a big step for me at the age of 21. I decided to take on a different career path, jumping straight into my
              other passion for <strong>food & service</strong>, leaving the tech world as a hobby.</>
          }
        ]
      },
      {
        title: `2004`,
        items: [
          {
            headline: <>Graduated High School</>,
            description: <>I completed my last three years at a College for Technology and Media in Germany and shortly after found myself
              working different jobs, <em>trying to figure out what I really wanted to do.</em></>
          }
        ]
      },
      {
        title: `1999`,
        items: [
          {
            headline: <>Visited San Fransisco & Silicon Valley</>,
            description: <>Exploring the tech world as a teenager, bought a brand new Laser Mouse 🖱 at the Metreon downtown San Fransisco.
              By now I got into Gaming 🕹 & build my first websites using MS FrontPage 98.</>
          }
        ]
      },
      {
        title: `1997`,
        items: [
          {
            headline: <>My first lines of Code</>,
            description: <>My stepdad Franz thought me programming ⌨, building a calculator 🧮 and a racing game 👾🏎 with Delphi and
              Pascal </>
          },
          {
            headline: <>Building my first Computer</>,
            description: <>My brother and I were lucky to be building our first computer from scratch, using my stepdads old hardware and
              buying some new ones. 8MB Ram with a 133Mhz Pentium 😂 </>
          }
        ]
      },
      {
        title: `1996`,
        items: [
          {
            headline: <>Exploring the Internet for the first time 🌐</>,
            description: <>Travelling at 28.8Kbit Modem speeds 📠🔌💾 ..., t.t.t.t.t.t.t,tick
              eeeeeeeooohhhwwwwwaaa............Pshhhkkkkkkrrrr2ka, *ding*ding... %^&! Playing some Snowman Browser Game I will never
              forget.</>
          }
        ]
      },
      {
        title: `1986`,
        items: [
          {
            headline: <>Born - Germany - January 8th</>
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
              description={<>A custom React Hook to help you implement a "theming" classes for your application. The hook allows you to add as
                many color themes as you wish.</>}
              hover />
      </LinkBlock>
      {/* TODO: Add Project for Sudoku solver with simple presentation & hosting via Vercel*/}
      {/*<LinkBlock href="https://github.com/FelixTellmann/use-color-theme" target="_blank">
        <Card icon={<HiOutlineColorSwatch />}
              title="use-color-theme"
              description={<>A custom React Hook to help you implement a "theming" classes for your application. The hook allows you to add as many color themes as you wish.</>}
              hover />
      </LinkBlock>*/}
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
