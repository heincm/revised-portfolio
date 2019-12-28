import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import LanguagesPage from './pages/LanguagesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/index">
          <HomePage />
        </Route>
        <Route path="/languages">
          <LanguagesPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
