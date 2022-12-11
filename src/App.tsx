// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useStateStore } from './store';

function App() {
  // const [count, setCount] = useState(0);
  // using zustand state management
  // const count = useStateStore((state) => state.count);
  // const increment = useStateStore((state) => state.increment);
  // const decrement = useStateStore((state) => state.decrement);
  // const reset = useStateStore((state) => state.reset);
  // array pick all at once
  const [count, increment, decrement, reset] = useStateStore((state) => [
    state.count,
    state.increment,
    state.decrement,
    state.reset,
  ]);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => increment(7)} title='increment'>
          +
        </button>
        <button onClick={() => reset()} title='reset counter'>
          count is {count}
        </button>
        <button onClick={() => decrement(5)} title='decrement'>
          -
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
