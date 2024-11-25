// Add this at the top of your file to mark it as a client component
'use client';

import { isDefined } from '@/constants/isDefined';
import React from 'react';

function createCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!isDefined(c)) {
      throw new Error('useCtx must be inside a Provider with a value');
    }
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export { createCtx };
