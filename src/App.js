import { Header } from './components/Header';
import { Counter } from './components/Counter';

import './App.css';
import { CollapseText } from './components/CollapseText';
import { TimeCounter } from './components/TimeCounter';

function App(props) {
  return (
    <div className="App">
      <Header title="Hello from Header component" />
      <Counter start={10} />
      <Counter />
      <CollapseText toggleText="Open/Close">
        <TimeCounter />
      </CollapseText>
      {/* <CollapseText>
        Goodbye
      </CollapseText> */}

    </div>
  );
}

export default App;
