import React from 'react';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';

const Intro = ({header, subHeader}) => {
  const { t } = useComplexLanguageMethod();
  return (
    <>
      <h1>{t(header)}</h1>
      <h2>{t(subHeader)}</h2>
    </>
  );
};

export default Intro;
