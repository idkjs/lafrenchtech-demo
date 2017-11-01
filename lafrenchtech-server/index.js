// flow
const { MongoClient } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const formatError = require("./formatError");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./schema");
require("dotenv").config();

const start = async () => {
  try {
    const db = await MongoClient.connect(process.env.DB_AZ);
    // const test = await db.collection("companies").findOne();
    // console.log(test);
    const app = express();
    app.use("*", cors());
    const buildOptions = {
      context: {
        db
      },
      schema,
      formatError,
      pretty: true
    };

    app.use("/graphql", bodyParser.json(), graphqlExpress(buildOptions));
    app.use(
      "/graphiql",
      graphiqlExpress({
        endpointURL: "/graphql"
      })
    );

    app.listen(process.env.PORT, () => {
      console.log(
        `GraphiQL Server is now running on http://localhost:${process.env
          .PORT}/graphiql`
      );
    });
  } catch (e) {
    console.log(e);
  }
};

start();
