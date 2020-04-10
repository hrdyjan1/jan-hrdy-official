import React from 'react';
import { useComplexLanguageMethod } from '../contexts/languageContext';

const Loader = ({ isLoading }) => {
  const [isLoadLong, setLoadLong] = React.useState(false);
  setTimeout(() => setLoadLong(true), 5000);
  const { t } = useComplexLanguageMethod();
  return (
    <div id='loaderWrapper'>
      <div id='loader'>
        <div id='shadow'></div>
        <div id='box'></div>
        <h3 id='loaderHeading'>janhrdy.net</h3>
        {isLoadLong && <h3 id='loaderHeadingLong'>{t('tryToReload')}</h3>}
      </div>
      <h4 id='loaderSubHeading'>{t('loading')}...</h4>
    </div>
  );
};

export default Loader;
