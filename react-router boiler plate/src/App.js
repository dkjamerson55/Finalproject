import React, {useState, useEffect}from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import CreateUsers from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';
import DeleteUser from './Components/DeleteUser';
import Posts from './Components/Posts';
import './App.css';


export default function App() {
  const MOCK_API_URL = "https://64412ead792fe886a8a09b3d.mockapi.io/wk12API/users"
  const [users, setUsers] = useState([{
    name: '',
    mypet: '',
    avatar: '',
  }])
  
  useEffect(() => {
    fetch(MOCK_API_URL)
    .then(data => data.json()) 
    // .then((data) => console.log(data)) shows mockAPI [data]
    .then(data => setUsers(data))
  }, []) // empty array ensures that re-render is only handled once instead of an infinite loop

  const getUsers = () => {
    fetch(MOCK_API_URL)
    .then(data => data.json()) // converting data to json
    .then(data => setUsers(data)) // setting users equal to the data
  }
  return (
    <Router>
      <div className='container'>
        <h1>Hello World 🌎</h1>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <li><Link to ={'/'} className='nav-link' style={{textDecoration: 'none'}}>Home</Link></li>
            <li><Link to ={'/users'} className='nav-link' style={{textDecoration: 'none'}}>Users</Link></li>
            <li><Link to ={'/posts'} className='nav-link' style={{textDecoration: 'none'}}>Posts</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users' component={CreateUsers}/>
          <Route path='/posts' component={Posts}/>
        </Switch>
      </div>

      <CreateUsers users = {users} MOCK_API_URL={MOCK_API_URL} getUsers={getUsers}/>
      <UpdateUser MOCK_API_URL={MOCK_API_URL} getUsers={getUsers}/>
      <DeleteUser MOCK_API_URL={MOCK_API_URL} getUsers={getUsers}/>
    </Router>
    
    
  );
}
