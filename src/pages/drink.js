import React from 'react';


const Drink = (props) => {
    return(
        <div >
        <p>{props.match.params.name}</p>
        <p>{props.location.description}</p>
        <img src={props.location.image} alt={props.match.params.name}></img>
        </div>
    );
}

export default Drink;