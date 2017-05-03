import React, { Component } from 'react';
import './App.css';
import Articles from './Articles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="logo">DALLAS NORTON</h1>
        </div>
        <div className="main-wrapper">
          <p className="App-intro">Welcome, I use this website to keep a history of articles I have recently read and will make note of key points and/or things I have learned from said article.</p>
          <Articles />
        </div>
      </div>
    );
  }
}


// function Article(props) {
//   return <div>Article #{props.num}</div>;
// }

export default App;
