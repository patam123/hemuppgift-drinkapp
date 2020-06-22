import React from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import "../design/header.css"

const Header = () => {


    return (
        <header>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        </header>
    );
}

export default Header;