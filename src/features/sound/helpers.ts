// Add this at the top of your file to mark it as a client component
'use client';

import { createCtx } from '@/utils/createCtx';
import { SoundAction, SoundState } from './types';

const [useSoundState, StateProvider] = createCtx<SoundState>();
const [useSoundAction, ActionProvider] = createCtx<SoundAction>();

export { ActionProvider, StateProvider, useSoundAction, useSoundState };
