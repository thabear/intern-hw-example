import {connect} from 'react-redux';
import ACTIONS from './action.js';
import App from './App.js';

const mapStateToProps = state => ({
  nameList: state.nameList,
  highestIndex: state.highestIndex,
  quote: state.quote
});

const mapDispatchToProps = dispatch => ({
  doneItem: (itemId) => dispatch(ACTIONS.doneItem(itemId)),
  addItem: (newNameList, newIndex) => dispatch(ACTIONS.addItem(newNameList, newIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);