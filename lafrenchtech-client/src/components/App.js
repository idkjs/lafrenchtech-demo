import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import styled from "styled-components";
import ListPage from "./ListPage";
import environment from "../Environment";
import { mainColor, Title } from "./Styles";

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
        <Title color={mainColor} href={"http://visa.lafrenchtech.com"}>
          LaFrenchTech
        </Title>
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
export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
