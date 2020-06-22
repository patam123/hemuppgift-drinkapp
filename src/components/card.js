import React from "react";
import "../design/card.css"
import {Link} from "react-router-dom";

const Card = ({name, image}) => {
    return(
        <Link to="/">
        <div id="card">
        <p>{name}</p>
        <img src={image} alt={name}></img>
        </div>
        </Link>
    ); 
}

export default Card;