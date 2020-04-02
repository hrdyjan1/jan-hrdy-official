import React from 'react';
import { gsap, Power2, TimelineMax } from 'gsap/dist/gsap';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js';
import { useRouter } from 'next/router';

const spinner = () => {
  gsap.registerPlugin(CSSRulePlugin);

  const router = useRouter();
  const goToHomePage = () => router.push('/');

  //   const heading = React.useRef(null);
  const loader = React.useRef(null);

  React.useEffect(() => {
    const timeline = new TimelineMax();
    timeline
      .set(loader.current, { 'z-index': 500 })
      .to(
        CSSRulePlugin.getRule('.body:before'),
        0.3,
        { cssRule: { top: '50%' }, ease: Power2.easeOut },
        'close'
      )
      .to(
        CSSRulePlugin.getRule('.body:after'),
        0.3,
        { cssRule: { bottom: '50%' }, ease: Power2.easeOut },
        'close'
      )
      .to(loader.current, 0.271, { opacity: 1 });
    return () =>
      timeline
        .to(loader.current, 0.271, { opacity: 0 })
        .to(
          CSSRulePlugin.getRule('.body:before'),
          0.3,
          { cssRule: { top: '0%' }, ease: Power2.easeOut },
          'open'
        )
        .to(
          CSSRulePlugin.getRule('.body:after'),
          0.3,
          { cssRule: { bottom: '0%' }, ease: Power2.easeOut },
          'open'
        )
        .set(loader.current, { 'z-index': 0 });
  }, []);

  return (
    <div className='body'>
      <button onClick={goToHomePage}>Home</button>
      <div ref={loader} className='loader'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <div className='bar4'></div>
        <div className='bar5'></div>
        <div className='bar6'></div>
      </div>
    </div>
  );
};

export default spinner;
