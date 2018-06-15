import React, { Component } from 'react';
import '../css/newPost.css';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }
  }

  editTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  editContent = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

  handleSubmit = () => {
    this.handleNewArticle();
    this.props.history.push('/articles');
  }

  handleNewArticle = async () => {
    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({post: this.state}), 
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    this.setState({ title: '', content: '' });
  }


  handleKeyPress = (e) => {
    
    if(e.key === 'Enter'){
      this.handleSubmit();
      if(e.preventDefault) {
        e.preventDefault();
      }
    }
  }


  render() {
    return (
      <div className="editorWrapper">
        <h1>新增文章</h1>
        <form>
          <input className="titleInput" type="text" value={this.state.title} placeholder="請輸入標題" onChange={(e) => this.editTitle(e)}></input>
          <br />
          <textarea className="contentInput" placeholder="寫點什麼吧..." onChange={(e) => this.editContent(e)} onKeyPress={this.handleKeyPress}></textarea>
        </form>
        <button onClick={this.handleSubmit}>送出文章</button>
      </div>
    )
  }


}