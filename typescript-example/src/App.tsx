import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  projectName: string;
  year: number;
}

class App extends Component<Props> {
  render() {
    const { projectName, year } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>This is {projectName}, made in {year}.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
