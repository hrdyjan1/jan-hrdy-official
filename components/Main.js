import React from 'react';
import MainNavigation from './MainNavigation';
import ModalWrapper from './common/modal/ModalWrapper';

const Main = ({ Component, pageProps }) => {
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
