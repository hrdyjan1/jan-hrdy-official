import React from 'react';
import { useComplexLanguageMethod } from '../contexts/languageContext';

function About() {
  const { t } = useComplexLanguageMethod();

  return (
    <div>
      <p>{t('homePageText')}</p>
    </div>
  );
}

export default About;