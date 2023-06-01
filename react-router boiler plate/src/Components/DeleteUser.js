import React from 'react'
import CreateUsers from './CreateUsers'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function DeleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
        method: 'DELETE'
      }).then(() => getUsers()) // will trigger re-render (update users after deleting user)
}

export default DeleteUser