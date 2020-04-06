import React from 'react';
import ToggleWrapper from './ToggleWrapper';

const ToggleSound = () => {
  const [isSoundOn, setSoundOn] = React.useState(false);

  return (
    <>
      <ToggleWrapper toggleName='Sound' onChange={() => setSoundOn((s) => !s)} checked={isSoundOn}>
        <span className='toggleSoundHandler'></span>
        <span className='music-icon-off'></span>
        <span className='music-icon-on'></span>
        <span className='music-note note--1'></span>
        <span className='music-note note--2'></span>
      </ToggleWrapper>
    </>
  );
};

export default ToggleSound;
