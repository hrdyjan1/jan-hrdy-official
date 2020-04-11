import { combineReducers, compose } from 'redux';
import listReducer from './list-reducer';
import cardReducer from './card-reducer';

const reduxDevtools =
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const enhancers = compose(reduxDevtools);

export default combineReducers({ lists: listReducer, cards: cardReducer });
export { enhancers };
