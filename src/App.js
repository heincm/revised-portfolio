import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import LanguagesPage from './pages/LanguagesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/ContactPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage';
import HireMe from './pages/HireMePage'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/index">
            <HomePage />
        </Route>
        <Route path="/languages">
          <LanguagesPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/hireme">
          <HireMe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
