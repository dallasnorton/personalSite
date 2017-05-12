import React, { Component } from 'react';
import articlesData from './articlesData';
import './App.css';
import Articles from './Articles/Articles';
import RightSideBar from './RightSideBar/RightSideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="logo">DALLAS NORTON</h1>
        </div>
        <div className="main-wrapper">
          <div className="content-wrapper">
            <Articles articles={articlesData.articles}/>
            <RightSideBar/>
          </div>
        </div>
      </div>
    );
  }
}

// Dunning-Kruger effect

// remember that code is read far more than it's written
export default App;
