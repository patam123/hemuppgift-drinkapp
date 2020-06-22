import React from 'react';
import {NavLink} from "react-router-dom";
import "../design/header.css"

const Header = () => {


    return (
        <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        </header>
    );
}

export default Header;