import { LanguageStringsKey } from '@/features/language/types';
import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';
import React from 'react';

interface Props {
  header: string;
  subHeader: string;
  renderBottom?: () => React.ReactNode;
  renderMiddle?: () => React.ReactNode;
}

function Intro({ header, subHeader, renderBottom = () => null, renderMiddle = () => null }: Props) {
  const { t } = useLanguageTranslation();

  return (
    <>
      <h1>{t(header as LanguageStringsKey)}</h1>
      {renderMiddle()}
      <div className='intro-section'>
        <h2>{t(subHeader as LanguageStringsKey)}</h2>
        {renderBottom()}
      </div>
    </>
  );
}

export default Intro;
