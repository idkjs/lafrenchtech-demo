import React, { Component } from "react";
import theme from "./Theme";
import { Provider, Heading, Text } from "rebass";
import { Card } from "./UI";
import { QueryRenderer, graphql } from "react-relay";
import ListPage from "./ListPage";
import environment from "../Environment";
import Corner from "./Corner";

const AppListPageQuery = graphql`
  query AppListPageQuery {
    companies {
      ...ListPage_companies
    }
  }
`;
class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <Card
          bg={theme.colors.pink}
          my={4}
          w={320}
          mx={"auto"}
          color="white"
          p={4}
        >
          <Heading pb={2}>Custom Card</Heading>
          <Text pb={3}>
            This card is just like the Card component in Rebass, but without a
            box shadow option.
          </Text>
          <Text pb={3}>
            This excellent font choice comes from a custom Theme that extends
            the default Rebass theme.
          </Text>
        </Card>

        <Corner />
        <QueryRenderer
          environment={environment}
          query={AppListPageQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <ListPage companies={props.companies} />;
            }
            return <div>Loading</div>;
          }}
        />
      </Provider>
    );
  }
}

export default App;
// import React, { Component } from "react";
// import { QueryRenderer, graphql } from "react-relay";
// import ListPage from "./ListPage";
// import environment from "../Environment";
// import Corner from "./Corner";
// // import Provider from "rebass";

// const AppListPageQuery = graphql`
//   query AppListPageQuery {
//     companies {
//       ...ListPage_companies
//     }
//   }
// `;

// export default class App extends Component {
//   render() {
//     return (
// <div>
//   <Corner />
//   <QueryRenderer
//     environment={environment}
//     query={AppListPageQuery}
//     render={({ error, props }) => {
//       if (error) {
//         return <div>{error.message}</div>;
//       } else if (props) {
//         return <ListPage companies={props.companies} />;
//       }
//       return <div>Loading</div>;
//     }}
//   />
// </div>
//     );
//   }
// }
