import React from "react";
import { createView } from "rrx";

import { createFragmentContainer, graphql } from "react-relay";
import { Flex, Heading, Lead } from "rebass";
import Company from "./Company";

const ListPage = createFragmentContainer(
  props => (
    <Flex wrap>
      {props.companies.edges.map(({ node }, index) => (
        <Company key={node.__id} index={index} company={node} />
      ))}
    </Flex>
  ),
  graphql`
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
);
export default createView(ListPage);
