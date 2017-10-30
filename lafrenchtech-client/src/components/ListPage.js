import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Flex, Heading } from "rebass";
import Company from "./Company";

class ListPage extends Component {
  render() {
    // console.log(this.props.companies);
    return (
      <div className="bold">
        <Heading f={[2, 3, 4, 5]}>
          {this.props.companies.edges.length}{" "}
          <a href={"http://http://visa.lafrenchtech.com/"}>
            FrenchTechVisa
          </a>{" "}
          Companies
        </Heading>
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
