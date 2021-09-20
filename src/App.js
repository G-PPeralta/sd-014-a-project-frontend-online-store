import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
