import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

import { Divider, Box, Image, Link } from "rebass";

class Company extends Component {
  render() {
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3]}>
        <Image src={this.props.company.logo} />
        <Divider color="black" />
        <Link href={this.props.company.url} target="_blank">
          {this.props.company.name}
        </Link>
        <Divider color="black" />
      </Box>
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
