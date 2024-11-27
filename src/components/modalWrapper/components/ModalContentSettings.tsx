import ToggleWrapper from '@/components/toggle/ToggleWrapper';
import { useLanguageAction, useLanguageState } from '@/features/language/helpers';
import { useThemeAction, useThemeState } from '@/features/theme/helpers';
import React from 'react';

function ModalContentSettings() {
  const { language } = useLanguageState();
  const { toggle: toggleLanguage } = useLanguageAction();

  const { status } = useThemeState();
  const { toggle: toggleTheme } = useThemeAction();

  return (
    <ul className='menu_items'>
      <li>
        <ToggleWrapper
          toggleName='Language'
          onChange={toggleLanguage}
          checked={language === 'ENGLISH'}
        >
          <span className='toggleLanguageHandler'> </span>
        </ToggleWrapper>
      </li>
      <li>
        <ToggleWrapper toggleName='Theme' onChange={toggleTheme} checked={status === 'DARK'}>
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
      </li>
    </ul>
  );
}

export { ModalContentSettings };
