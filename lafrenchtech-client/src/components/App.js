import React, { Component } from "react";
// import theme from "./Theme";
import { Provider, Base, Heading, Space, Toolbar, Text } from "rebass";
import BurgerMenu from "./BurgerMenu";
import UserDrop from "./UserDrop";
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
      <Provider
        theme={{
          font: '"Avenir Next", Helvetica, sans-serif',
          fontSizes: [12, 16, 24, 36, 48, 72]
        }}
      >
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
