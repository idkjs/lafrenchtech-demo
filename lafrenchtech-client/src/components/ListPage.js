import React from "react";
import { createView } from "rrx";

import { createRefetchContainer, graphql } from "react-relay";
import { Flex, Box } from "rebass";
import Company from "./Company";
import PageTitle from "./PageTitle";
import NavBar from "./NavBar";

const ListPage = createRefetchContainer(
  props => (
    <Box>
      <NavBar />
      <PageTitle>
        Work for one of {props.companies.edges.length}&nbsp;Companies
      </PageTitle>
      <Flex wrap my={4} mx={-2}>
        {props.companies.edges.map(({ node }, index) => (
          <Company key={node.__id} index={index} company={node} />
        ))}
      </Flex>
    </Box>
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
