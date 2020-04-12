import React from 'react';

const Character = ({ character }) => {
  return (
    <article className='Character'>
      <p>{character.name}</p>
    </article>
  );
};

export default Character;
