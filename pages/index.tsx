import { FC } from 'react';

export const Index: FC = () => {
  return <>
    <div>Welcome to our Next Project</div>
    <style jsx>{`
      div {
        max-width: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10rem auto;
        text-align: center;

        &:hover, &:focus, &:active {
          background-color: yellow;
        }
      }
    `}</style>
  </>;
};

export default Index;