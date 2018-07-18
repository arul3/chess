import React, { Component } from 'react';
import './App.css';

import ChessBoard from './ChessBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">

        </div>

          <ChessBoard />
      </div>
    );
  }
}

export default App;
