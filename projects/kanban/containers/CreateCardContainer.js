import CreateCard from '../components/CreateCard';
import { connect } from 'react-redux';
import { createCard } from '../actions/card-actions';

const mapDispatchToProps = { createCard };

export default connect(null, mapDispatchToProps)(CreateCard);
