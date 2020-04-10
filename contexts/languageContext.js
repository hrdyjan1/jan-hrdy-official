import React from 'react';
import { enhanceLocalStorage, localStorageType } from '../utils/localStorage';
import {
  languageStrings,
  languageStatus,
  initializeLanguage,
  languageReducerType,
  defaultLanguage,
} from '../config/translation';

const LanguageStateContext = React.createContext();
const LanguageDispatchContext = React.createContext();

function languageReducer(state, action) {
  switch (action.type) {
    case languageReducerType.TOGGLE:
      return {
        status:
          state.status === languageStatus.CZECH ? languageStatus.ENGLISH : languageStatus.CZECH,
      };
    case languageReducerType.CZECH:
      return { status: languageStatus.CZECH };
    case languageReducerType.ENGLISH:
      return { status: languageStatus.ENGLISH };
    default: {
      throw new Error(`Unhandled action type in LanguageReducer: ${action.type}`);
    }
  }
}

function LanguageProvider({ children, language }) {
  const [state, dispatch] = React.useReducer(languageReducer, initializeLanguage(language));

  const isCzechLanguage = state.status === languageStatus.CZECH;
  const isEnglishLanguage = state.status === languageStatus.ENGLISH;

  React.useEffect(() => {
    enhanceLocalStorage(localStorageType.LANGUAGE, state.status);
  }, [state.status]);

  return (
    <LanguageStateContext.Provider
      value={{
        ...state,
        isCzechLanguage,
        isEnglishLanguage,
        nextStatus: isCzechLanguage ? languageStatus.ENGLISH : languageStatus.CZECH,
      }}
    >
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageStateContext.Provider>
  );
}

function useLanguageState() {
  const context = React.useContext(LanguageStateContext);
  if (context === undefined) {
    throw new Error('useLanguageState must be used within a LanguageProvider');
  }
  return context;
}

function useLanguageDispatch() {
  const context = React.useContext(LanguageDispatchContext);
  if (context === undefined) {
    throw new Error('useLanguageDispatch must be used within a LanguageProvider');
  }
  return context;
}

function useLanguageMethod() {
  const dispatch = React.useContext(LanguageDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useLanguageDispatch must be used within a LLanguageProvider');
  }

  const toggle = React.useCallback(() => dispatch({ type: languageReducerType.TOGGLE }), [
    dispatch,
  ]);

  return { toggle };
}

function useComplexLanguageMethod() {
  const { status } = React.useContext(LanguageStateContext);

  const t = React.useCallback(
    (key) => {
      const currentLanguage = status;
      const translatedString = languageStrings[currentLanguage][key];
      if (!translatedString) {
        console.warn(`Translation '${key}' for currentLanguage '${currentLanguage}' not found.`);
      }
      return translatedString || languageStrings[defaultLanguage][key] || key || '';
    },
    [status]
  );
  return { t };
}

export {
  LanguageProvider,
  useLanguageState,
  useLanguageDispatch,
  useLanguageMethod,
  useComplexLanguageMethod,
};
