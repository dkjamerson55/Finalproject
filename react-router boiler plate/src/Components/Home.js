import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum'

function Home() {
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