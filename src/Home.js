
import React, { Component } from 'react';
import { Link, Switch, Route, Router } from 'react-router-dom';
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
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 150
      }
    }
  }
}
const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  boundingBoxArray: [],
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ' '
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  calculatingResultLocation = (data) => {
    console.log(data)
    const { boundingBoxArray } = this.state;

    for (let i = 0; i < data.outputs[0].data.regions.length; i++) {
      this.state.boundingBoxArray.push(data.outputs[0].data.regions[i].region_info.bounding_box)

    }

    //DOM manipulation
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    let leftCol = [];
    let topRow = [];
    let rightCol = [];
    let bottomRow = [];

    for (let i = 0; i < boundingBoxArray.length; i++) {

      leftCol.push(boundingBoxArray[i].left_col * width);
      topRow.push(boundingBoxArray[i].top_row * height);
      rightCol.push(width - (boundingBoxArray[i].right_col * width));
      bottomRow.push(height - (boundingBoxArray[i].bottom_row * height))

    }

    return {
      leftCol: leftCol,
      topRow: topRow,
      rightCol: rightCol,
      bottomRow: bottomRow
    }


  }


  displayBox = (box_parameter) => {
    this.setState({ box: box_parameter })

  }


  // user changes the URL
  onInputChange = (event) => {
    this.setState({ input: event.target.value })

  }
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayBox(this.calculatingResultLocation(response)))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        {/*<Navigation />*/}
        <Greeting />
        <Rank />
        <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit} />
        <PredictionRestults box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
