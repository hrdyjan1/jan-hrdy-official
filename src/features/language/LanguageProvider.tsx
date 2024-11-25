// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import { ActionProvider, StateProvider, useLanguageAction, useLanguageState } from './helpers';
import { defaultLanguage, languageStatus, languageStrings } from './translations';
import { Storage } from '@/utils/localStorage';
import { LanguageState } from './types';

interface Props extends React.PropsWithChildren {
  language: keyof typeof languageStatus;
}

function LanguageProvider({ children, language }: Props) {
  const [state, setState] = React.useState<LanguageState>({
    language: Object.keys(languageStrings).includes(language) ? language : defaultLanguage,
  });

  React.useEffect(() => {
    Storage.setItem(Storage.key.LANGUAGE, state.language);
  }, [state.language]);

  const toggle = () =>
    setState((prev) => ({ ...prev, language: prev.language === 'ENGLISH' ? 'CZECH' : 'ENGLISH' }));

  return (
    <StateProvider value={state}>
      <ActionProvider value={{ toggle }}>{children}</ActionProvider>
    </StateProvider>
  );
}

export { LanguageProvider, useLanguageAction, useLanguageState };
