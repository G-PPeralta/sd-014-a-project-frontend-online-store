import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
