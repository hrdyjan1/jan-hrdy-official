import React from 'react';
import { useComplexLanguageMethod } from '../contexts/languageContext';

function Projects() {
  const { t } = useComplexLanguageMethod();
  return (
    <div>
      {/* <LongRender /> */}
      <p>{t('projectsPageText')}</p>
    </div>
  );
}

export default Projects;
