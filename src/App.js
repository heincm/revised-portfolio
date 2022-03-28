import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import LanguagesPage from './pages/LanguagesPage'
import CustomHeader from './components/CustomHeader'
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
      <CustomHeader />
      <div className='page-layout-container'>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
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
      </div>

      <Footer />
    </Router>
  );
}

export default App;
