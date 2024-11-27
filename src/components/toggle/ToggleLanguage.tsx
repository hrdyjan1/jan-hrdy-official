// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import ToggleWrapper from './ToggleWrapper';
import { useLanguageAction, useLanguageState } from '@/features/language/helpers';

function ToggleLanguage() {
  const { language } = useLanguageState();
  const { toggle } = useLanguageAction();

  return (
    <ToggleWrapper toggleName='Language' onChange={toggle} checked={language === 'ENGLISH'}>
      <span className='toggleLanguageHandler'> </span>
    </ToggleWrapper>
  );
}

export { ToggleLanguage };
