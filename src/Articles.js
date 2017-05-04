import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
    render() {
      return <div><Article num='1' /><Article num='2' /><Article num='3' /></div>;
    }
}

export default Articles;
