import React, { Component } from 'react';

class Article extends Component {
    render() {
      return <div>Article #{this.props.num}</div>;
    }
}

export default Article;
