import React, { Component } from 'react';
import './Article.css';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Article extends Component {
  constructor(props) {
    super(props);
    const dateObj = new Date(this.props.articleObj.date);
    this.dateString = monthNames[dateObj.getMonth()] + ' ' + dateObj.getDate() +', ' + dateObj.getFullYear();
  }

  render() {
    return <div className="article-wrapper">
      {this.props.articleObj.hasOwnProperty('videoLink') ? (
        <div className="videowrapper">
          <iframe width="560" height="315" title={this.props.articleObj.href} src={this.props.articleObj.videoLink} frameBorder="0" allowFullScreen></iframe>
        </div>
      ) : ( 
        <h3 className="article-title">
          <a href={this.props.articleObj.href}>{this.props.articleObj.title}</a>
        </h3>
      )}
      <div className="article-details">
        <span className="article-author">by: <a href={this.props.articleObj.authorLink}>{this.props.articleObj.author}</a></span>
        <span className="article-date">{this.dateString}</span>
      </div>
      <p className="article-takeaways">{this.props.articleObj.takeaways}</p>
    </div>;
  }
}

export default Article;
