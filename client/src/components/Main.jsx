import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './login.jsx';
import Header from './header';
import Article from './article.jsx';
import ArticleList from './articleList';
import NewPost from './newPost';
import ListBar from './list.jsx';
import '../css/main.css';

const PrivateRoute = ({ component: Component, ...rest, auth }) => (
  <Route {...rest} render={(props) => (
    auth === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      renderLoginPage: true,
      articles: [],
    };
  }

  setLogin = () => {
    this.props.auth.authenticate(() => {
      // <Route exact path="/"><Redirect to="/articles" /></Route>
      this.setState({
        renderLoginPage: false,
      });
    });
  }

  handleUpdateArticles = (articles) => {
    this.setState({articles});
  }

  renderArticleList = (props) => (
    <ArticleList
      articles={this.state.articles}
      handleUpdateArticles={this.handleUpdateArticles}
      {...props} />
  )

  renderArticle = (props) => (
    <Article articles={this.state.articles} {...props} />
  )
  
  render() {
    // console.log(this.state.articles);
    return (
      <main>
        <Switch>
          <Route exact path="/"><Redirect to={"/articles"} /></Route>
          <Route path="/login" render={(props) => (<Login setLogin={this.setLogin.bind(this)} {...props} />)}/>
          <div>
            <Header />
            <div className="bottom-page">
              <ListBar articles={this.state.articles} />
              <Route path="/articles" render={this.renderArticleList} />
              <Route path="/article/:aid" render={this.renderArticle} />
              <PrivateRoute path="/newpost" component={NewPost} auth={this.props.auth.isAuthenticated} />
            </div>
          </div>
        </Switch>
      </main>
    );
    
  }
}
export default Main;
