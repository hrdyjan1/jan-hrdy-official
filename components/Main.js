import React from 'react';
import { usePageChange, pageChangeStatus } from '../hooks';
import { Header } from './Header';

function Main({ Component, pageProps }) {
  const { status, error, isDoneOrIsLoadingHidden } = usePageChange();

  if (status === pageChangeStatus.PENDING_VISIBLE) {
    return <p>Loading...</p>;
  }
  if (isDoneOrIsLoadingHidden) {
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
  if (status === pageChangeStatus.REJECTED) {
    return (
      <>
        <p>{error}</p>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }

  return null;
}

export default Main;
