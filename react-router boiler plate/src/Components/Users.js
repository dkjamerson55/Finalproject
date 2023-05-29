import React from 'react'

function Users({users}) {
  return(
    <div className='card-container'>
      <Card>
        {users.map((user, index) => (
          <tr key={index}>
           <image src={user.avatar} alt='user avatar'></image>
           <h3>{user.name}</h3>
           <h4>{user.mypet}</h4>
          </tr>
        ))}
      </Card>
    </div>
  )  
}

export default Users