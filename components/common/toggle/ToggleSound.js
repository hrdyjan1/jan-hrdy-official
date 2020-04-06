import React from 'react';
import ToggleWrapper from './ToggleWrapper';
import { useSoundState, useSoundMethod } from '../../../contexts/soundContext';

const ToggleSound = () => {
  const { isSoundOff } = useSoundState();
  const { toggleComplex: toggleSound } = useSoundMethod();

  return (
    <ToggleWrapper toggleName='Sound' onChange={toggleSound} checked={isSoundOff}>
      <span className='toggleSoundHandler'></span>
      <span className='music-icon-off'></span>
      <span className='music-icon-on'></span>
      <span className='music-note note--1'></span>
      <span className='music-note note--2'></span>
    </ToggleWrapper>
  );
};

export default ToggleSound;
