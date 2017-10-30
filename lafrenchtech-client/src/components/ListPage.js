import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Flex, Heading, Lead } from "rebass";
import Company from "./Company";

class ListPage extends Component {
  render() {
    // console.log(this.props.companies);
    return (
      <div>
        <Flex wrap>
          {this.props.companies.edges.map(({ node }, index) => (
            <Company key={node.__id} index={index} company={node} />
          ))}
        </Flex>
      </div>
    );
  }
}

ListPage = createFragmentContainer(ListPage, {
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
export default ListPage;
