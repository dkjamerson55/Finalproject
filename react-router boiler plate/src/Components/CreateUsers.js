import React, {useState} from 'react'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import {
  Card,
  CardSubtitle,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap"

function CreateUsers(props) {
  //calling props for using useState to set and fetch a value in jsx
  props.users
  props.MOCK_API_URL

  //variables for holding new information in state
  const [newUser, setNewUser] = useState('')
  const [newMyPet, setNewMyPet] = useState ('')
  // const [newAvatar, setNewAvatar]= useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent reload
    let data = {
      //key value pairs
      name: newUser, 
      artist: newMyPet, 
      // MOCK_API_URL: [],
      
    }

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"}, //helps back-end read the data
      body: JSON.stringify(data), 

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
      
    
      {props.users.map((user, index) => (
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
                      <input onChange={(e) => props.setUpdatedUser(e.target.value)}></input> <br></br>

                      <label>Update Pet: </label> <br/>
                      <input onChange={(e) => props.setUpdatedMyPet(e.target.value)}></input> <br></br>

                      <button className='update' onClick={(e) => UpdateUser(e, user)}>Update</button>
                      
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