import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.articles = [{index: 1, title: 'One'}, {index: 2, title: 'Two'}, {index: 3, title: 'Three'}];
    this.articleList = this.articles.map((article) => {
      return <Article key={article.index} num={article.index} title={article.title}/>
    });
  }

  render() {
    return <div>{this.articleList}</div>;
  }
}

export default Articles;
