import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    candidats : []
  }

  componentDidMount() {
    fetch('/api/candidats')
    .then( response => response.json() )
    .then( json => {
      console.log('json : ', json);
      this.setState({candidats: json})
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {
            this.state.candidats.map( (item, i) => {
              return <li key={i}>{item.nom}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
