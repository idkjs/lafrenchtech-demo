import React, { Component } from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { ThumbnailA, Thumbnail } from "./Styles";
class Company extends Component {
  render() {
    return (
      <ThumbnailA href={this.props.company.url}>
        <Thumbnail src={this.props.company.logo} />
      </ThumbnailA>
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
