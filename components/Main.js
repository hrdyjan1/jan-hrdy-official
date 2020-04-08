import React from 'react';
import MainNavigation from './MainNavigation';
import ModalWrapper from './common/modal/ModalWrapper';
import { useRouter } from 'next/router';

const Main = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  // welcome screen
  if (pathname === '/') {
      return <Component {...pageProps} />
  }

  return (
    <>
      <MainNavigation />
      <ModalWrapper />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default Main;
