import React from 'react';
import { useComplexLanguageMethod } from '../../../contexts/languageContext';

const Intro = () => {
  const { t } = useComplexLanguageMethod();
  return (
    <>
      <h1>{t('projects')}</h1>
      <h2>{t('projectsDescription')}</h2>
    </>
  );
};

export default Intro;
