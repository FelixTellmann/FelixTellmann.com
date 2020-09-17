import { FC } from 'react';

export const Index: FC = () => {
  return <>
    <div>Welcome to our Next Project</div>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 10rem auto;
        max-width: 700px;
        &:hover, &:focus, &:active {
            background-color: yellow;
        }
      }
    `}</style>
  </>;
};

export default Index;