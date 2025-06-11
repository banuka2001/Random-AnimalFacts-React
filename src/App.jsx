import { animals } from './animals';
import React, { useState } from 'react';
import './App.css';
import ocean from './assets/images/Ocean.png';
import dolphin from './assets/images/dolphin.png';
import lobster from './assets/images/lobster.png';
import starfish from './assets/images/starfish.png';

const animalImages = {
  dolphin,
  lobster,
  starfish
};

function App() {
  const [fact, setFact] = useState('Click an animal for a fun fact');

  const title = "";
  const showBackground = true;

  const background = (
    <img
      className='background'
      alt='ocean'
      src={ocean}
    />
  );

  const images = [];

  for (const animal in animals) {
    images.push(
      <img
        key={animal}
        className='animal'
        alt={animal}
        src={animalImages[animal]}
        aria-label={animal}
        role='button'
        onClick={displayFact}
      />
    );
  }

  function displayFact(e) {
    const animalName = e.target.alt;
    const factsArr = animals[animalName].facts;
    const randomIndex = Math.floor(Math.random() * factsArr.length);
    const funFact = factsArr[randomIndex];
    setFact(funFact);
  }

  return (
    <div className="container">
      <h1> {title === '' ? 'Click an animal for a fun fact' : title} </h1>
      <div className="content-wrapper">
        {showBackground && background}
        <div className="animals">
          {images}
        </div>
        <p id='fact'>
          {fact}
        </p>
      </div>
    </div>
  );
}

export default App;






