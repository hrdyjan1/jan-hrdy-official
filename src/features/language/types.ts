import { EmptyFunction } from '@/types/EmptyFunction';
import { languageStatus, languageStrings } from './translations';

export type LanguageState = {
  language: keyof typeof languageStatus;
};

export type LanguageAction = {
  toggle: EmptyFunction;
};


export type LanguageStringsKey = keyof (typeof languageStrings)[keyof typeof languageStrings]