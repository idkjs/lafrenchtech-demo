// flow

const { makeExecutableSchema } = require("graphql-tools");
const { connectionFromPromisedArray } = require("graphql-relay");
const {
  nodeInterface,
  nodeDefinitions,
  globalIdResolver,
  nodeField,
  nodesField,
  pageInfoType,
  connectionDefinitions,
  connectionArgs,
  mutationWithClientMutationId,
  fromGlobalId
} = require("graphql-relay-tools");
const mdb = require("../db/mdb");
const { ObjectID } = require("mongodb");

const globalIdFetcher = (globalId, { db }) => {
  const { type, id } = fromGlobalId(globalId);
  switch (type) {
    case "Company":
      return db.collection("companies").findOne(ObjectID(id));
    default:
      return null;
  }
};

const { nodeResolver, nodesResolver } = nodeDefinitions(globalIdFetcher);

const { connectionType: CompanyConnection } = connectionDefinitions({
  name: "Company"
});

const schemaDecl = `
  type Query {
    companies${connectionArgs(["filter:CompanyFilter"])}: CompanyConnection
    ${nodeField}
    ${nodesField}
  }

  input CompanyFilter {
    OR: [CompanyFilter!]
    description_contains: String
    url_contains: String
  }

  type Company implements Node {
    id: ID!
    name: String
    logo: String
    employees: Int
    tranch: String
    description: String
    location: String
    address: String
    url: String
    jobs: String
    sector: String
    employees: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [nodeInterface, schemaDecl, CompanyConnection, pageInfoType],

  resolvers: {
    Query: {
      companies: async (_, args, { db }) => {
        let query = {};
        if (args.filter) {
          query = { $or: mdb(db).buildFilters(args.filter) };
        }
        return await connectionFromPromisedArray(
          mdb(db).getCompanies(query),
          args
        );
      },
      node: nodeResolver,
      nodes: nodesResolver
    },

    Node: {
      __resolveType: () => "Company"
    },

    Company: {
      id: globalIdResolver("Company", obj => obj._id),
      name: obj => obj.Company_Name,
      logo: obj => obj.Logo_URL,
      sector: obj => obj.Sector,
      employees: obj => obj.Employees,
      tranch: obj => obj.Tranche,
      description: obj => obj.Description,
      location: obj => obj.Location,
      address: obj => obj.Adresse,
      sector: obj => obj.Sector,
      url: obj => obj.Company_Website,
      jobs: obj => obj.Job_Offers
    }
  }
});

module.exports = schema;
