import React from 'react';
import './App.css';

import Header from './redux/components/Header';
import SearchBar from './redux/components/SearchBar';
import BookList from './redux/components/BookList';
import BookListDetail from './redux/components/BookListDetail';
import FavListDetail from './redux/components/FavListDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header name="Book List!" />
            <SearchBar />
            <BookList />
          </Route>
          <Route path="/detail" component={BookListDetail}>
            <Header name="Book Detail" />
            <BookListDetail />
          </Route>
          <Route path="/fav" component={FavListDetail}>
            <Header name="Favorite List" />
            <FavListDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
