
import React, { useState , useEffect} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Greeting from './components/Greeting/Greeting';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkFrom'
import PredictionRestults from './components/PredictionResults/PredictionResults';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY 

});

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

  // states
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // user changes the URL
  const onInputChange =(event) =>{
    setInput (event.target.value);
  }

  const onButtonSubmit = ()=>{
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(
        function(response){
          console.log(response)
        },
        function(err){}
      )

  }
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions}/>
      <Navigation/>
      <Greeting/>
      <Rank/>
      <ImageLinkForm inputChange ={onInputChange} buttonSubmit ={onButtonSubmit}/>
      <PredictionRestults imageUrl ={imageUrl}/>
    </div>
  );
}

export default App;
