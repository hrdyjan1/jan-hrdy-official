import React from 'react';
import Intro from '../components/pages/projects/Intro';
import Clock from '../components/pages/projects/Clock';

const Page404 = () => {
  return (
    <div id='page-404-id'>
      <Clock staticDate={{ hr: 4, mn: 4, sc: 0 }} shouldStartOnClickClock/>
      <Intro header='404' subHeader='description404' />
    </div>
  );
};

export default Page404;
