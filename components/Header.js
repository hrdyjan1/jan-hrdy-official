import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/long'>
          <a>Long</a>
        </Link>
      </nav>
    </div>
  );
};
