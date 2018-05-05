import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Time from './components/time';
import Map from './components/map';
=======
import Map from './components/map/map.js';
import Times from './components/times/times.js';
>>>>>>> e53d9cf7636abc28bf42e2d3080d9b4d02b0fa27

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Map />
        <Time />
      </div>

=======
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EDC</h1>
        </header>
        <div className="row">
          <div className="col-sm-8"> 
            <Map/>
          </div>
          <div className="col-sm-4">
            <Times/>
          </div>
        </div>
      </div>
>>>>>>> e53d9cf7636abc28bf42e2d3080d9b4d02b0fa27
    );
  }
}

export default App;
