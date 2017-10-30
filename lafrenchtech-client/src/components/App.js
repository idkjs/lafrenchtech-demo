import React, { Component } from "react";
import { Provider, Banner, Heading } from "rebass";
import { QueryRenderer, graphql } from "react-relay";
import ListPage from "./ListPage";
import environment from "../Environment";
import { createRouter } from "rrx";
import NavBar from "./NavBar";

const AppListPageQuery = graphql`
  query AppListPageQuery {
    companies {
      ...ListPage_companies
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Provider
        theme={{
          font: "-apple-system, BlinkMacSystemFont, sans-serif",
          monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
          fontSizes: [12, 16, 24, 36, 48, 72]
        }}
      >
        <NavBar />
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
