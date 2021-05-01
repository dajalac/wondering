import React from 'react';

const Greeting = ({user}) =>{
    return(
        <div className ='center f1'>
            <p>{`Hello, ${user.name}!`}</p>
        </div>
    )
}

export default Greeting