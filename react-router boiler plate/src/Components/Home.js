import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum'
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap"

function Home() {
  return (
    <Card className='home-card'>
      <CardTitle className='card-title'><h2>🐈 Welcome Pet Owners 🐕</h2></CardTitle>
        <CardBody>
          <div className='home-page'>
            {/* loremIpsum function to create multiple paragraphs of text */}
            {loremIpsum({p: 3}).map(text => (
              <div className='text'>
                {text}
              </div>
            ))}
          </div>
        </CardBody>
        <CardImg className='home-img' src='https://cdn.britannica.com/86/166986-050-4CEFE5DE/cute-kitten-and-puppy-outdoors-in-grass.jpg'></CardImg>
    </Card>
    
  )
}

export default Home