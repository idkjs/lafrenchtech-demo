import React from "react";
import { createView, Link } from "rrx";
import { Toolbar, Box, NavLink, BlockLink, Image } from "rebass";
import Hide from "hidden-styled";
import Tweet from "./Tweet";
import Post from "./Post";

const NavBar = props => (
  <Toolbar bg="black" {...props} m={0}>
    <NavLink
      target="_blank"
      href="https://visa.lafrenchtech.com"
      children="LaFrenchTech"
    />
    <Hide xs>
      <NavLink
        target="_blank"
        href="https://github.com/idkjs/lafrenchtech-demo"
        children="Github"
      />
    </Hide>
    <Hide xs>
      <NavLink
        target="_blank"
        href="https://lafrenchtech.azurewebsites.net"
        children="Demo"
      />
    </Hide>
    <Hide xs>
      <NavLink
        target="_blank"
        href="https://lagraphql.azurewebsites.net/graphiql"
        children="LaGraphQL"
      />
    </Hide>
    <Post pattern="/posts/:id" foo="bar" />
    <Box mx="auto" />
    <Tweet />
    <BlockLink mx={2} py={2} href="https://github.com/idkjs/lafrenchtech-demo">
      <Image src="https://img.shields.io/github/stars/idkjs/lafrenchtech-demo.svg?style=social&label=Star" />
    </BlockLink>
  </Toolbar>
);

export default createView(NavBar);
