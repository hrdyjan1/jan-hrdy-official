// src/count-context.js
import React from 'react';
import { enhanceLocalStorage, localStorageType } from '../utils/localStorage';

const LanguageStateContext = React.createContext();
const LanguageDispatchContext = React.createContext();

const languageType = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH',
  TOGGLE: 'TOGGLE',
};

const languageStatus = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH',
};

const initialLanguage = (status) => ({
  status: languageStatus[status] || languageStatus.CZECH,
});

function languageReducer(state, action) {
  switch (action.type) {
    case languageType.TOGGLE:
      return {
        status:
          state.status === languageStatus.CZECH ? languageStatus.ENGLISH : languageStatus.CZECH,
      };
    case languageType.CZECH:
      return { status: languageStatus.CZECH };
    case languageType.ENGLISH:
      return { status: languageStatus.ENGLISH };
    default: {
      throw new Error(`Unhandled action type in LanguageReducer: ${action.type}`);
    }
  }
}

function LanguageProvider({ children, language }) {
  const [state, dispatch] = React.useReducer(languageReducer, initialLanguage(language));

  const isCzechLanguage = state.status === languageStatus.CZECH;
  const isEnglishLanguage = state.status === languageStatus.ENGLISH;

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
  const state = React.useContext(LanguageStateContext);

  const toggle = React.useCallback(() => dispatch({ type: languageType.TOGGLE }), [dispatch]);
  const toggleComplex = React.useCallback(() => {
    enhanceLocalStorage(localStorageType.LANGUAGE, state.nextStatus);
    toggle();
  }, [toggle, state.status]);

  if (dispatch === undefined) {
    throw new Error('useLanguageDispatch must be used within a LLanguageProvider');
  }
  return { toggleComplex, toggle };
}

export { LanguageProvider, useLanguageState, useLanguageDispatch, useLanguageMethod };
