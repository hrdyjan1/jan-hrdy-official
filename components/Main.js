import React from 'react';
import Header from './Header';

const Main = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Main;
