import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { DarkMode } from '../DarkMode';

function Cards() {
  return (
    <div className='cards'>
      <DarkMode>
      <h1>⦒MY LIFE IN PICTURES⦑</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Fiance Oliver & Kingston'
              label='MY FIANCE'
              path='/about'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Cayden'
              label='MY SON'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpeg'
              text='This is my absoloute BFF in the world'
              label='MY BFF'
              path='/about'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Cayden & Molly'
              label='MY SON'
              path='/about'
            />
            <CardItem
              src='images/img-5.jpg'
              text='One of my absolute favorite things to do is Singing'
              label='NATTA'
              path='/about'
            />
          </ul>
        </div>
      </div>
      </DarkMode>
    </div>
  );
}

export default Cards;
