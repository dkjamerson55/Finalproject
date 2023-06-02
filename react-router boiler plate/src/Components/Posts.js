import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum'
import {
  Card,
  CardSubtitle,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap"

function Posts() {
    
  return (
    <Card>
        <CardTitle><h2>View some posts about some of the User pets!</h2></CardTitle>
        <CardBody>
          <CardImg
          className='post-img'
          src='https://www.cdc.gov/healthypets/images/couple-dogs-medium.jpg?_=73716'
          style={{width: 400, height: 400}}
          alt='Pet posts'
          />
          <CardSubtitle className='people'>People and their pets: {loremIpsum({p: 2}).map(text => (
              <div className='text'>
                {text}
              </div>
            ))}</CardSubtitle>
         </CardBody>
          <CardImg
            className='horse-img'
            src='https://thehorse.com/wp-content/uploads/2022/05/ItchyHorse-iStock-627x376.jpg'
            style={{width: 400, height: 400}}
            alt='Pet posts'
            />
         <CardBody>
         <CardSubtitle className='horse-post'>Horse: {loremIpsum({p: 1}).map(text => (
              <div className='text'>
                {text}
              </div>
            ))}</CardSubtitle>
          <CardImg
            className='dog-img'
            src='https://www.science.org/do/10.1126/science.aaw5856/abs/dog_16x9_3.jpg'
            style={{width: 400, height: 400}}
            alt='Pet posts'
            />
         </CardBody>
         <CardSubtitle className='dog-post'>Dog: {loremIpsum({p: 1}).map(text => (
              <div className='text'>
                {text}
              </div>
            ))}</CardSubtitle>
         <CardBody>
          <CardImg
            className='cat-img'
            src='https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg'
            style={{width: 400, height: 400}}
            alt='Pet posts'
            />
         </CardBody>
         <CardSubtitle className='cat-post'>Cat: {loremIpsum({p: 1}).map(text => (
              <div className='text'>
                {text}
              </div>
            ))}</CardSubtitle>
         <CardBody>
          <CardImg
            className='parrot-img'
            src='https://i.guim.co.uk/img/media/c32bb44411172669e6c05bf7cabfe820a774c76c/0_366_2442_1466/master/2442.jpg?width=1200&quality=85&auto=format&fit=max&s=6754cb3ed51418da302ef28a0f2fcaf7'
            style={{width: 400, height: 400}}
            alt='Pet posts'
            />
         </CardBody>
         <CardSubtitle className='parrot-post'>Parrot: {loremIpsum({p: 1}).map(text => (
              <div className='text'>
                {text}
              </div>
            ))}</CardSubtitle>
      </Card>

      
  );
}

export default Posts



          

          

          