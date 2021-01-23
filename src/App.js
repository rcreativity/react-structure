import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import memoize from "memoize-one";
import PropTypes from "prop-types";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import SinglePost from './SinglePost'
import Post from './Post'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/single">Single</Link>
        <Link to="/post">Post</Link>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/single">
            <SinglePost />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

// export const mapStateToProps = state => {
//   console.log(state)
//   return state;
// }
// export const mapDispatchToProps = dispatch => ({
//   getPosts: () => {
//     dispatch(getPosts());
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
