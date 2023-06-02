import React, {useState, useEffect}from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import CreateUsers from './Components/CreateUsers';
import Posts from './Components/Posts';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className='container'>
        <h1>Hello World 🌎</h1>
        <Navbar/>
        <hr />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users' render={() => <CreateUsers/>}/>
          <Route path='/posts' render={() => <Posts/>}/>
        </Switch>
      </div>
    </Router>
    
    
  );
}
