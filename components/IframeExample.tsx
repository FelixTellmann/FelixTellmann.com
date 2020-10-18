import { FC, useRef } from "react";

type IframeExampleProps = {
  src: string;
  title: string;
  maxHeight?: string;
};

export const IframeExample: FC<IframeExampleProps> = ({ src, title, ...props }) => {
  const iframeRef = useRef(null);

  const setHeight = (ref) => {
    ref.current.style.height = `${ref.current.contentWindow.document.documentElement.offsetHeight}px`;
    ref.current.contentWindow.document.body.style = 'overflow:hidden;'
  };
  

  return (
    <>
      <iframe src={src} frameBorder="0" title={title} ref={iframeRef} {...props} onLoad={() => setHeight(iframeRef)} />
      <style jsx>{`
        iframe {
          border: 1px solid var(--color-remark-code-title-bg);
          border-radius: 0;
          margin-left: calc(var(--border-width, 5px) - var(--padding-page, 2.4rem));
          width: calc(100% + (var(--padding-page, 2.4rem) - var(--border-width, 5px)) * 2);
          @media screen and (min-width: 600px) {
            width: 100%;
            margin-left: 0;
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};
