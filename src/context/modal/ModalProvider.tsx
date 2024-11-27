// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import { ActionProvider, StateProvider, useModalAction, useModalState } from './helpers';
import { initialModalState } from './initialModalState';
import { ModalState } from './types';

function ModalProvider({ children }: React.PropsWithChildren) {
  const [state, setState] = React.useState(initialModalState);

  const show = (status: ModalState['status']) => {
    setState({ ...state, status, visibility: 'VISIBLE' });
  };

  const hide = () => {
    setState({ ...state, visibility: 'HIDDEN' });
  };

  return (
    <StateProvider value={state}>
      <ActionProvider value={{ show, hide }}>{children}</ActionProvider>
    </StateProvider>
  );
}

export { ModalProvider, useModalAction, useModalState };
