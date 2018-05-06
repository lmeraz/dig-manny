import React, { Component } from 'react';
import './App.css';
import Map from './components/map/map.js';
import Times from './components/times/times.js';
import Key from './components/key/key.js';
import welcome from './images/welcome.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title"><img src={welcome} alt="" /></h1>
        </header>
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-8">
            <Map />

          </div>
          <div className="col-sm-2">
            <form>
              <Times />
              <Key />
            </form>
          </div>
          <div className="col-sm-1" />
        </div>
      </div>
    );
  }
}

export default App;
