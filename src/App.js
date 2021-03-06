import logo from './logo.svg';
import './App.css';

// Import useState from React to render variables:
// This syntax is called Object Destructuring
// This is same as: import React from 'react';
// const useState = React.useState;
import { useState } from 'react';
// useState is a hook, which is a fancy thing to do stuff in react
// all hooks start with use (usually means you're tracking value
// of something across multiple calls of a function)

// If this were node we'd:
// const HelloCullen = require('./HelloCullen');
// But client-side (React) we do this:
// import HelloCullen from './HelloCullen';

// React is made up of components
// App is a component.
// Components are functions that return JSX
// You can nest components (see HelloCullen below)
function App() {
  const [name, setName] = useState('Edan');

  //THIS WON"T RENDER:
  // let drinkCount = 1;
  // So instead us state to define two new variables, starting at 1
  const [drinkCount, setDrinkCount] = useState(1);
  // What this is made up of = we are creating an array:
  // const returnValOfUseState = useState(1);
  // const drinkCount = returnValOfUseState[0];
  // const setDrinkCount = returnValOfUseState[1];

  const soberUp = () => {
    setDrinkCount(0);
  };

  return (
    <div>
      <h1>Cullen Happy Hour!</h1>
      <p>I have had {drinkCount} drink</p>
      <p>{name} has had 1 drink</p>

      {/* Write event listener as an attribute! */}
      <button
        onClick={() => {
          setDrinkCount(drinkCount + 1);
          console.log('Drink up!');
        }}
      >
        Drink Up ^
      </button>

      {/* <button onClick={() => setDrinkCount(0)}>Sober Up</button> */}
      <button onClick={soberUp}>Sober Up</button>

      <input placeholder="Enter your name" 
      onChange={(event) => {
        console.log('changing name', event.target.value)
        setName(event.target.value)}} />
    </div>
    // event.target is equivalent of $(this) in JQ
  );
}

// Moved to HelloCullen module
// function HelloCullen() {
//   return <h1>Hello, Cullen!!</h1>;
// }

export default App;
