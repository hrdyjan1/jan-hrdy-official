// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import ToggleWrapper from './ToggleWrapper';
import { useSoundAction, useSoundState } from '@/features/sound/helpers';

function ToggleSound() {
  const { status } = useSoundState();
  const { toggle } = useSoundAction();

  return (
    <ToggleWrapper toggleName='Sound' onChange={toggle} checked={status === 'OFF'}>
      <span className='toggleSoundHandler'></span>
      <span className='music-icon-off'></span>
      <span className='music-icon-on'></span>
      <span className='music-note note--1'></span>
      <span className='music-note note--2'></span>
    </ToggleWrapper>
  );
}

export { ToggleSound };
