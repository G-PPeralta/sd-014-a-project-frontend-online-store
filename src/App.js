import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductsList } />
    </BrowserRouter>
  );
}

export default App;
