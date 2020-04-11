import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer, { enhancers } from '../../projects/kanban/reducers';
import CreateList from '../../projects/kanban/components/CreateList';
import ListsContainer from '../../projects/kanban/containers/ListsContainer';

const store = createStore(rootReducer, {}, enhancers);

const kanban = () => {
  return (
    <Provider store={store}>
      <div className='project-kanban'>
        <div className='Application'>
          <div>{/* Users will go here! */}</div>
          <section>
            <CreateList />
            <ListsContainer />
          </section>
        </div>
      </div>
    </Provider>
  );
};

export default kanban;
