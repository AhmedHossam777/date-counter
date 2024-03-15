import React, { useState } from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount((c) => {
      c += step;
      return c;
    });
  };

  const decrementCount =() => {
    setCount((c) => {
      c -= step;
      return c;
    });
  };

  const incrementStep = () => {
    setStep((s) => s + 1);
  };

  const decrementStep = () => {
    setStep((s) => s - 1);
  };

  return (
    <div>
      <button onClick={decrementStep}>-</button> <span>Step:{step}</span>{' '}
      <button onClick={incrementStep}>+</button>
      <br />
      <button onClick={decrementCount}>-</button>
      <span>Count: {count}</span> <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default App;
