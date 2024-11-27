// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import { ThemeState } from './types';
import { ActionProvider, StateProvider, useThemeAction, useThemeState } from './helpers';
import { Storage } from '@/utils/localStorage';

interface Props extends React.PropsWithChildren {
  status: 'LIGHT' | 'DARK' | null;
}

const themeStatus = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const;

function ThemeProvider({ children, status }: Props) {
  const [state, setState] = React.useState<ThemeState>({
    status: status ? themeStatus[status] : themeStatus.LIGHT,
  });

  // Handles light/dark theme
  React.useEffect(() => {
    const nextStatus = state.status === 'LIGHT' ? themeStatus.DARK : themeStatus.LIGHT;

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
    Storage.setItem(Storage.key.THEME, state.status);
  }, [state.status]);

  const toggle = () =>
    setState((prev) => ({
      ...prev,
      status: prev.status === 'DARK' ? 'LIGHT' : 'DARK',
    }));

  return (
    <StateProvider value={state}>
      <ActionProvider value={{ toggle }}>{children}</ActionProvider>
    </StateProvider>
  );
}

export { themeStatus, ThemeProvider, useThemeState, useThemeAction };
