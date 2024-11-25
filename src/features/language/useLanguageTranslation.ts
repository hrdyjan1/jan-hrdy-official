// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import { useLanguageState } from './helpers';
import { defaultLanguage, languageStrings } from './translations';
import { LanguageStringsKey } from './types';

function useLanguageTranslation() {
  const { language } = useLanguageState();

  const t = React.useCallback(
    (key: LanguageStringsKey) => {
      const translatedString = languageStrings?.[language ?? defaultLanguage]?.[key];

      if (!translatedString) {
        console.warn(`Translation '${key}' for currentLanguage '${language}' not found.`);
      }

      return translatedString || key || '';
    },
    [language]
  );

  return { t };
}

export { useLanguageTranslation };
