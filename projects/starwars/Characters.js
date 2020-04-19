import React from 'react';

import Character from './Character';
import { fetchCharacters } from './actions';
import { connect } from 'react-redux';

const Characters = ({ characters = [] }) => (
  <section className='Characters'>
    {characters.map((character) => (
      <Character key={character.id} character={character} />
    ))}
  </section>
);

export default connect(({ characters }) => ({ characters }))(Characters);
