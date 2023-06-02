import React, {useState, useEffect} from 'react'

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import {
  Card,
  CardSubtitle,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap"

function CreateUsers() {
  const MOCK_API_URL = "https://64412ead792fe886a8a09b3d.mockapi.io/wk12API/users"
 
  const [users, setUsers] = useState([{
    name: '',
    mypet: '',
    avatar: '',
  }])
   //variables for holding new information in state
   const [newUser, setNewUser] = useState('')
   const [newMyPet, setNewMyPet] = useState ('')
   const [updatedUser, setUpdatedUser] = useState('')
   const [updatedMyPet, setUpdatedMyPet] = useState('')
  
  useEffect(() => {
    fetch(MOCK_API_URL)
    .then(data => data.json()) 
    // .then((data) => console.log(data)) shows mockAPI [data]
    .then(data => setUsers(data))
  }, []) // empty array ensures that re-render is only handled once instead of an infinite loop

  //get function to retrieve and covert data to json
  const getUsers = () => {
    fetch(MOCK_API_URL)
    .then(data => data.json()) // converting data to json
    .then(data => setUsers(data)) // setting users equal to the data
  }

  function DeleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
        method: 'DELETE'
      }).then(() => getUsers()) // will trigger re-render (update users after deleting user)
}

  
  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent reload
    let data = {
      //key value pairs
      name: newUser, 
      mypet: newMyPet, 
      // MOCK_API_URL: [],
    }

    

    // used to retrieve data from api before posting new data and retrieving new state
    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"}, //helps back-end read the data
      body: JSON.stringify(data), 

    }).then(() => getUsers())
  }

  function updateUser(e, userObject) {
    e.preventDefault()

    //object variable that spreads out exising key value pairs, then updates name with whatever variables are input.
    let updatedUserObject = {
        ...userObject,
        user: updatedUser,
        mypet: updatedMyPet
    }

    fetch(`${MOCK_API_URL}/${userObject.id}`,{
        method: 'PUT',
        body: JSON.stringify({updatedUserObject}),
        headers: {"Content-Type": "application/json"}
      }).then(() => getUsers())
  
}

  // connecting to the post & update methods
  return(
    
    <div className="User-App">
      <Card key={root}>
        <CardBody>
          <form>
            <div className='user-form'>
                <h2 className='user-title'>New User Form</h2>
                  <div>
                    <label><h3>User: </h3></label>
                    <input onChange={(e) => setNewUser(e.target.value)}></input> <br></br>
                    {/* takes an event and setting updated name variable to equal that event */}
                    <label><h3>Pet: </h3></label>
                    <input onChange={(e) => setNewMyPet(e.target.value)}></input> <br></br>
                    <button className='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
                  </div>
            </div> 
          </form> 
        </CardBody>
    </Card>
      
    
      {users.map((user, index) => (
        <Card key={index} className='card'>
          <CardBody>
              <div className='userContainer'>
                <div className='user-list'>
                    <CardSubtitle><h3>Name: {user.name}</h3></CardSubtitle>
                    <h3>Pet: {user.mypet}</h3><br></br>
                    <CardImg
                      className='avatar'
                      src={user.avatar}
                      style={{width: 120, height: 140}}
                      alt='user avatar'
                    />
                    <button className='delete' onClick={() => DeleteUser(user.id)}>Delete 🗑</button>
                </div> 
                <form>
                  <div className='update-form'>
                      <h4>Update This User</h4> 
                      <label>Update User Name: </label> <br/>
                      <input onChange={(e) => setUpdatedUser(e.target.value)}></input> <br></br>

                      <label>Update Pet: </label> <br/>
                      <input onChange={(e) => setUpdatedMyPet(e.target.value)}></input> <br></br>

                      <button className='update' onClick={(e) => updateUser(e, user)}>Update</button>
                      
                  </div>
                </form>
              </div>
          </CardBody>
        </Card>
      ))}
    </div>
  )  
}

export default CreateUsers