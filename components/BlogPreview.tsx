import { FC } from 'react';
import { Text } from './Text';
import { LinkBlock } from './LinkBlock';

type BlogPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export const BlogPreview: FC<BlogPreviewProps> = ({ slug, title, excerpt }) => {
  return (
    <>
      <LinkBlock href={`blog/${slug}`}>
        <Text as="h3" fontSize={20} fontWeight={600} lineHeight={1.25} mb={2}>
          {title}
        </Text>
        <Text as="p" fontSize={2} lineHeight={1.6} color="--color-text" mb={4}>
          {excerpt}
        </Text> 
      </LinkBlock>
    </>
  );
};


