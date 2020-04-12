import { combineReducers } from 'redux';
import { FETCH_CHARACTERS_FULFILLED } from './actions';

const charactersReducer = (characters = [], action) => {
  if (action.type === FETCH_CHARACTERS_FULFILLED) {
    return action.payload.characters;
  }

  return characters;
};

export default combineReducers({
  characters: charactersReducer,
});
