import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/spinner'>
          <a>Spinner</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/root'>
          <a>Root</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
