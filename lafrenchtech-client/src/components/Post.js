import React from "react";
import { createView } from "rrx";
import Debug from "./Debug";
import Company from "./Company";
import environment from "../Environment";

const Post = props => (
  <div>
    <Company />
    <Debug {...props} />
  </div>
);

export default createView(Post);
