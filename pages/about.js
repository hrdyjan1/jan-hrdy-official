import React from 'react';
import { useComplexLanguageMethod } from '../contexts/languageContext';

function About() {
  const { t } = useComplexLanguageMethod();
  return (
    <div>
      {/* <LongRender /> */}
      <p>{t('aboutPageText')}</p>
    </div>
  );
}

export default About;
