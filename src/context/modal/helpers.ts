// Add this at the top of your file to mark it as a client component
'use client';

import { createCtx } from '@/utils/createCtx';
import { ModalAction, ModalState } from './types';

const [useModalState, StateProvider] = createCtx<ModalState>();
const [useModalAction, ActionProvider] = createCtx<ModalAction>();

export { ActionProvider, StateProvider, useModalAction, useModalState };
