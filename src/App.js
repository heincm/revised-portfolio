import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import LanguagesPage from './pages/LanguagesPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/index">
          <HomePage />
        </Route>
        <Route path="/languages">
          <LanguagesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
