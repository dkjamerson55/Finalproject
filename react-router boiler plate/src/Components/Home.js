import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum'

function Home() {
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
    <div>
      {/* loremIpsum function to create multiple paragraphs of text */}
      {loremIpsum({p: 3}).map(text => (
        <div className='text' key={text}>
          {text}
        </div>
      ))}
    </div>
  )
}

export default Home