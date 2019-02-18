import React, { Component } from 'react';
import Film from './components/Film';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Film />
      </div>
    );
  }
}

export default App;
