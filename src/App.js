import React from 'react';
import './App.css';

import Header from './redux/components/Header';
import SearchBar from './redux/components/SearchBar';
import BookList from './redux/components/BookList';
function App() {
  return (
    <div className="App">
      <Header name="Shopping Time!" />
      <SearchBar />
      <BookList />
    </div>
  );
}

export default App;
