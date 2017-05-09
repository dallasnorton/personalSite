import React, { Component } from 'react';

class Article extends Component {
    render() {
      return <div className="article-wrapper">
        <h3>
          <a href={this.props.articleObj.href} className="article-title-link">{this.props.articleObj.title}</a>
        </h3>
        <div className="article-details">
          <span className="article-author">{this.props.articleObj.author}</span>
          <span className="article-date">{this.props.articleObj.date}</span>
        </div>
        <p className="article-takeaways">{this.props.articleObj.takeaways}</p>
      </div>;
    }
}

export default Article;
