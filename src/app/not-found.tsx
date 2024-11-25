// Add this at the top of your file to mark it as a client component
'use client';

import Clock from '@/components/clock/Clock';
import Intro from '@/components/intro/Intro';
import React from 'react';

function Page404() {
  return (
    <div id='page-404-id'>
      <Clock staticDate={{ hr: 4, mn: 4, sc: 0 }} shouldStartOnClickClock />
      <Intro header='404' subHeader='description404' />
    </div>
  );
}

export default Page404;
