import React from 'react';


const Drink = ({name, image, description}) => {
    return(
        <div >
        <p>{name}</p>
        <img src={image} alt={name}></img>
        </div>
    );
}

export default Drink;