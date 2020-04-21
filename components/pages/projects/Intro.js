import React from 'react';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';

const Intro = ({ header, subHeader, render }) => {
  const { t } = useComplexLanguageMethod();
  const renderElement = typeof render === 'function' ? render : () => {};
  return (
    <>
      <h1>{t(header)}</h1>
      <div className='intro-section'>
        <h2>{t(subHeader)}</h2>
        {renderElement()}
      </div>
    </>
  );
};

export default Intro;
