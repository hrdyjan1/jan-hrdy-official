import React from 'react';
import ToggleWrapper from './ToggleWrapper';
import { useLanguageState, useLanguageMethod } from '../../../contexts/languageContext';

const ToggleLanguage = () => {
  const { isEnglishLanguage } = useLanguageState();
  const { toggleComplex: toggleLanguage } = useLanguageMethod();

  return (
    <ToggleWrapper toggleName='Language' onChange={toggleLanguage} checked={isEnglishLanguage}>
      <span className='toggleLanguageHandler'> </span>
    </ToggleWrapper>
  );
};

export default ToggleLanguage;
