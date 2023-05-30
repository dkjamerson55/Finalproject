import React from 'react'
import CreateUsers from './CreateUser'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function DeleteUser(props, id) {
    fetch(`${props.MOCK_API_URL}/${id}`, {
        method: 'DELETE'
      }).then(() => props.getUsers()) // will trigger re-render (update users after deleting user)
    return(
        <Router>
            <CreateUsers DeleteUser={DeleteUser}/>
        </Router>
    )
}

export default DeleteUser