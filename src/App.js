import React, { Component } from 'react';
import './App.css';
import Map from './components/map/map.js';
import Times from './components/times/times.js';
import Key from './components/key/key.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-8">
            <Map />
          </div>
          <div className="col-sm-4">
            <Times />
            <Key />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
