import React, { Component } from 'react';
import '../css/list.css';
import { Link } from 'react-router-dom';

export default class ListBar extends Component {
  constructor(props) {
    super(props);

  }

  renderArticleList = ({ title }, _id) => (
    <li className="art">
      <Link to={`/article/${_id}`}><p className="titleName">{title}</p></Link>
    </li>
  )

  render() {
    console.log(this.props.articles);
    return (
      <div className="ListBarWrapper">
        <h3 className="ListTitle"> 文章列表 </h3>
        <ul className="Listlist">
          {this.props.articles.map(this.renderArticleList)}
        </ul>
      </div>

    )
  }
}