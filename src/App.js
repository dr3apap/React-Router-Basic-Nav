import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => (
  <div>
    <Navigation />

    {/* <Route path="/About">  
    <h1>About</h1>;
        </Route>
    <Route path="/Contact"> <h1>Contact</h1></Route>   */}
    <Route exact path="/" > <Home/></Route>
    <Route path="/About"><About/></Route>
    <Route path="/Contact"><Contact/></Route>
    </div>
);

export default App;
