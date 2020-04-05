// src/count-context.js
import React from 'react';

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

const initialTheme = (status = themeStatus.LIGHT) => ({ status });

function ThemeReducer(state, action) {
  switch (action.type) {
    case themeType.TOGGLE:
      return { status: state.status === themeStatus.LIGHT ? themeStatus.DARK : themeStatus.LIGHT };
    case themeType.LIGHT:
      return { status: themeStatus.LIGHT };
    case themeType.DARK:
      return { status: themeStatus.DARK };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children, theme }) {
  const initialThemeState = initialTheme(theme);
  const [state, dispatch] = React.useReducer(ThemeReducer, initialThemeState);

  return (
    <ThemeStateContext.Provider
      value={{
        ...state,
        isLightTheme: state.status === themeStatus.LIGHT,
        isDarkTheme: state.status === themeStatus.DARK,
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
