import React from 'react';
import Link from 'next/link';
import usePageChange, { pageChangeStatus } from '../hooks/usePageChange';
import { Header } from './Header';

function Main({ Component, pageProps }) {
  const { status, error, isLoadingVisible, isDoneOrIsLoadingHidden } = usePageChange();

  if (isLoadingVisible) {
    return <p>Loading</p>;
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
