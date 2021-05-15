import './App.css';
import React from "react";
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch.js';
import CountryDetail from './components/CountryDetail/CountryDetail';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
           <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>
        <Route path="*">
         <NoMatch/>
        </Route>
      </Switch>
    </Router>
     
 
  );
}

export default App;
