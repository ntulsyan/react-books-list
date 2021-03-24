import React from 'react';
import BookList from './components/BookList/Booklist';
import BookItem from './components/Book/Book';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={BookList} exact={true}></Route>
          <Route path="/book/:bookId" component={BookItem} exact={true}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
