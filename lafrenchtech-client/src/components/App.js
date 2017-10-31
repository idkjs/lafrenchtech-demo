import React, { Component } from "react";
import { Provider, theme } from "rebass";
import { QueryRenderer, graphql } from "react-relay";
import ListPage from "./ListPage";
import environment from "../Environment";
import { createRouter } from "rrx";

const AppListPageQuery = graphql`
  query AppListPageQuery($sector_contains: String) {
    companies {
      ...ListPage_companies @arguments(sector_contains: $sector_contains)
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
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
