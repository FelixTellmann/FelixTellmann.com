import { FC } from "react";
import { LinkBlock } from "./LinkBlock";

type BlogPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export const BlogPreview: FC<BlogPreviewProps> = ({ slug, title, excerpt }) => {
  return (
      <>
        <LinkBlock href={`blog/${slug}`} mb={4}>
          <h3 className="h4">{title}</h3>
          <p>{excerpt}</p>
        </LinkBlock>
      </>
  );
};
