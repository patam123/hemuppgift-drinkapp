import React from 'react';
import "../design/home.css"
import Header from "../components/header";
import Image from "../images/cocktail.png";

const Home = () => {

    return (
        <div id="home">
        <h1>Welcome to the Cocktail Explorer</h1>
        <img src={Image} alt="cocktails"></img>
        </div>
        );
}

export default Home;