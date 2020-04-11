import { connect } from "react-redux"
import List from "../components/List"

const mapStateToProps = (state, props) => {
    return { list: state.lists.entities[props.listId]}
}

export default connect(mapStateToProps)(List)