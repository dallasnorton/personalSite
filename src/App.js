import React, { Component } from 'react';
import articlesData from './articlesData';
import './App.css';
import Articles from './Articles/Articles';
import RightSideBar from './RightSideBar/RightSideBar';
import AppHeader from './AppHeader/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader/>
        <div className="main-content main-wrapper">
          <div className="content-wrapper">
            <Articles articles={articlesData.articles}/>
            <RightSideBar/>
          </div>
          <footer className="site-footer">
            <span className="site-footer-owner">© 2017 Dallas Norton</span>
          </footer>
        </div>
      </div>
    );
  }
}

// Dunning-Kruger effect

// remember that code is read far more than it's written
export default App;
