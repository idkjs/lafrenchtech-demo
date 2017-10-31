import React from "react";
import { createView } from "rrx";

import { Heading } from "rebass";

const PageTitle = props => (
  <Heading {...props} is="h1" f={[2, 3, 4, 5]} my={4} />
);

export default createView(PageTitle);
