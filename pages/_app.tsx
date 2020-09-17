import { AppProps } from 'next/app';
import { FC } from 'react';

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default _App;
