import React, { Component } from "react";
import theme from "./Theme";
import { Provider } from "rebass";
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
      <Provider theme={theme}>
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
      </Provider>
    );
  }
}

export default App;
