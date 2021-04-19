
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Greeting from './components/Greeting/Greeting';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkFrom'


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
      <Greeting/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
