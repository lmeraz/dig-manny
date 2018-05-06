import React, { Component } from 'react';
import './App.css';
import Map from './components/map/map.js';
import Times from './components/times/times.js';
import Key from './components/key/key.js';
import welcome from './images/welcome.png';
import owl from "./images/owl.gif";


class App extends Component {
  
  componentWillMount = () => {
    setInterval(function(){
      console.log("Drink Water")
      
    
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><img src = {welcome} alt=""/></h1>
        </header>
        <div className="row">
          {/* <div className= "col-sm-1"/>  */}
          <div className="col-sm-7"> 
            <Map/>
          </div>
          <div className="col-sm-5">
            <form>
              <Times/>
              <Key/>
            </form>
          </div>
          {/* <div className="col-sm-1"/> */}
          <img id= "owl" src={owl} alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
