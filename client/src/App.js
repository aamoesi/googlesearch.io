import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Savedbook from './components/savedbooks'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Searchbox}></Route>
            <Route exact path='/saved' component={Savedbook}></Route>
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
