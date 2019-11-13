import React, { Component } from 'react';
import Doge from './Doge.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Doge/>
      </>
    );
  }
}

export default App;