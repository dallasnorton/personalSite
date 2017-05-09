import React, { Component } from 'react';
import './App.css';
import Articles from './Articles';

class App extends Component {
  render() {
    const articles = [ {
        title: 'AngularJS: `template` vs `templateUrl`',
        href: 'https://medium.com/@frosty/angularjs-template-vs-templateurl-cdde055b7907',
        takeaways: 'DO THIS!!! READ THE ARTICLE!',
        author: 'Aaron Frost',
        authorLink: 'https://twitter.com/js_dev',
        date: new Date('May 9, 2017')
      }, {
        title: 'There\'s more ot HTML escaping than &, <, >, and "',
        href: 'http://wonko.com/post/html-escaping',
        takeaways: 'Read this article to tighten security around a feature I inherited that used lodash _.escape but that can even fall to XSS in the case of the all the extra special characters like `, , !, @, $, %, (, ), =, +, {, }, [, and ]. One of the key takeaways is context is key. In which context am I going to be using my users input? Ryan Grove also links a few other references that I will need to go back to when I get more time.',
        author: 'Ryan Grove',
        authorLink: 'https://twitter.com/yaypie',
        date: new Date('May 1, 2017')
      }];
    
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="logo">DALLAS NORTON</h1>
        </div>
        <div className="main-wrapper">
          <div className="App-intro">Welcome, I use this website to keep a history of articles I have recently read and will make note of key points and/or things I have learned from said article.</div>
          <Articles className="article-container"   articles={articles}/>
        </div>
      </div>
    );
  }
}


// function Article(props) {
//   return <div>Article #{props.num}</div>;
// }

// This website is to help me keep up. There is so much going 
// on on the web that its hard to know what you don’t know. 
// In the words of Confucius “Real knowledge is to know the extent of one’s ignorance”

// Dunning-Kruger effect

// remember that code is read far more than it's written
export default App;
