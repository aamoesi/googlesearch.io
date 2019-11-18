import React, { Component } from 'react';
import BookSearch from './pages/BookSearch';
import BookSaved from './pages/BookSaved';
import SingleBook from './pages/SingleBook';
import MyNavBar from './components/MyNavbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavBar/>
          <Switch>
            <Route exact path="/" component={BookSearch}/>
            <Route exact path="/saved" component={BookSaved}/>
            <Route exact path="/saved/:bookId" component={SingleBook}/>
            <Route render={() => <h1>404, PAGE NOT FOUND</h1>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
