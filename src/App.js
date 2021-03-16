import { connect } from 'react-redux';

import { Header } from './components/Header';
import { Counter } from './components/Counter';

import './App.css';
import { CollapseText } from './components/CollapseText';
import { TimeCounter } from './components/TimeCounter';
import Counter2 from './components/Counter2';

function App(props) {
  return (
    <div className="App">
      <div>Counter Data: {props.counterData}</div>
      <Counter2 />
      {/* <Header title="Hello from Header component" /> */}
      {/* <Counter start={10} /> */}
      {/* <Counter /> */}
      {/* <CollapseText toggleText="Open/Close">
        <TimeCounter />
      </CollapseText> */}
      {/* <CollapseText>
        Goodbye
      </CollapseText> */}

    </div>
  );
}

const mapState = state => ({
  counterData: state.counter,
});

export default connect(mapState)(App);
