import React from 'react';
import ToggleWrapper from './ToggleWrapper';
import { useThemeState, useThemeMethod } from '../../../contexts/toggleContext';

const ToggleTheme = () => {
  const { isDarkTheme } = useThemeState();
  const { toggle: toggleTheme } = useThemeMethod();

  return (
    <>
      <ToggleWrapper toggleName='Theme' onChange={toggleTheme} checked={isDarkTheme}>
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
    </>
  );
};

export default ToggleTheme;
