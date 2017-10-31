import React from "react";
import { Heading } from "rebass";

const PageTitle = props => (
  <Heading {...props} is="h1" f={[5, 6, 7, 8]} my={4} />
);

export default PageTitle;

// import React from "react";
// import { createView } from "rrx";

// import { Heading } from "rebass";

// /**
//  *
//  * @param {*} props
//  */
// const PageTitle = props => (
//   <Heading {...props} is="h1" f={[2, 3, 4, 5]} z={30} />
// );

// export default createView(PageTitle);
