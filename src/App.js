import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Header from "./components/header";



const routes = (
  <BrowserRouter>
  <Header/>
  <Switch>
  <Route exact={true} path="/" component={Home}/>
  <Route path="/explore" component={Explore}/>
  </Switch>
  </BrowserRouter>
  );

const App = () => {
  return (
    <div className="App">
    {routes}
    </div>
  );
}

export default App;
