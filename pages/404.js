import React from 'react';
import Intro from '../components/pages/projects/Intro';

const Clock = () => {
  React.useEffect(() => {
    const deg = 6;
    const hr = document.getElementById('hr');
    const mn = document.getElementById('mn');
    const sc = document.getElementById('sc');

    const interval = setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='clock'>
      <div className='hour'>
        <div className='hr' id='hr'></div>
      </div>
      <div className='min'>
        <div className='mn' id='mn'></div>
      </div>
      <div className='sec'>
        <div className='sc' id='sc'></div>
      </div>
    </div>
  );
};

const Page404 = () => {
  return (
    <div id='page-404-id'>
      <Clock />
      <Intro header='404' subHeader='description404' />
    </div>
  );
};

export default Page404;
