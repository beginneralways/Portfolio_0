import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header.js';
import Skills from './components/Skills.js';
import Stack from './components/Stack.js';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <div style={appStyle}>
        <Header />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/stack" component={Stack} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
    </BrowserRouter>
  );
}

const appStyle = {
  fontFamily: 'Arial, sans-serif',
};

export default App;
