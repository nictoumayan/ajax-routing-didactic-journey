import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
//import axios from "axios";
//import axios from "../../axios";
import Posts from "../Blog/Posts/Posts";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";
//import FullPost from "../../containers/Blog/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/posts"
                exact
                activeClassName="my-active"
                activeStyle={{ color: "#fa923f", textDecoration: "underline" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/new-post", hash: "#submit" }}>
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* use this.props.match.url + "/" for relative paths */}
        {/* <Route path="/" exact render={() => <h1>Exact Route</h1>} />
        <Route path="/" render={() => <h1>Fuzzy Route</h1>} /> */}

        <Switch>
          {/* Order is important here! */}
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
