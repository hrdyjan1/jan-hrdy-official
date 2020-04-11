import CreateCard from '../components/CreateCard';
import { connect } from 'react-redux';

const defaultCardData = {
  title: '',
  description: '',
  assignedTo: '',
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard(listId, cardData) {
      const cardId = Date.now().toString();
      const card = {
        id: cardId,
        ...defaultCardData,
        ...cardData,
      };
      dispatch({ type: 'CARD_CREATE', payload: { card, listId, cardId } });
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateCard);
