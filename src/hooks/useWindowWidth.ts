// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';

function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    // Handler to update width state
    const handleResize = () => setWidth(window.innerWidth);
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export { useWindowWidth };
