import React, { Component } from 'react';
import './App.css';
import Map from './components/map/map.js';
import Times from './components/times/times.js';
import Key from './components/key/key.js';
import welcome from './images/welcome.png';
import owl from "./images/owl.gif";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false
    };
  }

  componentWillMount = () => {
    setInterval(() => {
      this.setState({ timer: true });
      setTimeout(() => {
        this.setState({ timer: false });
      }, 800);
    }
      , 4000);
  }

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
            <div className="col-sm-5">
              <form>
                <Times />
                <Key />
              </form>
              {this.state.timer === true &&
                <div className="panel panel-default">
                  <div className="panel-body">DRINK WATER!</div>
                </div>
              }

              <img id="owl" src={owl} alt="" />
            </div></div>
        </div>
      </div>
    );
  }
}

export default App;
