import React from 'react';
import './PredictionResults.css'

const PredictionRestults =({box,imageUrl})=>{
   
    //console.log('inside pred compo',box.leftCol[1] )
    let elements = [];
    if (Object.keys(box).length > 0) {

        for (let i = 0; i < box.leftCol[i]; i++) {
            elements.push(<div key={i} className='bounding-box'
                          style={{ top: box.topRow[i], right: box.rightCol[i],
                           bottom: box.bottomRow[i], left: box.leftCol[i] }}>
                      </div>)
        }
    }
 
   
    return (
        <div className='center ma'>
            <div className='absolute mts'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'></img>
                <div >{elements}</div>
            </div>
        </div>
    )

}

export default PredictionRestults