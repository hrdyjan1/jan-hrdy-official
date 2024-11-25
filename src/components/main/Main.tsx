// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import MainNavigation from '../mainNavigation/MainNavigation';
import { usePathname } from 'next/navigation';
import { sleep } from '@/constants/sleep';
import { EmptyFunction } from '@/types/EmptyFunction';
import { useOnMount } from '@/hooks/useOnMount';
import { getRandomNumber } from '@/utils/getRandomNumber';
import { Modal } from '../modalWrapper/Modal';

interface Props {
  finishLoading: EmptyFunction;
}

function Main({ children, finishLoading }: React.PropsWithChildren<Props>) {
  const pathname = usePathname();

  useOnMount(finishLoading);

  if (pathname === '/') {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <React.Fragment>
      <MainNavigation />
      <Modal />
      <main>{children}</main>
    </React.Fragment>
  );
}

const MainLazy = React.lazy(() =>
  sleep(getRandomNumber(250, 1_000)).then(() => ({
    default: (props: React.PropsWithChildren<Props>) => (
      <Main finishLoading={props.finishLoading}>{props.children}</Main>
    ),
  }))
);

export { Main, MainLazy };
