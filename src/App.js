import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Candidatedetail from '../src/components/Candidatedetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainWrapper">
          <Candidatedetail />
        </div>
      </div>
    );
  }
}

export default App;
