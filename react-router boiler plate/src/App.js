import React from 'react';
import Navigation from './Components/Navigation';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'
import './App.css';


export default function App() {
  return (
    <div>
      <h1>Hello World 🌎</h1>
      <Navigation></Navigation>
    </div>
  );
}
