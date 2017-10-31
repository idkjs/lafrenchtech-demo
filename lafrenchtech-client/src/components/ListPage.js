import React, { Component } from "react";
import { createView } from "rrx";
import { createRefetchContainer, graphql } from "react-relay";
import { Flex, Box } from "rebass";
import Company from "./Company";
import PageTitle from "./PageTitle";
import NavBar from "./NavBar";

function searchTerm(term) {
  const refetchVariables = fragmentVariables => ({
    sector_contains: fragmentVariables.term
  });
  this.props.relay.refetch(refetchVariables, null);
}

class ListPage extends Component {
  render() {
    return (
      <Box>
        <NavBar />
        <PageTitle>
          Work for one of {this.props.companies.edges.length}&nbsp;Companies
        </PageTitle>
        <Flex wrap my={4} mx={-2}>
          {this.props.companies.edges.map(({ node }, index) => (
            <Company
              key={node.__id}
              index={index}
              company={node}
              onClick={() => searchTerm()}
            />
          ))}
        </Flex>
      </Box>
    );
  }
}

const ListPagePageContainer = createRefetchContainer(
  ListPage,
  {
    companies: graphql`
      fragment ListPage_companies on CompanyConnection
        @argumentDefinitions(
          sector_contains: { type: "CompanyFilter", defaultValue: " " }
          count: { type: "Int", defaultValue: 10 }
        ) {
        edges {
          node {
            id
            ...Company_company
          }
        }
      }
    `
  },
  graphql`
    query ListPageRefetchQuery($count: Int, $filter: CompanyFilter) {
      companies {
        ...ListPage_companies @arguments(count: $count, filter: $filter)
      }
    }
  `
);

export default createView(ListPage);
