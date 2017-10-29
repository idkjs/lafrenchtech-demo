import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Flex } from "rebass";
import PageTitle from "./PageTitle";
import Company from "./Company";
import XRay from "react-x-ray";
class ListPage extends Component {
  render() {
    // console.log(this.props.companies);
    return (
      <XRay>
        <div>
          <PageTitle p={4}>
            {this.props.companies.edges.length} Companies
          </PageTitle>
          <Flex wrap my={2} mx={-2}>
            {this.props.companies.edges.map(({ node }, index) => (
              <Company key={node.__id} index={index} company={node} />
            ))}
          </Flex>
        </div>
      </XRay>
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
