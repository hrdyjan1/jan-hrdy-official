// Add this at the top of your file to mark it as a client component
'use client';

import { useEffect, useRef } from 'react';

function useOnMount(callback: () => void) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current === false) {
      callback();
      didMountRef.current = true;
    }

    return () => {
      didMountRef.current = false;
    };
  }, [callback]);
}

export { useOnMount };
