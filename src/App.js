import React, { Component } from 'react';
import './App.css';
import Time from './components/time';
import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <Time />
      </div>

    );
  }
}

export default App;
