import { FC } from 'react';

type InfoBlockProps = {
  type: 'attention' | 'want' | 'fyi';
};

export const InfoBlock: FC<InfoBlockProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
        }
      `}</style>
    </>
  );
};

export default InfoBlock;
