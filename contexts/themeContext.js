// src/count-context.js
import React from 'react';
import { enhanceLocalStorage, localStorageType } from '../utils/localStorage';

const ThemeStateContext = React.createContext();
const ThemeDispatchContext = React.createContext();

const themeType = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  TOGGLE: 'TOGGLE',
};

const themeStatus = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const initialTheme = (status) => ({
  status: themeStatus[status] || themeStatus.LIGHT,
});

function ThemeReducer(state, action) {
  switch (action.type) {
    case themeType.TOGGLE:
      return { status: state.status === themeStatus.LIGHT ? themeStatus.DARK : themeStatus.LIGHT };
    case themeType.LIGHT:
      return { status: themeStatus.LIGHT };
    case themeType.DARK:
      return { status: themeStatus.DARK };
    default: {
      throw new Error(`Unhandled action type ThemeReducer: ${action.type}`);
    }
  }
}

function ThemeProvider({ children, theme }) {
  const initialThemeState = initialTheme(theme);
  const [state, dispatch] = React.useReducer(ThemeReducer, initialThemeState);

  const isLightTheme = state.status === themeStatus.LIGHT;
  const isDarkTheme = state.status === themeStatus.DARK;
  const nextStatus = isLightTheme ? themeStatus.DARK : themeStatus.LIGHT;

  // Handle CSS body property of THEME, but lower
  React.useEffect(() => {
    const bodyClassList = document.body.classList;
    const nextStatusLower = nextStatus.toLowerCase();
    const statusLower = state.status.toLowerCase();

    if (bodyClassList.contains(nextStatusLower)) {
      bodyClassList.replace(nextStatusLower, statusLower);
    } else if (!bodyClassList.contains(statusLower)) {
      bodyClassList.add(statusLower);
    }
  }, [state.status]);

  React.useEffect(() => {
    enhanceLocalStorage(localStorageType.THEME, state.status);
  }, [state.status]);

  return (
    <ThemeStateContext.Provider
      value={{
        ...state,
        isLightTheme,
        isDarkTheme,
        nextStatus,
      }}
    >
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
}

function useThemeDispatch() {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
}

function useThemeMethod() {
  const dispatch = React.useContext(ThemeDispatchContext);

  const toggle = React.useCallback(() => dispatch({ type: themeType.TOGGLE }), [dispatch]);

  if (dispatch === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return { toggle };
}

export { ThemeProvider, useThemeState, useThemeDispatch, useThemeMethod };
