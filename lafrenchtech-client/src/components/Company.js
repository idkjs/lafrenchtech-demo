import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { createView } from "rrx";
import {
  Divider,
  Box,
  Image,
  Link,
  Pre,
  Preview,
  Card,
  Truncate,
  Text
} from "rebass";
// import Debug from "./Debug";

const Company = createFragmentContainer(
  props => (
    <Card p={3} width={[1, 1 / 2, 1 / 3]}>
      <Image src={props.company.logo} />
      <Divider color="gray2" />
      <Pre f={0}>
        <Link href={props.company.url} target="_blank">
          {props.company.name}
        </Link>
      </Pre>
      <Link f={0}>Sector: {props.company.sector}</Link>
    </Card>
  ),
  graphql`
    fragment Company_company on Company {
      id
      description
      url
      logo
      name
      tranch
      sector
    }
  `
);

export default createView(Company);
