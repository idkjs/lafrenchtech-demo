import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { createView, Link } from "rrx";
import { Flex, Heading, BlockLink, Card, Divider, Pre } from "rebass";
import PageTitle from "./PageTitle";
import Preview from "./Preview";
import Company from "./Company";

const CompCard = props => (
  <Card p={2}>
    <Preview
      style={{
        height: 192,
        overflow: "hidden"
      }}
    />
    <Divider color="gray2" />
    <Pre f={0}>{props.name}</Pre>
  </Card>
);
const ListPage = props => (
  console.log(props.companies),
  (
    <div>
      <PageTitle>{props.companies.edges.length} Companies</PageTitle>
      <Flex wrap my={4} mx={-2}>
        {props.companies.edges.map(({ node }) => (
          <BlockLink
            key={node.__id}
            company={node}
            is={Link}
            href={node.url}
            px={2}
            pb={3}
            w={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}
          >
            <CompCard name={node.name} />
          </BlockLink>
        ))}
      </Flex>
    </div>
  )
);

const fragment = createFragmentContainer(ListPage, {
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
export default createView(fragment);
