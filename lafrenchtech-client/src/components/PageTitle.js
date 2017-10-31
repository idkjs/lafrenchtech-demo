import React from "react";
import { createView } from "rrx";

import { Heading } from "rebass";

/**
 * 
 * @param {*} props 
 */
const PageTitle = props => (
  <Heading {...props} is="h1" f={[2, 3, 4, 5]} z={30} />
);

export default createView(PageTitle);
