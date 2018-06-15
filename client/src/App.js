import React, { Component } from 'react';

import './App.css';
import Main from './components/Main.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Main auth={this.props.auth} />
      </div>
    )
  }
}

export default App;
