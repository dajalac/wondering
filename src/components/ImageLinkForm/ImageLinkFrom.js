import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({inputChange, buttonSubmit })=>{
    return(
      <div>
          <p className = 'f3 center'>
              {'Past the URL of an image and see the magic!'}
          </p>
          <div className='center'>
          <div className = 'form center pa4 br3 shadow-5'>
              <input className='pa2 w-70 fa4 center' type ='text' onChange={inputChange}></input>
              <button className='w-30 grow f4 link ph3 pv2 dib white bg-green 'onClick={buttonSubmit}>Detect</button>
          </div>
          </div>
          

      </div>
    )
}

export default ImageLinkForm; 