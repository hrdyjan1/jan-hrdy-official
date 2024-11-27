// Add this at the top of your file to mark it as a client component
'use client';

import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';
import { useTimeout } from '@/hooks/useTimeout';
import React from 'react';

interface Props {
  isLoaded: boolean;
}

function Loader({ isLoaded }: Props) {
  const [isLoadLong, setLoadLong] = React.useState(false);
  useTimeout(() => setLoadLong(true), 5_000);

  const { t } = useLanguageTranslation();
  return (
    <div className={isLoaded ? 'preLoaderWrapperHidden' : 'preLoaderWrapperVisible'}>
      <div id='loaderWrapper'>
        <div id='loader'>
          <div id='shadow'></div>
          <div id='box'></div>
          <h3 id='loaderHeading'>janhrdy.net</h3>
          {isLoadLong && <h3 id='loaderHeadingLong'>{t('tryToReload')}</h3>}
        </div>
        <h4 id='loaderSubHeading'>{t('loading')}...</h4>
      </div>
    </div>
  );
}

export default Loader;
