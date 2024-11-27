// Add this at the top of your file to mark it as a client component
'use client';

import { createCtx } from '@/utils/createCtx';
import { LanguageAction, LanguageState } from './types';

const [useLanguageState, StateProvider] = createCtx<LanguageState>();
const [useLanguageAction, ActionProvider] = createCtx<LanguageAction>();

export { ActionProvider, StateProvider, useLanguageAction, useLanguageState };
