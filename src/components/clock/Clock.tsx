// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';

const prepareRotation =
  (hr: HTMLElement | null, mn: HTMLElement | null, sc: HTMLElement | null) =>
  (finalHour: number, finalMinute: number, finalSecond: number) => {
    const deg = 6;
    const day = new Date();

    const hh = (finalHour ?? day.getHours()) * 30;
    const mm = (finalMinute ?? day.getMinutes()) * deg;
    const ss = (finalSecond ?? day.getSeconds()) * deg;

    if (hr && mn && sc) {
      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    }
  };

interface Props {
  shouldStartOnClickClock: boolean;
  staticDate: {
    hr: number;
    mn: number;
    sc: number;
  };
}

function Clock({ staticDate, shouldStartOnClickClock }: Props) {
  const [isClickedOnClock, setClickedOnClock] = React.useState(false);

  const setClockReady = () => setClickedOnClock(true);

  React.useEffect(() => {
    let interval: number;

    const hr = document.getElementById('hr');
    const mn = document.getElementById('mn');
    const sc = document.getElementById('sc');
    const rotate = prepareRotation(hr, mn, sc);
    const shouldRunClock = isClickedOnClock && shouldStartOnClickClock;

    if (staticDate && !shouldRunClock) {
      rotate(staticDate?.hr, staticDate?.mn, staticDate?.sc);
    } else {
      interval = setInterval(rotate);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [staticDate, shouldStartOnClickClock, isClickedOnClock]);

  return (
    <div className='clock' onClick={setClockReady}>
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
}

export default Clock;
