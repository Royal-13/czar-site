import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-10.jpg'
              text='Projects based on Machine Learning'
              label='Python'
              path='/products'
            />
            <CardItem
              src='../images/img-11.jpg' 
              text='Projects based on C and C++'
              label='C/C++'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-12.jpg'
              text='Projects based on Cloud Computing'
              label='Cloud'
              path='/products'
            />
            <CardItem
              src='../images/img-13.jpg'
              text='Projects based on Web Development'
              label='Web Dev'
              path='/products'
            />
            <CardItem
              src='../images/img-14.jpg' 
              text='Projects based on Blockchain'
              label='Blockchain'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
