import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";

import { Card, Divider, Pre, Image } from "rebass";

class Company extends Component {
  render() {
    return (
      <Card p={2} height="192" overflow="hidden">
        <Divider color="gray2" />
        <Image src={this.props.company.logo} />
        <Pre f={0} children={this.props.company.name}>
          {this.props.company.name}
        </Pre>
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
