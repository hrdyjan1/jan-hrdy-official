import React from 'react';

export const Menu = () => {
  return (
    <div>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <a href='/non-existing'>Non Existing Page</a>
      </nav>
    </div>
  );
};
