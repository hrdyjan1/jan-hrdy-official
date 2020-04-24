import React from 'react';

const rotate = (hr, mn, sc) => (finalHour, finalMinute, finalSecond) => {
  const deg = 6;
  let day = new Date();

  let hh = (finalHour ?? day.getHours()) * 30;
  let mm = (finalMinute ?? day.getMinutes()) * deg;
  let ss = (finalSecond ?? day.getSeconds()) * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
};

const Clock = ({ staticDate, shouldStartOnClickClock }) => {
  const [isClickedOnClock, setClickedOnClock] = React.useState(false);

  const setClockReady = () => setClickedOnClock(true);

  React.useEffect(() => {
    let interval;
    const hr = document.getElementById('hr');
    const mn = document.getElementById('mn');
    const sc = document.getElementById('sc');
    const rotation = rotate(hr, mn, sc);
    const shouldRunClock = isClickedOnClock && shouldStartOnClickClock;

    if (staticDate && !shouldRunClock) {
      rotation(staticDate?.hr, staticDate?.mn, staticDate?.sc);
    } else {
      interval = setInterval(rotation);
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
};

export default Clock;
