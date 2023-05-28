import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/Users';
import Posts from './Components/Posts';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className='container'>
        <h1>Hello World 🌎</h1>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <li><Link to ={'/'} className='nav-link'>Home</Link></li>
            <li><Link to ={'/users'} className='nav-link'>Users</Link></li>
            <li><Link to ={'/posts'} className='nav-link'>Posts</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users' component={Users}/>
          <Route path='/posts' component={Posts}/>
        </Switch>
      </div>
    </Router>
    
  );
}
