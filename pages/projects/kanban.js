import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer, { enhancers } from '../../projects/kanban/reducers';
import ListsContainer from '../../projects/kanban/containers/ListsContainer';
import CreateListContainer from '../../projects/kanban/containers/CreateListContainer';

const store = createStore(rootReducer, {}, enhancers);

const kanban = () => {
  return (
    <Provider store={store}>
      <div className='project-kanban'>
        <div className='Application'>
          <div>{/* Users will go here! */}</div>
          <section>
            <CreateListContainer />
            <ListsContainer />
          </section>
        </div>
      </div>
    </Provider>
  );
};

export default kanban;
