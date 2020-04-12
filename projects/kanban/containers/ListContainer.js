import { connect } from 'react-redux';
import List from '../components/List';
import { removeList } from '../actions/list-actions';

const mapStateToProps = (state, props) => {
  return { list: state.lists.entities[props.listId] };
};

const mapDispatchToProps = {
  removeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
