import React from 'react';
import ToggleWrapper from './ToggleWrapper';

const ToggleLanguage = () => {
  return (
    <>
      <h4>Language</h4>
      <ToggleWrapper toggleName='Language'>
        <span className='toggleLanguageHandler'> </span>
      </ToggleWrapper>
    </>
  );
};

export default ToggleLanguage;
