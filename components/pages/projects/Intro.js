import React from 'react';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';

const Intro = ({ header, subHeader, renderBottom, renderMiddle }) => {
  const { t } = useComplexLanguageMethod();
  const renderBottomElement = typeof renderBottom === 'function' ? renderBottom : () => {};
  const renderMiddleElement = typeof renderMiddle === 'function' ? renderMiddle : () => {};
  return (
    <>
      <h1>{t(header)}</h1>
      {renderMiddleElement()}
      <div className='intro-section'>
        <h2>{t(subHeader)}</h2>
        {renderBottomElement()}
      </div>
    </>
  );
};

export default Intro;
