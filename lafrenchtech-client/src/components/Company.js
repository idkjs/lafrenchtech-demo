import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { createView } from "rrx";
import { Divider, Box, Image, Link } from "rebass";

const Company = createFragmentContainer(
  props => (
    <Box p={3} width={[1, 1 / 2, 1 / 3]}>
      <Image src={props.company.logo} />
      <Divider color="black" />
      <Link href={props.company.url} target="_blank">
        {props.company.name}
      </Link>
      <Divider color="black" />
    </Box>
  ),
  graphql`
    fragment Company_company on Company {
      id
      description
      url
      logo
      name
      tranch
    }
  `
);

export default createView(Company);
