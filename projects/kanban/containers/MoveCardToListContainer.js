import { connect } from 'react-redux';
import { moveCardToList } from '../actions/card-actions';
import MoveCardToListComponent from '../components/MoveCardToList';
import { createSelector } from 'reselect';

const getListEntities = (state) => state.lists.entities;
const getLists = createSelector([getListEntities], (lists) => {
  return Object.values(lists);
});

const mapStateToProps = (state) => {
  return { lists: getLists(state) };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    moveCardToList(event) {
      const destinationListId = event.target.value;
      dispatch(moveCardToList(props.cardId, props.listId, destinationListId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveCardToListComponent);
