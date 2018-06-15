import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/articleList.css';

export default class ArticleList extends Component {

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = async () => {
    try {
      const response = await fetch('/api/posts');    
      const res = await response.json();
      if (response.status !== 200) throw Error(res.message);
      console.log(res);
      this.props.handleUpdateArticles(res.posts);
    } catch(err) {
      console.error(err);
    }
  }
  renderArticles = ({ title, content }, id) => (
    <li className="article-Wrapper">
      <h3 className="article-title">{title}</h3>
      <div className="article-content">{content}</div>
      <Link to={`/article/${id}`}><p className="read-link">繼續閱讀...</p></Link>
    </li>
  )

  render() {
    // console.log(this.props)
    return (
      <div className="ArticleListWrapper">
        <ul>
            {this.props.articles.map(this.renderArticles)}
        </ul>
      </div>
    )
  }

}