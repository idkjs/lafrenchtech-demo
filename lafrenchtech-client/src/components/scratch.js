// <Card p={3} width={[1, 1 / 2, 1 / 3]}>
//   <Image src={props.company.logo} />

//   <Link href={props.company.url} target="_blank">
//     {props.company.name}
//   </Link>
//   <Divider color="gray2" />
//   <Pre f={0}>{props.company.name}</Pre>
// </Card>;

// import React, { Component } from "react";
// import { createView } from "rrx";
// import { createRefetchContainer, graphql } from "react-relay";
// import { Flex, Box } from "rebass";
// import Company from "./Company";
// import PageTitle from "./PageTitle";
// import NavBar from "./NavBar";

// function searchTerm(term) {
//   const refetchVariables = fragmentVariables => ({
//     sector_contains: fragmentVariables.term
//   });
//   this.props.relay.refetch(refetchVariables, null);
// }

// class ListPage extends Component {
//   render(){
//     return (
//       <Box>
//         <NavBar />
//         <PageTitle>
//           Work for one of {props.companies.edges.length}&nbsp;Companies
//         </PageTitle>
//         <Flex wrap my={4} mx={-2}>
//           {props.companies.edges.map(({ node }, index) => (
//             <Company
//               key={node.__id}
//               index={index}
//               company={node}
//               onClick={() => searchTerm()}
//             />
//           ))}
//         </Flex>
//       </Box>
//     )
// }

// ListPage = createRefetchContainer(ListPage, {
//     companies: graphql`
//       fragment ListPage_companies on CompanyConnection
//         @argumentDefinitions(
//           sector_contains: { type: "String", defaultValue: " " },
//           count: { type: "Int", defaultValue: 10 }
//         ) {
//         companies(first: $count, filter: $sector_contains)
//           @connection(key: "ListPage_company") {
//           edges {
//             cursor
//             node {
//               id
//               ...Company_company
//             }
//           }
//         }
//       }
//     `
//   },
//   graphql`
//     query ListPageRefetchQuery($count: Int, $filter: CompanyFilter) {
//       companies {
//         ...ListPage_companies @arguments(count: $count, filter: $filter)
//       }
//     }
//   `
// );
