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
        <div className='user-form'>
            <h2>New User Form</h2>
            <label><h3>User: </h3></label> <br/>
            <input onChange={(e) => setNewUser(e.target.value)}></input> <br></br>
            {/* takes an event and setting updated name variable to equal that event */}
            <label><h3>Pet: </h3></label> <br/>
            <input onChange={(e) => setNewMyPet(e.target.value)}></input> <br></br>
            <label className='pet-type'>My pet:</label> <br></br> 
            <button className='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </div> 
      </form> 
      
    
      {props.users.map((user, index) => (
        <div key={index} className='userContainer'>
          <div className='user-list'>
              <h3>Name: {user.name}</h3>
              <h3>Pet: {user.mypet}</h3><br></br>
              <button onClick={() => DeleteUser(user.id)}>Delete 🗑</button>
          </div> 
          <form>
            <div className='update-form'>
                <h4>Update This User</h4> 
                <label>Update User Name: </label> <br/>
                <input onChange={(e) => props.setUpdatedUser(e.target.value)}></input> <br></br>

                <label>Update Pet: </label> <br/>
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