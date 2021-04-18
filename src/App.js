
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'

const particlesOptions = {
  particles: {
    number:{
      value:10,
      density:{
        enable : true,
        value_area: 150
      }
    }
  }
}

function App() {
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions}/>
      <Navigation/>
    </div>
  );
}

export default App;
