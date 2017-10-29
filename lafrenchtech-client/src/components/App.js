import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import ListPage from "./ListPage";
import environment from "../Environment";
import Corner from "./Corner";

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
      <div>
        <Corner />
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
      </div>
    );
  }
}
export default App;
