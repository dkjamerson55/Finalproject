import React, {useState} from 'react'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'

function CreateUsers(props) {
  //calling props for using useState to set and fetch a value in jsx
  props.users
  props.MOCK_API_URL

  //variables for holding new information in state
  const [newUser, setNewUser] = useState('')
  const [newMyPet, setNewMyPet] = useState ('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent reload
    let data = {
      //key value pairs
      name: newUser, 
      artist: newMyPet, 
      
    }

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"}, //helps back-end read the data
      body: JSON.stringify(data), 

    }).then(() => props.getUsers())
  }

  // connecting to the post & update methods
  return(
    <div className="User-App">
      <form>
        <div className='User-form'>
            <h3>New User Form</h3>
            <label>User</label> <br/>
            <input onChange={(e) => setNewUser(e.target.value)}></input> <br></br>
            {/* takes an event and setting updated name variable to equal that event */}
            <label>Pet</label> <br/>
            <input onChange={(e) => setNewMyPet(e.target.value)}></input> <br></br>
            <label className='pet-type'>My pet:</label> <br></br> 
            <button className='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </form>
      
    
      {props.users.map((user, index) => (
        <div key={index} className='userContainer'>
          <div className='user-list'>
              Name: {user.name} <br></br>
              Pet: {user.mypet}<br></br>
              <button onClick={() => DeleteUser(user.id)}>Delete 🗑</button>
          </div> 
          <form>
            <div className='update-form'>
                <h3>Update This User</h3>
                <label>Update User Name</label>
                <input onChange={(e) => props.setUpdatedUser(e.target.value)}></input> <br></br>

                <label>Update Pet</label>
                <input onChange={(e) => props.setUpdatedMyPet(e.target.value)}></input> <br></br>

                <button onClick={(e) => UpdateUser(e, user)}>Update</button>
                
            </div>
          </form>
        </div>
      ))}
    </div>
  )  
}

export default CreateUsers