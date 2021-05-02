import React from 'react';

const Rank = ({ranking, points})=>{
   
    return(
        <div className='center f3'>
            {`Ranking: ${ranking}`}
            {' '}
            {`Points: ${points}`}
        </div>

    )
}

export default Rank;