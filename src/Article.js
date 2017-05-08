import React, { Component } from 'react';

class Article extends Component {
    render() {
      return <div>
        Article #{this.props.num} <span>Title: {this.props.title}</span>
      </div>;
    }
}

export default Article;
