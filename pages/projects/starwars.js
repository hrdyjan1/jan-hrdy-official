import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import FetchCharacters from '../../projects/starwars/FetchCharacters';
import Characters from '../../projects/starwars/Characters';
import reducer from '../../projects/starwars/reducer';
import fetchCharactersEpic from '../../projects/starwars/fetchCharactersEpic';

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(fetchCharactersEpic)

const kanban = () => {
  return (
    <Provider store={store}>
      <div className='project-starwars'>
        <h1>Star Wars Autocomplete</h1>
        <FetchCharacters />
        <Characters />
      </div>
    </Provider>
  );
};

export default kanban;
