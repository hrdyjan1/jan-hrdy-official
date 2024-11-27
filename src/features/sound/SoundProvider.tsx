// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import { ActionProvider, StateProvider, useSoundAction, useSoundState } from './helpers';
import { Storage } from '@/utils/localStorage';
import { useOnMount } from '@/hooks/useOnMount';
import { SoundState } from './types';

interface Props extends React.PropsWithChildren {
  status: 'ON' | 'OFF' | null;
}

const soundStatus = {
  ON: 'ON',
  OFF: 'OFF',
} as const;

function SoundProvider({ children, status }: Props) {
  const [state, setState] = React.useState<SoundState>({
    status: status ? soundStatus[status] : soundStatus.ON,
  });

  useOnMount(() => Storage.setItem(Storage.key.SOUND, state.status));

  const toggle = () =>
    setState((prev) => ({
      ...prev,
      status: prev.status === 'ON' ? 'OFF' : 'ON',
    }));

  return (
    <StateProvider value={state}>
      <ActionProvider value={{ toggle }}>{children}</ActionProvider>
    </StateProvider>
  );
}

export { soundStatus, SoundProvider, useSoundAction, useSoundState };
