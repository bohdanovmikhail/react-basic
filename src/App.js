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
      {/* <CollapseText toggleText="Open/Close">
        <div>
          Hello from div1
        </div>
        <div>
          Hello from div2
        </div>
      </CollapseText> */}
      {/* <CollapseText>
        Goodbye
      </CollapseText> */}

      <TimeCounter />
    </div>
  );
}

export default App;
