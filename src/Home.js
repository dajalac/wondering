
import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Greeting from './components/Greeting/Greeting';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkFrom'
import PredictionRestults from './components/PredictionResults/PredictionResults';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_KEY

});


const initialState = {
  input: '',
  imageUrl: '',
  box: {}, 
  boundingBoxArray: [],
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }


  calculatingResultLocation = (data) => {
    const { boundingBoxArray } = this.state;

    for (let i = 0; i < data.outputs[0].data.regions.length; i++) {
      this.state.boundingBoxArray.push(data.outputs[0].data.regions[i].region_info.bounding_box)

    }
    console.log('length ',this.state.boundingBoxArray.length)

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
    this.setState({boundingBoxArray: []})
    this.setState({ imageUrl: this.state.input });
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then (response => response.json())
    .then(response=> {
      if (response) {
        this.displayBox(this.calculatingResultLocation(response))
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.props.user.id,
            numberOfFace:this.state.boundingBoxArray.length
          })
        })
        .then (response => response.json())
        .then(data => {
          this.setState(Object.assign(this.props.user,{ranking:data[0]}))
          this.setState(Object.assign(this.props.user,{number_faces:data[1]}))
         
        })
        .catch( console.log)
      }
      
    })
    .catch(err => console.log(err))

  }


  render() {
    
    return (
      <div className='App'>
        <Greeting user ={this.props.user}/>
        <Rank ranking ={this.props.user.ranking} points ={this.props.user.number_faces} />
        <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit} />
        <PredictionRestults box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default Home;

