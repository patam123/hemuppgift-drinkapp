import React from "react";
import "../design/card.css"
import {Link, useHistory} from "react-router-dom";

const Card = ({name, image, description}) => {
    const history = useHistory();

    const showDrink = () =>{
        history.push(`/explore/${name}`);
    }
    const linkObj = {
        pathname: name,
        image: image,
        description: description
    }

    return(
        <div>
        <Link to={linkObj} onClick={() => showDrink()}>
        <div id="card">
        <p>{name}</p>
        <img src={image} alt={name}></img>
        </div>
        </Link>
        </div>

    ); 
}

export default Card;