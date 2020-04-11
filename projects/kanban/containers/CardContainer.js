import { connect } from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = (state, props) => {
  return {
    card: state.cards.entities[props.cardId],
  };
};

export default connect(mapStateToProps)(Card);
