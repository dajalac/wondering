import React from 'react';

const Rank = ({user})=>{
    
    let ranking = 0;
    if(user.ranking){
        ranking = user.ranking
    }

    return(
        <div className='center f3'>
            {`Ranking: ${ranking}`}
            {' '}
            {`Points: ${user.number_faces}`}
        </div>

    )
}

export default Rank;