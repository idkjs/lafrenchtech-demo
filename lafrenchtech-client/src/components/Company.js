import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

import {
  Card,
  Border,
  Box,
  BackgroundImage,
  Subhead,
  Small,
  Link
} from "rebass";
class Company extends Component {
  render() {
    return (
      <Card width={256}>
        <Border py={2} top bottom>
          <BackgroundImage ratio={1} src={this.props.company.logo} />
          <Box p={2}>
            <Link href={this.props.company.url}>{this.props.company.name}</Link>
            <Small>Small meta text</Small>
          </Box>
        </Border>
      </Card>
    );
  }
}

Company = createFragmentContainer(Company, {
  company: graphql`
    fragment Company_company on Company {
      id
      description
      url
      logo
      name
      tranch
    }
  `
});

export default Company;
