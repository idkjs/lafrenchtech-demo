import React, { Component } from "react";
import { Provider, Base, Heading, NavLink, Toolbar, Text } from "rebass";
import BurgerMenu from "./BurgerMenu";
import UserDrop from "./UserDrop";
import { QueryRenderer, graphql } from "react-relay";
import ListPage from "./ListPage";
import environment from "../Environment";
import Corner from "./Corner";
import { createRouter, createView, Link } from "rrx";
import Index from "./Index";
import About from "./About";
import Post from "./Post";
import NavBar from "./NavBar";

const AppListPageQuery = graphql`
  query AppListPageQuery {
    companies {
      ...ListPage_companies
    }
  }
`;

const Contact = createView(() => (
  <div>
    <h1>Contact</h1>
  </div>
));
class App extends React.Component {
  render() {
    return (
      <Provider
        theme={{
          font: '"Avenir Next", Helvetica, sans-serif',
          fontSizes: [12, 16, 24, 36, 48, 72]
        }}
      >
        <Corner />
        <NavBar />
        <Toolbar>
          <nav>
            <a href={"http://visa.lafrenchtech.com/"} target="_blank">
              Work In France
            </a>{" "}
            <a
              href={"https://github.com/idkjs/lafrenchtech-demo"}
              target="_blank"
            >
              Github
            </a>{" "}
            <Link href="/">Home</Link>
            <Link href="/posts/hello">Hello Post</Link>
            <Link href="/posts/two">Post Two</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Toolbar>
        <div>
          <Index pattern="/" />
          <About pattern="/about" />
          <Contact pattern="/contact" />
          <Post pattern="/posts/:id" foo="bar" />
        </div>
        <QueryRenderer
          environment={environment}
          query={AppListPageQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <ListPage companies={props.companies} />;
            }
            return <div>Loading</div>;
          }}
        />
      </Provider>
    );
  }
}

export default createRouter(App);
