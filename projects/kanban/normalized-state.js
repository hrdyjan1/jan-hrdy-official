import { schema, normalize } from 'normalizr';
import defaultState from './default-state';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignedTo: user });
const list = new schema.Entity('lists', {
  cards: [card],
});

const normalizedLists = normalize(defaultState.lists, [list]);
const normalizedUsers = normalize(defaultState.users, [user]);

const users = {
  entities: normalizedUsers.entities.users,
  results: normalizedUsers.result,
};

const cards = {
  entities: normalizedLists.entities.cards,
  results: Object.keys(normalizedLists.entities.cards),
};

console.log('cards', cards)
const lists = {
  entities: normalizedLists.entities.lists,
  results: normalizedLists.result,
};

export { cards, lists, users };
export default {
  users,
  lists,
  cards,
};
