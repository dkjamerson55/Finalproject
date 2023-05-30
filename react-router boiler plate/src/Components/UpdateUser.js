import React, {useState} from 'react'
import CreateUsers from './CreateUser'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function UpdateUser(props,e, userObject) {
    // e.preventDefault()

    const [updatedUser, setUpdatedUser] = useState('')
    const [updatedMyPet, setUpdatedMyPet] = useState('')

    

    //object variable that spreads out exising key value pairs, then updates name with whatever variables are input.
    let updatedUserObject = {
        ...userObject,
        user: updatedUser,
        mypet: updatedMyPet
    }

    fetch(`${props.MOCK_API_URL}/${userObject.id}`,{
        method: 'PUT',
        body: JSON.stringify({updatedUserObject}),
        headers: {"Content-Type": "application/json"}
      }).then(() => props.getUsers())
  return (
    <Router>
      <CreateUsers setUpdatedUser={setUpdatedUser} setUpdatedMyPet={setUpdatedMyPet}/>
    </Router>
  )
}

export default UpdateUser