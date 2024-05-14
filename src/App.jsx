import { useState } from 'react';

import './App.css';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    // count = count + 1; Can not change constant
  }

  function decrement() {
    setCount(count - 1);
    // count = count - 1; Can not change constant
  }

  return (
    <>
      <div className="card">
        <p>{count}</p>
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn" onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}

export default App;
