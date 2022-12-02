import './App.css';

import Firstcomponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment  from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <Firstcomponent/>
      <AnotherComponent/>
      <Images/>
      <Hooks />
      <List />
      <RenderCond x={10} y={8}/>
      <Fragment />
      <Container>
          <h2>Este é um elemento filho do container</h2>
      </Container>
    </div>
  );
}

export default App;
