import React, { Component } from 'react';
import Article from '../Article/Article';
import './Articles.css';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.articleList = this.props.articles.map((article, index) => {
      // order by date
      return <Article 
                key={index} 
                articleObj={article}
              />
    });
  }

  render() {
    return <div className="article-container">{this.articleList}</div>;
  }
}

export default Articles;
