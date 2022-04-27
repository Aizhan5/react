import logo from './logo.svg';
import './App.css';

import Lightbulb from './components/lightbulb';
import Switch from './components/switch';

function App() {
  const [state, setState] = useState('off')

  return (
    <div>
      <Ligthbulb toggleState={state}/>
      <Switch toggleState={state} setToggle={setState}/>
    </div>
  );
}

export default App;
