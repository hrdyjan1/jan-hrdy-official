// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import ToggleWrapper from './ToggleWrapper';
import { useThemeAction, useThemeState } from '@/features/theme/helpers';

function ToggleTheme() {
  const { status } = useThemeState();
  const { toggle } = useThemeAction();

  return (
    <ToggleWrapper toggleName='Theme' onChange={toggle} checked={status === 'DARK'}>
      <span className='toggleThemeHandler'>
        <span className='crater crater--1'></span>
        <span className='crater crater--2'></span>
        <span className='crater crater--3'></span>
      </span>
      <span className='star star--1'></span>
      <span className='star star--2'></span>
      <span className='star star--3'></span>
      <span className='star star--4'></span>
      <span className='star star--5'></span>
      <span className='star star--6'></span>
    </ToggleWrapper>
  );
}

export { ToggleTheme };
