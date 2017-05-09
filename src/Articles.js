import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.articleList = this.props.articles.map((article) => {
      return <Article 
                key={article.index} 
                articleObj={article}
              />
    });
  }

  render() {
    return <div className="article-container">{this.articleList}</div>;
  }
}

export default Articles;
