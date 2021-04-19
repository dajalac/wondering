import React from 'react';

const PredictionRestults =({imageUrl})=>{

    return(
        <div className = 'center ma'>
        <div className ='absolute mts'>
            <img id ='inputImage' alt ='' src={imageUrl} width= '500px' height='auto'></img>
        </div>
    </div>
    )

}

export default PredictionRestults