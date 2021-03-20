import { connect } from 'react-redux';

import './App.css';
import { inputChange, inputClear } from './store/inputData/actions';
import { usersLoad } from './store/users/actions';

function App(props) {
  return (
    <div className="App">
      <div>{props.inputValue}</div>
      <input
        value={props.inputValue}
        onChange={event => props.change(event.target.value)}
      />

      <button onClick={props.clear}>Clear input</button>
      <button onClick={props.load}>Load users</button>
    </div>
  );
}

const mapState = state => ({
  inputValue: state.inputData,
});

// const mapDispatch = dispatch => ({
//   change: value => dispatch(inputChange(value)),
//   clear: () => dispatch(inputClear()),
// });

const mapDispatchObj = {
  change: inputChange,
  clear: inputClear,
  load: usersLoad,
};

export default connect(mapState, mapDispatchObj)(App);