import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { ListDiv } from "./Styles";
import Company from "./Company";

class ListPage extends Component {
  render() {
    // console.log(`ListPage - render `, this.props.companies.edges);

    return (
      <ListDiv>
        {this.props.companies.edges.map(({ node }, index) => (
          <Company key={node.__id} index={index} company={node} />
        ))}
      </ListDiv>
    );
  }
}

export default createFragmentContainer(ListPage, {
  companies: graphql`
    fragment ListPage_companies on CompanyConnection
      @connection(key: "ListPage_company") {
      edges {
        cursor
        node {
          id
          ...Company_company
        }
      }
    }
  `
});
