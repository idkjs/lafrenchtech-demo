import React, { Component } from "react";
import GithubCorner from "react-github-corner";
export default class Corner extends Component {
  render() {
    return (
      <div>
        <GithubCorner
          target="_blank"
          rel="noopener"
          href="https://github.com/idkjs/lafrenchtech-demo"
        />
      </div>
    );
  }
}
