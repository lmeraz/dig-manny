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
          <img src={welcome} alt="" />
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Map />
            </div>
            <div className="col-sm-4">
              <form>
                <Times />
                <Key />
              </form>
            </div></div>
        </div>
      </div>
    );
  }
}

export default App;
