import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import styled from "styled-components";
import ListPage from "./ListPage";
import environment from "../Environment";
import { mainColor, Title } from "./Styles";
import Corner from "./Corner";
import PageTitle from "./PageTitle";

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
      <div className={this.props.className}>
        <Corner />
        <PageTitle href={"http://visa.lafrenchtech.com"}>
          LaFrenchTech
        </PageTitle>
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
