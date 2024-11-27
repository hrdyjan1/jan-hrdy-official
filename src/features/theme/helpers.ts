// Add this at the top of your file to mark it as a client component
'use client';

import { createCtx } from '@/utils/createCtx';
import { ThemeAction, ThemeState } from './types';

const [useThemeState, StateProvider] = createCtx<ThemeState>();
const [useThemeAction, ActionProvider] = createCtx<ThemeAction>();

export { ActionProvider, StateProvider, useThemeAction, useThemeState };
