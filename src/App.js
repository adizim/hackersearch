import React, { Component } from 'react';
require('./App.css');

class App extends Component {
  render() {
    const helloWorld = 'yo to the Road to learn React';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;