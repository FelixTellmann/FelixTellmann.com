import { FC } from 'react';
import { NextSeo } from 'next-seo';
import { HeroText, Link, ProsCons } from 'components';

export const Learn: FC = () => {
  return (
    <>
      <NextSeo title="Learn in Public - Felix Tellmann" />
      <HeroText fontSize={[100, 112]} mb={3}>
        Learn in Public
      </HeroText>
      <h2>Intro</h2>
      <article>
        <p>
          Through my entire life I've always had a passion for learning and figuring new things out. I've always been curious by
          nature and never felt afraid to jump into cold water for the sake of learning. Recently, I felt very inspired by{' '}
          <Link href="https://twitter.com/swyx" target="_blank">
            @swyx
          </Link>{' '}
          concept of{' '}
          <Link href="https://www.swyx.io/learn-in-public/" target="_blank">
            Learn in Public
          </Link>
          .
        </p>
        <p>
          The idea behind <em>Learning in Public</em> is to share as much as possible. About what we are working on and what we
          learned (or want to learn). Most people (like 99% including me for most times) tend to <em>just</em> consume
          information, may it be for the sake of learning or just entertainment. Learning in Public is a shift from being the
          consumer to creating and documenting what we learn. An important note is that learning in public has no quality
          standards. The only thing that matters is continous effort and consistency. The learning will happen because of that,
          not because you spend hours perfecting an article.
        </p>
        <h2>Compound yourself</h2>
        <p>
          Each piece of content you create adds on and multiplies whatever else you have done beforehand. Thats the magic that
          happens when you start learning & working in public is that everything you create will be a compounding investment. One
          or two investments will have little effect, but when you start writing and taking notes in public on a daily base, you
          will start compounding and get major returns.
        </p>
        <p>
          Think about the quality of your learning. Once you have written a few articles (even really bad ones or just public
          learning notes), you will start getting feedback. Thats where the cycle starts, the feedback will help you get better
          and you will learn things that you didn't even know you could learn.
        </p>
        <blockquote>
          Compounding is magic. Look for it everywhere. Exponential curves are the key to wealth generation.
        </blockquote>
        <p>
          My goal is to use this Page as an updated list of what I've learned and what I want to learn. It's going to cover all
          sort of topics and won't be limited to just web-development. My aim is to showcase my learning and to the page as a tool
          for myself to keep track my own progress, save some resources for later use and to get feedback and insights into things
          I do not know yet.
        </p>
      </article>
    </>
  );
};

export default Learn;
