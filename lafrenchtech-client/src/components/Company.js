import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

import { Container, Card, Divider, Pre, Image, Link } from "rebass";

class Company extends Component {
  render() {
    return (
      <Container>
        <Card p={2} height="192" overflow="hidden">
          <Divider color="gray2" />
          <Image src={this.props.company.logo} />
          <Divider color="gray2" />
        </Card>
        <Pre p={2} children={this.props.company.name}>
          <Link href={this.props.company.url}>{this.props.company.name}</Link>
        </Pre>
      </Container>
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
