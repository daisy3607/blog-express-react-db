import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/article.css';

export default class Article extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const article = this.props.articles[Number.parseInt(this.props.match.params.aid)];
    console.log(this.props.articles);
    return (
      <div className="articleWrapper">
        <h1>{article.title}</h1>
        {article.content}
        <br />
        <br />
        <br />
        <Link to="/articles">回到上一頁</Link>
      </div>
    );
  }
}
