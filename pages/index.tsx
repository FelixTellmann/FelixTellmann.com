import { FC } from 'react';
import useColorTheme from 'use-color-theme';

export const Index: FC = () => {
  
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme', 'another-theme'] });
  
  return <>
    <div onClick={() => { colorTheme.toggle(); }}>Welcome to our Next Project</div>
    <style jsx global>{`
      #__next div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10rem;
        text-align: center;
        width: 100vw;
        height: 100vh;
      }

      .light-theme {
        #__next {
          div {
            background-color: lightgrey;
            color: #1c1c1c;
          }
        }
      }

      .dark-theme {
        #__next {
          div {
            background-color: #1c1c1c;
            color: lightgrey;
          }
        }
      }

      .another-theme {
        #__next {
          div {
            background-color: #b2c6cf;
            color: #000a40;
          }
        }
      }

    `}</style>
  </>;
};

export default Index;