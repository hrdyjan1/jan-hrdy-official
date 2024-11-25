import { EmptyFunction } from '@/types/EmptyFunction';

export type ThemeState = {
  status: 'LIGHT' | 'DARK';
};

export type ThemeAction = {
  toggle: EmptyFunction;
};
