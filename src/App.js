import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import { NotFound } from 'http-errors';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
