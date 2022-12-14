// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useStateStore } from './store';
import { useRoutes, BrowserRouter, RouteObject, Link } from 'react-router-dom';
import { HomePage, Notfound } from './pages';

function App() {
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
      <BrowserRouter>
        <nav className='router-links'>
          <Link to='/'>home</Link>
          <Link to='/2'>Page 2</Link>
          <Link to='/3'>Page 3</Link>
          <Link to='/404-test'>404 Test</Link>
        </nav>
        <AppRouter />
      </BrowserRouter>
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

// Router config
function AppRouter() {
  const routes: RouteObject[] = [
    {
      children: [
        { element: <HomePage />, index: true },
        { element: <h2>Page 2</h2>, path: '/2' },
        { element: <h2>Page 3</h2>, path: '/3' },
        { element: <Notfound />, path: '*' },
      ],
    },
  ];

  const router = useRoutes(routes);
  return router;
}

export default App;
