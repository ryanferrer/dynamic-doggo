import React, { Component } from 'react';
import Bloglet from './Bloglet.jsx';

const URL = 'http://localhost:8080/api/blogs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Articles: [
        {
          title: 'WoW!',
          author: 'Doge',
          body: 'Sick Brick, Nick, I Rick da Bick!',
        },
      ],
    };
  }

  componentDidMount() {
    fetch(URL, {})
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          Articles: json,
        });
      });
  }

  render() {
    const { Articles } = this.state;

    return (
      <>
        { Articles.map((article, key) => (
            <Bloglet article={article} key={key}/>
        )) }
      </>
    );
  }
}

export default App;