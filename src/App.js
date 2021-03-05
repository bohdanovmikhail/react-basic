import { Header } from './components/Header';
import { Counter } from './components/Counter';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header title="Hello from Header component" />
      <Counter start={10} />
      <Counter />
    </div>
  );
}

export default App;
