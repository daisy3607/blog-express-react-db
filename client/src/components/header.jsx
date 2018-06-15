import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../imgs/avatar.jpg';
import '../css/header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="user-data">
          <img src={avatar}></img>
          <h2> Daisy </h2>
          <Link to="/newpost">
            <button className="add-new-post">投稿文章</button>
          </Link>
        </div>
        <div className="headerWrapper">
          <span> B l o g </span>
        </div>
      </div>
    );
  }
}
  